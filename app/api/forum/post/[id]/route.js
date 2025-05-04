import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

// ✅ 建立資料庫連線（依你自己的 config 調整）
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "P@ssw0rd!",
  database: "forum_db",
});

// ✅ 取得單篇文章
export async function GET(req, { params }) {
  const postId = params.id;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM posts WHERE id = ?",
      [postId]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "找不到此篇文章" },
        { status: 404 }
      );
    }

    // ✅ 若有 images 是 JSON 字串，要先轉為陣列
    const post = rows[0];
    if (typeof post.images === "string") {
      try {
        post.images = JSON.parse(post.images);
      } catch {
        post.images = [];
      }
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("查詢文章錯誤:", error);
    return NextResponse.json({ error: "伺服器錯誤" }, { status: 500 });
  }
}
