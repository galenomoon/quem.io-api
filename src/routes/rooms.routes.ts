import { Router } from "express";

const roomsRouter = Router()

roomsRouter.get("/", (_, res) => res.status(200).json({
  message: "SUCCESS!",
  path: "/rooms",
  running_at: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
}))

export default roomsRouter