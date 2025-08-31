import User from "@/models/user";
import { connectToDb } from "@/lib/db";
import { NextResponse } from "next/server";





export const GET = async (req) => {
    try {
        await connectToDb();

        const { searchParams } = new URL(req.url);
        const username = searchParams.get("username");

        if (!username) {
            return NextResponse.json({ message: "Username not provided" }, { status: 400 });
        }

        const userdetails = await User.findOne({ username });
        if (!userdetails) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        return NextResponse.json(userdetails, { status: 200 });
    } catch (error) {
        console.error("Profile fetch error:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};





export const PUT = async (req) => {
    try {
        await connectToDb();

        const { searchParams } = new URL(req.url);
        const username = searchParams.get("username");

        if (!username) {
            return NextResponse.json({ message: "Username not provided" }, { status: 400 });
        }

        const data = await req.json();

        const userdetails = await User.findOne({ username });
        if (!userdetails) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        if (data.username && data.username !== userdetails.username) {
            const existingUsername = await User.findOne({ username: data.username });
            if (existingUsername) {
                return NextResponse.json({ message: "Username already exists" }, { status: 400 });
            }
        }

        if (data.email && data.email !== userdetails.email) {
            const existingEmail = await User.findOne({ email: data.email });
            if (existingEmail) {
                return NextResponse.json({ message: "Email already exists" }, { status: 400 });
            }
        }

        if (data.cnic && data.cnic !== userdetails.cnic) {
            const existingCnic = await User.findOne({ cnic: data.cnic });
            if (existingCnic) {
                return NextResponse.json({ message: "CNIC already exists" }, { status: 400 });
            }
        }

        userdetails.fullname = data.fullname || userdetails.fullname;
        userdetails.email = data.email || userdetails.email;
        userdetails.username = data.username || userdetails.username;
        userdetails.password = data.password || userdetails.password;
        userdetails.cnic = data.cnic || userdetails.cnic;

        await userdetails.save();

        return NextResponse.json(
            { message: "Profile updated successfully", user: userdetails },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};



export const DELETE = async (req) => {
    try {
        await connectToDb();

        const { searchParams } = new URL(req.url);
        const username = searchParams.get("username");

        if (!username) {
            return NextResponse.json({ message: "Username not provided" }, { status: 400 });
        }

        const userdetails = await User.findOne({ username });
        if (!userdetails) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        await userdetails.deleteOne();

        return NextResponse.json({ message: "Profile deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};
