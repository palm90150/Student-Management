import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "../../lib/prisma";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: "กรุณากรอกข้อมูลให้ครบถ้วน" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ message: "อีเมลนี้ถูกใช้งานแล้ว" }, { status: 400 });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        role: "USER",
      },
    });

    return NextResponse.json({ message: "สร้างบัญชีผู้ใช้สำเร็จ", userId: user.id }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "เกิดข้อผิดพลาดบางอย่าง" }, { status: 500 });
  }
}