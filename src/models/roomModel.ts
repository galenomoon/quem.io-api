import { PrismaClient } from "@prisma/client";
import { ICreateRoom, IUpdateRoom } from "../interfaces/rooms";

const prisma = new PrismaClient()

class RoomModel {
  async getAll() {
    const rooms = await prisma.room.findMany()
    return rooms
  }

  async getById(id: number) {
    const rooms = await prisma.room.findUnique({ where: { id } })
    return rooms
  }

  async create({ code }: ICreateRoom) {
    const room = await prisma.room.create({ data: { code } })
    return room
  }

  async update(id: number, { code }: IUpdateRoom) {
    const room = await prisma.room.update({
      where: { id },
      data: { code: code || "" }
    })
    return room
  }

  async patch(id: number, { code }: IUpdateRoom) {
    const current_room = await this.getById(id)
    const room = await prisma.room.update({
      where: { id },
      data: { code: code || current_room?.code }
    })
    return room
  }

  async delete(id: number) {
    await prisma.room.delete({ where: { id } })
    return this.getAll()
  }
}

export default new RoomModel