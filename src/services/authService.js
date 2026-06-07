import prisma from "../../electron/database/prismaClient";

export async function login(
    username,
    password
){

    return prisma.user.findFirst({

        where:{

            username,

            passwordHash:password,

            active:true

        },

        include:{
            role:true
        }

    });

}