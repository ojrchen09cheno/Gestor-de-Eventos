import express from "express"
import * as routes from './index'
import { auth } from "../middlware/auth"
import { upload } from "../middlware/upload"

export const router = express.Router();

router
  .get("/eventos", routes.getAllEvents)
  .get("/eventos/asistencia", routes.assistCount)
  .get("/eventos/:eventId", routes.checkEvent)
  .post("/eventos", auth, routes.createEvent)
  .post("/eventos/upload", auth, upload.single('file'), routes.uploadEvents)
  .put("/eventos/:eventId", auth, routes.editEvent)
  .post("/eventos/asistir/:eventId", auth, routes.assistEvent)
  .delete("/eventos/dejar/:eventId", auth, routes.leaveEvent)
  // Rol admin y auth admin?
  .delete("/eventos/:eventId", auth, routes.deleteEvent)

  .post("/login", routes.login)
  .post("/register", routes.register)