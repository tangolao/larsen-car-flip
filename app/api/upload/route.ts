import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise<{ secure_url: string }>(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "larsen-car-flip/cars",
            },
            (error, result) => {
              if (error || !result) {
                reject(error);
                return;
              }

              resolve({ secure_url: result.secure_url });
            },
          )
          .end(buffer);
      },
    );

    return NextResponse.json({
      url: result.secure_url,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
