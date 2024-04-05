import { LeaveEventApp } from "@application/services/event/leaveEventApp";

describe("Tests para dejar de asistir a eventos", () => {
  it("Deberia de eliminar la asistencia si el userId y eventId son validos", async () => {
    const data = {
      eventId: 0,
      userId: 0,
    }
    const leaveEventRepo = {
      leaveEvent: jest.fn(),
    }
    const leaveEventTest = new LeaveEventApp(leaveEventRepo);

    const result = await leaveEventTest.leaveEvent(data);

    expect(result.success).toBe(true);
  })

  it("Deberia de dar error si el userId es invalido", async () => {
    const data = {
      eventId: undefined,
      userId: 0,
    }
    const leaveEventRepo = {
      leaveEvent: jest.fn(),
    }
    const leaveEventTest = new LeaveEventApp(leaveEventRepo);

    const result = await leaveEventTest.leaveEvent(data);

    expect(result.message).toBe("Usuario o evento invalido");
  })

  it("Deberia de dar error si el eventId es invalido", async () => {
    const data = {
      eventId: 0,
      userId: "",
    }
    const leaveEventRepo = {
      leaveEvent: jest.fn(),
    }
    const leaveEventTest = new LeaveEventApp(leaveEventRepo);

    const result = await leaveEventTest.leaveEvent(data);

    expect(result.message).toBe("Usuario o evento invalido");
  })
})