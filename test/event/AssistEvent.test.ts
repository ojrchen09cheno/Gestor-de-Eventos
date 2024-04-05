import { AssistEventApp } from "@application/services/event/AssistEventApp";

describe("Tests para servicio de asistir a eventos", () => {
  it("Deberia ser exitoso si se dan un usuario y evento valido", async () => {
    const data = {
      userId: 0,
      eventId: 0
    }

    const result = await assistEventTest.assistEvent(data);

    expect(result.success).toBe(true);
    expect(assistEventRepo.assistEvent).toHaveBeenCalledWith(0, 0);
  })

  it("Deberia de dar error si el userId esta vacio", async () => {
    const data = {
      userId: "",
      eventId: 0
    }

    const result = await assistEventTest.assistEvent(data);

    expect(result.success).toBe(false);
  })

  it("Deberia de dar error si el eventId no es un numero", async () => {
    const data = {
      userId: 0,
      eventId: "failed test"
    }

    const result = await assistEventTest.assistEvent(data);

    expect(result.success).toBe(false);
  })
})

const assistEventRepo = {
  assistEvent: jest.fn().mockResolvedValue(true),
}

const assistEventTest = new AssistEventApp(assistEventRepo);