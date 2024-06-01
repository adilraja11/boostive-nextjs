import prisma from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function PATCH(request, {params}) {
    const formData = await request.formData();

    const userId = params.id;
    const oldPassword = formData.get('oldPassword');
    const newPassword = formData.get('newPassword');

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

        // Bandingkan password lama yang diinput dengan password lama di database
        const compareOldPassword = await bcrypt.compare(oldPassword, findUser.password);

        // Jika password tidak cocok, kirim pesan error
        if (!compareOldPassword) {
            return Response.json({ errorMessage: "Invalid Old Password" }, { status: 404 });
        }

        // Hash the new password
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        const changePassword = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                password: hashedNewPassword
            }
        });

        return Response.json(
            {data: changePassword, message: "User Change Password Successfully"}, 
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