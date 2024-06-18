import { nanoid } from "nanoid";
import prisma from "@/utils/prisma";
import slugify from "slugify";

export async function GET(request, {params}) {
    const searchParams = request.nextUrl.searchParams;
    const contributorEmail = searchParams.get("contributorEmail");

    if (contributorEmail) {
        try {
            const allKontribusi = await prisma.resource.findMany({
                where: {
                    contributorEmail: contributorEmail,
                },
                include: {
                    category: {
                      select: {
                        name: true,
                      },
                    },
                },
            });
    
            return Response.json(
                {data: allKontribusi, message: 'Get Kontribusi Data by Contributor Email Successfully'},
                {status: 200}
            )
        } catch (error) {
            console.log(error);
            return Response.json(
                {error: 'Get Kontribusi Data by Contributor Email Failed'},
                {status: 500}
            )
        }
    }

    try {
        const allKontribusi = await prisma.resource.findMany({
            where: {
                OR: [
                    {
                        status: 'Diproses'
                    },
                    {
                        status: 'Ditolak'
                    }
                ]
            },
            include: {
                category: {
                  select: {
                    name: true,
                  },
                },
            },
        });

        return Response.json(
            {data: allKontribusi, message: 'Get Kontribusi Data Successfully'},
            {status: 200}
        )
    } catch (error) {
        console.log(error);
        return Response.json(
            {error: 'Get Kontribusi Data Failed'},
            {status: 500}
        )
    }
}

export async function POST(request) {
    const formData = await request.formData();

    const id = nanoid();
    const contributorName = formData.get('contributorName');
    const contributorEmail = formData.get('contributorEmail');
    const categoryId = formData.get('categoryId');

    const title = formData.get('title');
    const linkUrl = formData.get('linkUrl');
    const description = formData.get('description');

    try {
        const createKontribusi =  await prisma.resource.create({
            data: {
                id,
                contributorName,
                contributorEmail,
                status: 'Diproses',
                title,
                slug: slugify(title, {lower: true}),
                description,
                linkUrl,
                categoryId
            }
        });
        return Response.json(
            {message: 'Kontribusi Data has been created', data: createKontribusi},
            {status: 201}
        )
    } catch (error) {
        console.log(error);
        return Response.json(
            {error: "Something went wrong. Please try again later"},
            {status: 500},
        );
    }
}