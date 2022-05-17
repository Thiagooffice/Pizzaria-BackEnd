import {Response, Request} from 'express'
import {DetailUserService} from '../../services/user/DetailUserService'

class DetailUserController{
    async handle(req: Request, res: Response){

        const detaiUserService = new DetailUserService()

        const user =  await detaiUserService.execute()

        return res.json(user)

    }
}
export {DetailUserController}