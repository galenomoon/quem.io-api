import { Router } from "express";
import roomsRoutes from "./rooms.routes";

const routes = Router()

routes.use("/rooms", roomsRoutes)
routes.get("/", (_, res) => res.status(200).json({
  message: "SUCCESS!",
  running_at: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }) 
}))

export default routes