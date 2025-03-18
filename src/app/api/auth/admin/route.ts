import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(request: NextRequest) {
  await connectDB();

  const { username, password } = await request.json();

  const admin = await Admin.findOne({ username });
  if (!admin) {
    return NextResponse.json({ message: "Invalid username" }, { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    return NextResponse.json({ message: "Invalid password" }, { status: 401 });
  }

  const token = jwt.sign(
    {
      id: admin._id,
      username: admin.username,
    },
    JWT_SECRET
  );

  return NextResponse.json({ token });
}
