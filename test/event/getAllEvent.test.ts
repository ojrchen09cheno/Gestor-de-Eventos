import { GetAllEventsApp } from "@application/services/event/getAllEventsApp";

describe("Tests para ver todos los eventos", () => {
  it("Deberia de traer todos los eventos si hay", async () => {
    const data = [{
      event0: 0,
      event1: 1,
    }]
    const getAllEventsRepo = {
      getAllEvents: jest.fn().mockResolvedValue(data),
    }
    const getAllEventsTest = new GetAllEventsApp(getAllEventsRepo);

    const result = await getAllEventsTest.getAllEvents();

    expect(result.data).toBe(data);
    expect(result.message).toBe("Eventos encontrados");
  })

  it("Deberia de avisar cuando no hayan eventos", async () => {
    const data = "";
    const getAllEventsRepo = {
      getAllEvents: jest.fn().mockResolvedValue(data),
    }
    const getAllEventsTest = new GetAllEventsApp(getAllEventsRepo);
  
    const result = await getAllEventsTest.getAllEvents();
  
    expect(result.message).toBe("No se han encontrado eventos");
    expect(result.data).toBe(data);
  })
})