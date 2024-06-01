import prisma from "@/utils/prisma";
import { uploadFile } from "@/lib/uploadFile";
import slugify from "slugify";

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

export async function PATCH(request, {params}) {
    const formData = await request.formData();

    const userId = params.id;
    const fullName = formData.get('fullName');
    const profileImage = formData.get('profileImage');
    const gender = formData.get('gender');
    const address = formData.get('address');
    const phoneNumber = formData.get('phoneNumber');

    try {
        await uploadFile({
            Body: profileImage,
            Key: profileImage.name,
            Folder: `profiles` 
        });

        const updateUser = await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                fullName,
                profileImage: slugify(profileImage.name, {lower: true}),
                gender,
                address,
                phoneNumber
            }
        });

        return Response.json(
            {data: updateUser, message: 'User Profile Updated Successfully'},
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