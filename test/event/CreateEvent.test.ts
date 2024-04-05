import { CreateEventApp } from "@application/services/event/createEventApp";

describe("Tests para creacion de eventos", () => {
  it("Deberia de ser exitoso si el evento es valido", async () => {
    const data = {
      name: "testbueno",
      address: "direccionbuena",
      date: "2024-04-04"
    }
    const createEventRepo = {
      createEvent: jest.fn().mockResolvedValue("somedata"),
    }
    const createEventTest = new CreateEventApp(createEventRepo);

    const result = await createEventTest.createEvent(data);

    expect(result.success).toBe(true);
    expect(createEventRepo.createEvent).toHaveBeenCalledWith(data);
  })

  it("Deberia dar si falta el nombre del evento", async () => {
    const data = {
      address: "direccionbuena",
      date: "2024-04-04"
    }
    const createEventRepo = {
      createEvent: jest.fn(),
    }
    const createEventTest = new CreateEventApp(createEventRepo);

    const result = await createEventTest.createEvent(data);

    expect(result.message).toBe("Datos del evento vacios");
  })

  it("Deberia dar si falta la direccion del evento", async () => {
    const data = {
      name: "testbueno",
      date: "2024-04-04"
    }
    const createEventRepo = {
      createEvent: jest.fn(),
    }
    const createEventTest = new CreateEventApp(createEventRepo);

    const result = await createEventTest.createEvent(data);

    expect(result.message).toBe("Datos del evento vacios");
  })

  it("Deberia dar si falta la fecha del evento", async () => {
    const data = {
      name: "testbueno",
      address: "direccionbuena",
    }
    const createEventRepo = {
      createEvent: jest.fn(),
    }
    const createEventTest = new CreateEventApp(createEventRepo);

    const result = await createEventTest.createEvent(data);

    expect(result.message).toBe("Datos del evento vacios");
  })
})