import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Employee from "@/models/Employee";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const employee = await Employee.findById(params.id);
  return NextResponse.json(employee);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const data = await request.json();
  const updatedEmployee = await Employee.findByIdAndUpdate(params.id, data, {
    new: true,
  });
  return NextResponse.json(updatedEmployee);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const deletedEmployee = await Employee.findByIdAndDelete(params.id);
  return NextResponse.json(deletedEmployee);
}
