import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";





class ListUserSendComplimentsService {

    async execute(user_id: string) {
        const complimenteRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimenteRepositories.find({
            where: {
                user_sender: user_id,
            },
        });
        return compliments;
    }

}

export { ListUserSendComplimentsService }