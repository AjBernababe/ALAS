import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Employee from "@/models/Employee";
import verifyToken from "@/middleware/auth";

export async function GET(req: NextRequest) {
  const user = verifyToken(req);

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectDB();
  const employees = await Employee.find();
  return NextResponse.json(employees);
}

export async function POST(request: NextRequest) {
  await connectDB();
  const data = await request.json();
  const newEmployee = await Employee.create(data);
  return NextResponse.json(newEmployee, { status: 201 });
}
