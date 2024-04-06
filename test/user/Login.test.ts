import { LoginApp } from '@application/services/user/loginApp'
import bcrypt from 'bcryptjs'
import { error } from 'console'

describe("Test de login", () => {
  it("Deberia hacer login si el usuario existe y dar token JSON", async () => {
    const dataMock = [{
      username: "test",
      password: bcrypt.hashSync("test", 10),
    }];
    const data = {
      username: "test",
      password: "test"
    }
    const loginRepo = {
      findByUser: jest.fn().mockResolvedValue(dataMock),
    }
    const loginTest = new LoginApp(loginRepo)
    const result = await loginTest.login(data);
    const hasPass = "password" in result.data;

    error(result)
    expect(result.success).toEqual(true);
    expect(result.data).toHaveProperty('token');
    expect(hasPass).toEqual(false);
  })

  it("Deberia de dar error si el usuario no existe", async () => {
    const dataMock = ""
    const data = {
      username: "error",
      password: "error"
    }
    const loginRepo = {
      findByUser: jest.fn().mockResolvedValue(dataMock),
    }
    const loginTest = new LoginApp(loginRepo)
    const result = await loginTest.login(data);
    const hasPass = "password" in result.data;

    expect(result.message).toEqual("Usuario o contraseña incorrectos");
    expect(hasPass).toEqual(false);
  })

  it("Deberia de dar error si la contrasena es incorrecta", async () => {
    const dataMock = {
      username: "test",
      password: "test"
    }
    const data = {
      username: "test",
      password: "error"
    }
    const loginRepo = {
      findByUser: jest.fn().mockResolvedValue(dataMock),
    }
    const loginTest = new LoginApp(loginRepo)
    const result = await loginTest.login(data);
    const hasPass = "password" in result.data;

    expect(result.message).toEqual("Usuario o contraseña incorrectos");
    expect(hasPass).toEqual(false);
  })

  it("Deberia de dar error si el usuario esta vacio", async () => {
    const dataMock = {
      username: "test",
      password: "test"
    }
    const data = {
      username: "test",
    }
    const loginRepo = {
      findByUser: jest.fn().mockResolvedValue(dataMock),
    }
    const loginTest = new LoginApp(loginRepo)
    const result = await loginTest.login(data);

    expect(result.message).toEqual("El usuario o la contraseña estan vacios");
  })

  it("Deberia de dar error si la contraseña esta vacia", async () => {
    const dataMock = {
      username: "test",
      password: "test"
    }
    const data = {
      password: "error"
    }
    const loginRepo = {
      findByUser: jest.fn().mockResolvedValue(dataMock),
    }
    const loginTest = new LoginApp(loginRepo)
    const result = await loginTest.login(data);

    expect(result.message).toEqual("El usuario o la contraseña estan vacios");
  })
})

jest.mock('@config/config', () => ({
  config: {
    SECRET: "test",
    TOKEN_EXPIRE: '48h'
  }
}))