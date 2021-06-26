import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AutehenticateUserService } from "./services/AuthenticateUserService";
import { AutehenticateUserController } from "./controllers/AuthenticateUserController";
const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const autehenticateUserController = new AutehenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/sessions", autehenticateUserController.handle);
router.post("/compliments", createComplimentController.handle)
export { router };
