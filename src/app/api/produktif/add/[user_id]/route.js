import prisma from "@/utils/prisma";
import slugify from "slugify";
import { nanoid } from "nanoid";
import { uploadFile } from "@/lib/uploadFile";

export async function POST(request, {params}) {
    const formData = await request.formData();

    const id = nanoid();
    const categoryId = formData.get('categoryId');

    const featuredImage = formData.get('featuredImage');
    const title = formData.get('title');
    const linkUrl = formData.get('linkUrl');
    const description = formData.get('description');

    const userId = params.user_id;

    try {
        const findUser = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        // Jika user tidak ditemukan, kirim pesan error
        if (!findUser) {
            return Response.json({ errorMessage: "Invalid Credentials" }, { status: 404 });
        }

        await uploadFile({
            Body: featuredImage,
            Key: featuredImage.name,
            Folder: `resources` 
        });

        const createProduktif =  await prisma.resource.create({
            data: {
                id,
                contributorName: findUser.fullName,
                contributorEmail: findUser.email,
                status: 'Diterima',
                title,
                slug: slugify(title, {lower: true}),
                description,
                featuredImage: slugify(featuredImage.name, {lower: true}),
                linkUrl,
                categoryId,
                userId
            }
        });
        return Response.json(
            {message: 'Produktif Data has been created', data: createProduktif},
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