import prisma from "@/utils/prisma";

export async function GET(request, {params}) {
    const searchParams = request.nextUrl.searchParams;
    const categoryId = searchParams.get("categoryId");

    if (categoryId) {
        try {
            const allProduktif = await prisma.resource.findMany({
                where: {
                    categoryId: categoryId,
                    status: 'Diterima',
                }
            });
    
            return Response.json(
                {data: allProduktif, message: 'Get Produktif Data by Category Successfully'},
                {status: 200}
            )
        } catch (error) {
            console.log(error);
            return Response.json(
                {error: 'Get Produktif Data by Category Failed'},
                {status: 500}
            )
        }
    }

    try {
        const allProduktif = await prisma.resource.findMany({
            where: {
                status: 'Diterima'
            }
        });

        return Response.json(
            {data: allProduktif, message: 'Get Produktif Data Successfully'},
            {status: 200}
        )
    } catch (error) {
        console.log(error);
        return Response.json(
            {error: 'Get Produktif Data Failed'},
            {status: 500}
        )
    }
}