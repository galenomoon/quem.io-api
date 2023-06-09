import { Router } from "express";

const routes = Router()

routes.get("/", (_, res) => res.status(200).json({
  message: "API is running!",
  running_at: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }) 
}))

export default routes