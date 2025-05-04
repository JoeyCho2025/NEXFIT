import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

// 建立資料庫連線
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "P@ssw0rd!",       // 根據你自己的設定修改
  database: "forum_db",
};

export async function GET(req, { params }) {
  const { id } = params;
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [rows] = await connection.execute(
      "SELECT * FROM posts WHERE id = ?",
      [id]
    );
    if (rows.length === 0) {
      return NextResponse.json({ error: "找不到文章" }, { status: 404 });
    }
    return NextResponse.json(rows[0]);
  } catch (error) {
    return NextResponse.json({ error: "讀取失敗", detail: error.message }, { status: 500 });
  } finally {
    connection.end();
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  const data = await req.json();
  const { title, content, category, image } = data;

  if (!title || !category) {
    return NextResponse.json({ error: "資料不完整" }, { status: 400 });
  }

  const connection = await mysql.createConnection(dbConfig);
  try {
    await connection.execute(
      "UPDATE posts SET title = ?, content = ?, category = ?, images = ? WHERE id = ?",
      [title, content, category, JSON.stringify([image]), id]
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "更新失敗", detail: error.message }, { status: 500 });
  } finally {
    connection.end();
  }
}
