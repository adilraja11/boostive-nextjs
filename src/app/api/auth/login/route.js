import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

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
        const payload = {
            id: findUser.id,
            fullName: findUser.fullName,
            email: findUser.email,
            profileImage: findUser.profileImage
        };

        // TODO!: Buat Token
        const token = sign(payload, process.env.JWT_SECRET, {expiresIn: '7d'});
        const res = NextResponse.json({data: payload, message: 'Login succesfully'}, {status: 200});
        res.cookies.set('token', token);

        return res;
    } catch (error) {
        console.log(error);
        return Response.json(
            {error: 'Something went wrong. Please try again later'},
            {status: 500}
        )
    }
}