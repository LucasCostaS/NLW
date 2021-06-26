import { ListUsersServices } from "../services/ListUsersServices"
import { Request, Response } from "express";




class ListUsersController {

    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const listUserscontroller = new ListUsersServices();

        const users = await listUserscontroller.execute(user_id)

        return response.json(users);

    }

}

export { ListUsersController }