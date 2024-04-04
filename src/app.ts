import express from "express";
import "dotenv/config";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { pool } from "./infrastructure/repositories/postgres/postgres"
// import swaggerSetup from "./docs/swagger"

const PORT = process.env.PORT;
const app = express();

//Middleware para loggear solicitudes a la API
app.use(morgan("tiny"));
app.use(express.json());

app.listen(PORT, () => console.log(`Escuchando el puerto ${PORT}`));
const test = async () =>{
  const r = await pool.query(`SELECT * FROM users`);
  console.log(r.rows);
}
test();