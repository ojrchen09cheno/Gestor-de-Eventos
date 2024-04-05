import express from "express"
import * as routes from './index'
import { auth } from "../middlware/auth"

export const router = express.Router();

router
  .get("/eventos", routes.getAllEvents)
  .get("/eventos/:eventId", routes.checkEvent)
  .post("/eventos", auth, routes.createEvent)
  .post("/eventos/asistir/:eventId", auth, routes.assistEvent)
  .post("/eventos/dejar/:eventId", auth, routes.leaveEvent)
  // Rol admin y auth admin?
  .delete("/eventos/:eventId", auth, routes.deleteEvent)

  .post("/login", routes.login)
  .post("/register", routes.register)