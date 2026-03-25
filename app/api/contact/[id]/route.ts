import { prisma } from "@/lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const numericId = Number(id);

  await prisma.contactMessage.delete({
    where: { id: numericId },
  });

  return Response.json({ success: true });
}
