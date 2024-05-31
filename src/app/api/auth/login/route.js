import prisma from "@/utils/prisma";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

export async function POST(request) {
    const {email, password} = await request.json();

    try {
        const findUser = await prisma.user.findUnique({
            where: {
                email
            }
        });

        // Jika user tidak ditemukan, kirim pesan error
        if (!findUser) {
            return Response.json({ errorMessage: "Invalid Credentials" }, { status: 404 });
        }

        // Bandingkan password yang diinput dengan password di database
        const comparePassword = await bcrypt.compare(password, findUser.password);
        
        // Jika password tidak cocok, kirim pesan error
        if (!comparePassword) {
            return Response.json({ errorMessage: "Invalid Credentials" }, { status: 404 });
        }

        // TODO!: Jika password cocok, buat JWT Token

        // TODO!: Buat Token

        return Response.json({message: 'Login succesfully'}, {status: 200});
    } catch (error) {
        console.log(error);
        return Response.json(
            {error: 'Something went wrong. Please try again later'},
            {status: 500}
        )
    }
}