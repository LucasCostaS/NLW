import { request, Request, Response } from "express";
import { AutehenticateUserService } from "../services/AuthenticateUserService";

class AutehenticateUserController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body

        const authenticateUserService = new AutehenticateUserService();

        const token = await authenticateUserService.execute({
            email, password,
        });

        return response.json(token);

    }
}

export { AutehenticateUserController }