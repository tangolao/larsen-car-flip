import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = formData.get("password");

  if (password === process.env.ADMIN_PASSWORD) {
    const cookieStore = await cookies();

    cookieStore.set("admin-auth", "true", {
      httpOnly: true,
      path: "/",
    });

    redirect("/dashboard");
  }

  redirect("/login?error=1");
}
