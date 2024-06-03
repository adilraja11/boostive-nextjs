import prisma from "@/utils/prisma";
import { uploadFile } from "@/lib/uploadFile";
import slugify from "slugify";

export async function DELETE(request, {params}) {
    const resourceId = params.resource_id;

    try {
        await prisma.resource.delete({
            where: {
                id: resourceId
            }
        });

        return Response.json(
            {message: 'Produktif Data has been Deleted'},
        )
    } catch (error) {
        console.log(error);
        return Response.json(
            {error: "Something went wrong. Please try again later"},
            {status: 500},
        );
    }
}

export async function PATCH(request, {params}) {
    const formData = await request.formData();

    const categoryId = formData.get('categoryId');

    const featuredImage = formData.get('featuredImage');
    const title = formData.get('title');
    const linkUrl = formData.get('linkUrl');
    const description = formData.get('description');

    const resourceId = params.resource_id;

    try {
        await uploadFile({
            Body: featuredImage,
            Key: featuredImage.name,
            Folder: `resources` 
        });

        const updateProduktif =  await prisma.resource.update({
            where: {
                id: resourceId
            },
            data: {
                title,
                slug: slugify(title, {lower: true}),
                description,
                featuredImage: slugify(featuredImage.name, {lower: true}),
                linkUrl,
                categoryId,
            }
        });

        return Response.json(
            {message: 'Produktif Data has been Updated', data: updateProduktif},
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