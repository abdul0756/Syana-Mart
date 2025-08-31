import User from "@/models/user";
import { connectToDb } from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";


export const PUT = async (req) => {
    const { email, password } = await req.json();
    await connectToDb();
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await User.findOneAndUpdate({ email: email }, { password: hashedPassword });
        return NextResponse.json({ message: "Password changed successfully!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}