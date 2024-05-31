import prisma from "@/utils/prisma";

export async function GET(request, {params}) {
    try {
        const userId = params.id;
        
        const userData = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        return Response.json(
            {data: userData, message: 'GET User Profile Detail Success'},
            {status: 200}
    )
    } catch (error) {
        console.log(error);
        return Response.json(
            {message: 'GET User Profile Detail Failed'},
            {status: 500}
        )
    }
    
}