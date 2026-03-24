import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, carTitle } = body;

    if (!name || !email || !message || !carTitle) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    const savedMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        message,
        carTitle,
      },
    });

    console.log("📩 Saved contact message:", savedMessage);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to save contact message:", error);

    return NextResponse.json(
      { success: false, error: "Failed to save message" },
      { status: 500 },
    );
  }
}
