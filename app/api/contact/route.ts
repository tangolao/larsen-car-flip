import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  console.log("New contact message:", body);

  return NextResponse.json({
    success: true,
  });
}
