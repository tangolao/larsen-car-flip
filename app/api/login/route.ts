import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = formData.get("password");

  if (password === "admin123") {
    const cookieStore = await cookies();

    cookieStore.set("admin-auth", "true", {
      httpOnly: true,
      secure: false,
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    redirect("/dashboard");
  }

  redirect("/login");
}
