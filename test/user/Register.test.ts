import { RegisterApp } from "@application/services/user/registerApp";

describe("Test para registro de usuario", () => {
  it("Deberia crear un usuario si no existe", async () => {

    const data = {
      username: "gooduser",
      password: "goodpass"
    };
    const registerAppRepo = {
      findByUsername: jest.fn(),
      register: jest.fn().mockResolvedValue(true)
    }
    const registerTest = new RegisterApp(registerAppRepo);

    const result = await registerTest.register(data);
    const hassPass = "password" in data;

    expect(result.success).toBe(true);
    expect(registerAppRepo.findByUsername).toHaveBeenCalledWith(data.username);
    expect(registerAppRepo.register).toHaveBeenCalledWith(data);
    expect(hassPass).toBe(false);
  })

  it("Deberia de dar un error si el usuario ya existe", async () => {
    const data = {
      username: "gooduser",
      password: "goodpass",
      name: "test"
    };
    const registerAppRepo = {
      findByUsername: jest.fn().mockResolvedValue("someuser"),
      register: jest.fn(),
    }
    const registerTest = new RegisterApp(registerAppRepo);

    const result = await registerTest.register(data);
    const hassPass = "password" in data;

    expect(result.success).toBe(false);
    expect(registerAppRepo.findByUsername).toHaveBeenCalledWith(data.username);
    expect(hassPass).toBe(false);
  })

  it("Deberia de dar un error si el usuario esta vacio", async () => {
    const data = {
      password: "goodpass"
    };
    const registerAppRepo = {
      findByUsername: jest.fn(),
      register: jest.fn(),
    }
    const registerTest = new RegisterApp(registerAppRepo);

    const result = await registerTest.register(data);
    const hassPass = "password" in data;

    expect(result.success).toBe(false);
    expect(hassPass).toBe(false);
    expect(result.message).toBe("Usuario, contraseña, o nombre vacios");
  })

  it("Deberia de dar un error si la contrasena esta vacia", async () => {
    const data = {
      username: "gooduser"
    };
    const registerAppRepo = {
      findByUsername: jest.fn(),
      register: jest.fn(),
    }
    const registerTest = new RegisterApp(registerAppRepo);

    const result = await registerTest.register(data);
    const hassPass = "password" in data;

    expect(result.success).toBe(false);
    expect(hassPass).toBe(false);
    expect(result.message).toBe("Usuario, contraseña, o nombre vacios");
  })
})