import User from "@/models/user";
import { connectToDb } from "@/lib/db";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
    const { fullname, email, username, password, cnic } = await req.json();
    await connectToDb(); 
    const hashedPassword = await bcrypt.hash(password, 10);
    const existUsername = await User.findOne({ username: username });
    const existEmail = await User.findOne({ email: email });
    const existCnic = await User.findOne({ cnic: cnic });
    
  try {
    if (existUsername) {
      return new Response(
        JSON.stringify({ message: "Username already exists" }),
        { status: 400 }
      );
    }

    if (existEmail) {
      return new Response(
        JSON.stringify({ message: "Email already exists" }),
        { status: 400 }
      );
    }

    if (existCnic) {
      return new Response(
        JSON.stringify({ message: "CNIC already exists" }),
        { status: 400 }
      );
    }
    await User.create({
      fullname: fullname,
      email: email,
      username: username,
      password: hashedPassword,
      cnic: cnic,
    });

    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
};