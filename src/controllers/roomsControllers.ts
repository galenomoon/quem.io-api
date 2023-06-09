import { Request, Response } from "express";
import roomUseCase from "../useCases/roomUseCase";

class RoomsController {
  async index(_: Request, res: Response) {
    const data = await roomUseCase.getAll()
    return res.status(200).json(data)
  }

  async show(req: Request, res: Response) {
    const { id } = req.params
    const data = await roomUseCase.getById(Number(id))
    return res.status(200).json(data)
  }

  async create(req: Request, res: Response) {
    const { code } = req.body
    const data = await roomUseCase.create({ code })
    return res.status(200).json(data)
  }

  async update(req: Request, res: Response) {
    const { id } = req.params
    const { code } = req.body
    const data = await roomUseCase.update(Number(id), { code })
    return res.status(201).json(data)
  }

  async patch(req: Request, res: Response) {
    const { id } = req.params
    const { code } = req.body
    const data = await roomUseCase.update(Number(id), { code })
    return res.status(201).json(data)
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params
    const data = await roomUseCase.delete(Number(id))
    return res.status(200).json(data)
  }
}

export default new RoomsController()