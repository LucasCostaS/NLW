import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer"





class ListUsersServices {

    async execute(user_id: string) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        const users = await usersRepositories.find();
        return users;
    }

}

export { ListUsersServices }