import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");
  if (!file) {
    return new Response(JSON.stringify({ error: "No file" }), { status: 400 });
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // 確保 uploads 目錄存在
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });

  // 防止檔名衝突，可加上時間戳
  const filename = `${Date.now()}_${file.name}`;
  await writeFile(
    path.join(uploadDir, filename),
    buffer
  );

  // 回傳圖片 URL
  return Response.json({ url: `/uploads/${filename}` });
}