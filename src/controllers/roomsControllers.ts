import { Request, Response } from "express";

class RoomsController {
  async index(_: Request, res: Response) {
    return await res.status(200).json({
      message: "SUCCESS!",
      path: "/rooms",
      method: "GET",
      running_at: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
    })
  }

  async show(req: Request, res: Response) {
    const { id } = req.params

    return await res.status(200).json({
      message: "SUCCESS!",
      path: `/rooms/${id}`,
      method: "GET",
      running_at: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
    })
  }

  async create(req: Request, res: Response) {
    const { code } = req.body

    return await res.status(201).json({
      message: "SUCCESS!",
      path: "/rooms",
      method: "POST",
      running_at: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
      body: { code }
    })
  }

  async update(req: Request, res: Response) {
    const { id } = req.params
    const { code } = req.body

    return await res.status(200).json({
      message: "SUCCESS!",
      path: `/rooms/${id}`,
      method: "PUT",
      running_at: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
      body: { code }
    })
  }

  async patch(req: Request, res: Response) {
    const { id } = req.params
    const { code } = req.body

    return await res.status(200).json({
      message: "SUCCESS!",
      path: `/rooms/${id}`,
      method: "PATCH",
      running_at: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
      body: { code }
    })
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params

    return await res.status(200).json({
      message: "SUCCESS!",
      path: `/rooms/${id}`,
      method: "DELETE",
      running_at: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
    })
  }
}

export default new RoomsController()