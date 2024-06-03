import prisma from "@/utils/prisma";
import slugify from "slugify";
import { uploadFile } from "@/lib/uploadFile";

export async function GET(request, {params}) {
    const resourceId = params.resource_id;

    const detailKontribusi = await prisma.resource.findUnique({
        where: {
            id: resourceId
        },
        select: {
            contributorName: true,
            contributorEmail: true,
            status: true,
            title: true,
            description: true,
            featuredImage: true,
            linkUrl: true,
        }
    });

    return Response.json(
        {data: detailKontribusi, message: 'Get Detail Kontribusi Data Successfully'},
        {status: 200}
    )
}

export async function PATCH(request, { params }) {
    const formData = await request.formData();

    const resourceId = params.resource_id;

    const status = formData.get('status');
    const featuredImage = formData.get('featuredImage');

    try {
        // If Ditolak or Diproses only update on status field
        if (status === 'Ditolak' || status === 'Diproses') {
            const updateStatus = await prisma.resource.update({
                where: {
                    id: resourceId
                },
                data: {
                    status
                }
            });
            console.log(updateStatus);
            return Response.json(
                {message: "Update Status Kontribusi Successfully"}, 
                {status: 201}
            );
        }

        await uploadFile({
            Body: featuredImage,
            Key: featuredImage.name,
            Folder: `resources` 
        });

        const updateStatus = await prisma.resource.update({
            where: {
                id: resourceId
            },
            data: {
                status,
                featuredImage: slugify(featuredImage.name, {lower: true}),
            }
        });

        console.log(updateStatus);
        return Response.json(
            {message: "Update Status Kontribusi Successfully"}, 
            {status: 201}
        );
    } catch (error) {
        console.log(error);
        return Response.json(
            {error: "Something went wrong. Please try again later"},
            {status: 500},
        );
    }
}