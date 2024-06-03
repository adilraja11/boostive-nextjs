import prisma from "@/utils/prisma";

export async function GET(request, {params}) {
    const slug = params.slug;

    try {
        const produktifDetail = await prisma.resource.findFirst({
            where: {
                slug: slug
            },
        })
        return Response.json(
            {data: produktifDetail, message: 'Get Produktif Detail Successfully'},
            {status: 200}
        )
    } catch (error) {
        console.log(error);
        return Response.json(
            {error: 'Get Produktif Detail Failed'},
            {status: 500}
        )
    }
}