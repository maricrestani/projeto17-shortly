import { Router } from "express";
import { signUp } from "../controllers/authentication.controller.js";

const signUpRouter = Router();

signUpRouter.post("/signup", signUp);

export default signUpRouter;