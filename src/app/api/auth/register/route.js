import bcrypt from 'bcrypt';

import prisma from "@/utils/prisma";
import { uploadFile } from '@/lib/uploadFile';
import slugify from 'slugify';

export async function POST(request) {
    const formData = await request.formData();

    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const password = formData.get('password');
    const profileImage = formData.get('profileImage');
    const gender = formData.get('gender');
    const address = formData.get('address');
    const phoneNumber = formData.get('phoneNumber');

    // Upload Profile Image
    try {
        await uploadFile({
            Body: profileImage,
            Key: profileImage.name,
            Folder: `profiles` 
        })
    } catch (error) {
        console.log(error);
    }

    try {
        // Create Hashed Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user to database
        const createUser = await prisma.user.create({
            data: {
                fullName,
                email,
                password: hashedPassword,
                profileImage: slugify(profileImage.name, {lower: true}),
                gender,
                address,
                phoneNumber,
                role: 'SUPERADMIN'
            }
        });

        return Response.json(
            {data: createUser, message: "User Created Successfully"}, 
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