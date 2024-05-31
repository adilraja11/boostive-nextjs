import prisma from "@/utils/prisma";
import { uploadFile } from "@/lib/uploadFile";
import slugify from "slugify";

export async function GET() {
    try {
        const allCategories = await prisma.category.findMany();

        return Response.json(
            {data: allCategories, message: 'Get Categories Successfully'},
            {status: 200}
        )
    } catch (error) {
        console.log(error);
        return Response.json(
            {message: 'Get Categories Failed'},
            {status: 500}
        )
    }
}


export async function POST(request) {
    const formData = await request.formData();

    const name = formData.get('name');
    const description = formData.get('description');
    const iconImage = formData.get('iconImage');
    const backgroundColor = formData.get('backgroundColor');

    // Upload Categories Image
    try {
        await uploadFile({
            Body: iconImage,
            Key: iconImage.name,
            Folder: `categories`
        })
    } catch (error) {
        console.log(error);
    }

    // Create category to database
    try {
        const createCategory = await prisma.category.create({
            data: {
                name,
                description,
                iconImage: slugify(iconImage.name, {lower: true}),
                backgroundColor
            }
        });

        return Response.json(
            {data: createCategory, message: 'Category created successfully'},
            {status: 201}
        )
    } catch (error) {
        console.log(error);
        return Response.json(
            {message: 'Category created failed'},
            {status: 500}
        )
    }
}