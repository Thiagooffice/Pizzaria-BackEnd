import prismaClient from "../../prisma";
import {compare} from 'bcryptjs'

interface AuthRequest{
    email: string
    password: string
}

class AuthUserService{
    async execute({email, password}: AuthRequest){

        //verificar se o email existe
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error("User/password incorrect!")
        }

        //verificar se a senha esta correta
        const passwordMacth = await compare(password, user.password)

        if(!passwordMacth){
            throw new Error("User/password incorrect!")
        }

        

        return {ok: true}
    
    }
}

export {AuthUserService}