import { EditEventApp } from "@application/services/event/editEventApp";

describe("Tests para editar eventos", () => {
  it("Deberia editar un evento si los datos son validos", async () => {
    const data = {
      eventId: 0,
      updateEvent: {
        name: "nuevonombre",
        address: "nuevadireccion",
        descripcion: "nuevadescripcion",
      }
    }
    const editEventRepo = {
      editEvent: jest.fn().mockResolvedValue(true)
    }
    const editEventTest = new EditEventApp(editEventRepo);

    const result = editEventTest.editEvent(data.eventId, data.updateEvent);

    expect((await result).success).toBe(true);
    expect(editEventRepo.editEvent).toHaveBeenCalledWith(data.eventId, data.updateEvent);
  })

  it("Deberia de dar error si el eventId es invalido", async () => {
    const data = {
      eventId: "",
      updateEvent: {
        name: "nuevonombre",
      }
    }
    const editEventRepo = {
      editEvent: jest.fn(),
    }
    const editEventTest = new EditEventApp(editEventRepo);

    //@ts-ignore
    const result = await editEventTest.editEvent(data.eventId, data.updateEvent);

    expect(result.message).toBe("Evento invalido");
  })

  it("Deberia de dar error si no hay datos para actualizar", async () => {
    const data = {
      eventId: 0,
    }
    const editEventRepo = {
      editEvent: jest.fn(),
    }
    const editEventTest = new EditEventApp(editEventRepo);

    const result = await editEventTest.editEvent(data.eventId, null);

    expect(result.message).toBe("Datos para actualizar invalidos");
  })
})