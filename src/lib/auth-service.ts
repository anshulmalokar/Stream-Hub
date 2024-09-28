import { currentUser } from "@clerk/nextjs/server"
import prisma from "@/db";
export async function getSelf(){
    const user = await currentUser();
    if(user){
        try{
            const self_user = await prisma.user.findFirst({
                where:{
                    externalUserId: user.id
                }
            });
            return self_user;
        }catch(e){
            return null;
        }
    }
}
