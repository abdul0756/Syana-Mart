import User from "@/models/user";
import { connectToDb } from "@/lib/db";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";


const otp = Math.floor(1000 + Math.random() * 9000);
export const POST = async (req) => {
    const { email } = await req.json();
    await connectToDb();
    const user = await User.findOne({ email: email });
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
    try {

        if (!user) return new Response(JSON.stringify({ message: "User is not registered with this email" }), { status: 404 });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Syana Mart OTP Verification",
            text: `Your OTP code is: ${otp}`,
        });

        
    return NextResponse.json({ message: "OTP sent to your email" }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });}
};

export const PUT = async (req) => {
    const { otp } = await req.json();
        try {
        if (otp === otp) {
            return NextResponse.json({ message: "OTP verified successfully!" }, { status: 200 });
        }
        else {
            return NextResponse.json({ message: "Invalid OTP" }, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}