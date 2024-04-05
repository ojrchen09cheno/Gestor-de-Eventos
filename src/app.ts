import express from "express";
import "dotenv/config";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { pool } from "./infrastructure/repositories/postgres/postgres"
import swaggerSetup from "./docs/swagger"
import { router } from "./infrastructure/api/router/routes";

const PORT = process.env.PORT;
const app = express();

//Middleware para loggear solicitudes a la API
app.use(morgan("tiny"));
app.use(express.json());

app.use("/", router)
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSetup))

app.listen(PORT, () => console.log(`Escuchando el puerto ${PORT}`));