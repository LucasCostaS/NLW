import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AutehenticateUserService } from "./services/AuthenticateUserService";
import { AutehenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceivedComplimentsController } from "./controllers/ListUserReceivedComplimentsController";

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const autehenticateUserController = new AutehenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/sessions", autehenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle)
router.get("/users/complimets/send", ensureAuthenticated, listUserSendComplimentsController.handle)
router.get("/users/complimets/receive", ensureAuthenticated, listUserReceivedComplimentsController.handle)

export { router };
