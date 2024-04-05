import { CheckEventApp } from "@application/services/event/CheckEventApp";

describe("Tests para servicio de mirar 1 evento", () => {
  it("Deberia de retornar un evento si es valido", async () => {
    const data = {
      eventId: 0,
    }
    const checkEventRepo = {
      checkEvent: jest.fn().mockResolvedValue(),
    }
    const checkEventTest = new CheckEventApp(checkEventRepo);
  })

  it("Deberia de dar error si el eventId es invalido", async () => {
    
  })

  it("Deberia de retornar error si no se encuentra un evento", async () => {
    
  })
})