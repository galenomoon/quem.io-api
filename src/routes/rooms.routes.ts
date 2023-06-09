import { Router } from "express";
import roomsControllers from "../controllers/roomsControllers";

const roomsRouter = Router()

roomsRouter.get("/", roomsControllers.index)
roomsRouter.get("/:id", roomsControllers.show)
roomsRouter.post("/", roomsControllers.create)
roomsRouter.put("/:id", roomsControllers.update)
roomsRouter.patch("/:id", roomsControllers.patch)
roomsRouter.delete("/:id", roomsControllers.delete)

export default roomsRouter