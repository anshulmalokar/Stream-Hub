import prisma from "@/db";
import { getSelf } from "./auth-service";

export const getRecomended = async () => {
    try{
        const users = await prisma.user.findMany({
            orderBy:{
                createdAt: "desc"
            }
        });
        return users;
    }catch(e){
        return [];
    }
}