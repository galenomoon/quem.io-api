import { ICreateRoom, IUpdateRoom } from "../interfaces/rooms";
import roomModel from "../models/roomModel";
import AppError from "../errors";

class RoomUseCase {
  async getAll() {
    const rooms = await roomModel.getAll()
    return rooms
  }

  async getById(id: number) {
    const rooms = await roomModel.getById(id)
    return rooms
  }

  async create({ code }: ICreateRoom) {
    if (!code) throw new AppError("Code is required")
    const room = await roomModel.create({ code })
    return room
  }

  async update(id: number, { code }: IUpdateRoom) {
    if (!this.getById(id)) throw new AppError("Room not found")
    const room = await roomModel.update(id, { code })
    return room
  }

  async patch(id: number, { code }: IUpdateRoom) {
    if (!this.getById(id)) throw new AppError("Room not found")
    const room = await roomModel.update(id, { code })
    return room
  }

  async delete(id: number) {
    if (!this.getById(id)) throw new AppError("Room not found")
    await roomModel.delete(id)
    return this.getAll()
  }
}

export default new RoomUseCase