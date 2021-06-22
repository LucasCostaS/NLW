import { UserRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {

    async execute({ name, email, admin }: IUserRequest) {
        const usesrRepository = new UserRepositories();

        if (!email) {
            throw new Error("Email Incorrect");
        }

        const userAlreadyExists = await usesrRepository.findOne({
            email,
        });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const user = usesrRepository.create({
            name,
            email,
            admin,
        });

        await usesrRepository.save(user);

        return user;
    }

}

export { CreateUserService }