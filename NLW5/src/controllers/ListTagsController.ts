import { ListTagsService } from "../services/ListTagsService"
import { Request, Response } from "express";




class ListTagsController {

    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const listTagsService = new ListTagsService();

        const tags = await listTagsService.execute(user_id)

        return response.json(tags);

    }

}

export { ListTagsController }