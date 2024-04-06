import { CheckEventApp } from "@application/services/event/checkEventApp";

describe("Tests para servicio de mirar 1 evento", () => {
  it("Deberia de retornar un evento si es valido", async () => {
    const data = {
      eventId: 0,
    }
    const checkEventRepo = {
      checkEvent: jest.fn().mockResolvedValue(['true']),
    }
    const checkEventTest = new CheckEventApp(checkEventRepo);

    const result = await checkEventTest.checkEvent(data.eventId);

    expect(result.success).toBe(true);
    expect(checkEventRepo.checkEvent).toHaveBeenCalledWith(0);
  })

  it("Deberia de dar error si el eventId es invalido", async () => {
    const data = {
      eventId: "" as any,
    }
    const checkEventRepo = {
      checkEvent: jest.fn(),
    }

    const checkEventTest = new CheckEventApp(checkEventRepo)

    const result = await checkEventTest.checkEvent(data.eventId);

    expect(result.message).toBe("Evento invalido");
  })

  it("Deberia de retornar error si no se encuentra un evento", async () => {
    const data = {
      eventId: 6,
    }
    const checkEventRepo = {
      checkEvent: jest.fn().mockResolvedValue(''),
    }

    const checkEventTest = new CheckEventApp(checkEventRepo)

    const result = await checkEventTest.checkEvent(data.eventId);

    expect(result.message).toBe("Evento no encontrado");
  })
})