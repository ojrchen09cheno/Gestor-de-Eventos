import { DeleteEventApp } from "@application/services/event/deleteEventApp";

describe("Tests para eliminar eventos", () => {
  it("Deberia eliminar un elemento si el eventId es valido", async () => {
    const data = {
      eventId: 0
    }
    const deleteEventRepo = {
      deleteEvent: jest.fn().mockResolvedValue(['true']),
    }
    const deleteEventTest = new DeleteEventApp(deleteEventRepo);

    const result = await deleteEventTest.deleteEvent(data.eventId);

    expect(result.success).toBe(true);
    expect(deleteEventRepo.deleteEvent).toHaveBeenCalledWith(data.eventId);
  })

  it("Deberia dar error si el eventId es invalido", async () => {
    const data = {
      eventId: ""
    }
    const deleteEventRepo = {
      deleteEvent: jest.fn(),
    }
    const deleteEventTest = new DeleteEventApp(deleteEventRepo);

    //@ts-ignore
    const result = await deleteEventTest.deleteEvent(data.eventId);

    expect((result).message).toBe("Evento invalido");
  })

  it("Deberia dar error si el evento no existe", async () => {
    const data = {
      eventId: 5
    }
    const deleteEventRepo = {
      deleteEvent: jest.fn().mockResolvedValue(false),
    }
    const deleteEventTest = new DeleteEventApp(deleteEventRepo);

    const result = await deleteEventTest.deleteEvent(data.eventId);

    expect((result).message).toBe("El evento no existe");
  })
})