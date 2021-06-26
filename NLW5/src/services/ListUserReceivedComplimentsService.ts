import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";





class ListUserReceivedComplimentsService {

    async execute(user_id: string) {
        const complimenteRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimenteRepositories.find({
            where: {
                user_receiver: user_id,
            },
            relations: ["userSender", "userReceiver", "tag"]
        });
        return compliments;
    }

}

export { ListUserReceivedComplimentsService }