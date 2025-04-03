import { Router } from "express";
import userController from "../controllers/users/user.controller.js";

const userRouter = Router()

userRouter.post('/getuser',(userController.validarLogin))


export default userRouter;