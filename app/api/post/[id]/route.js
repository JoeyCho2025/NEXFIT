// app/api/post/[id]/route.js

// ✅ 模擬資料庫（多筆資料範例）
let fakeDB = [
  {
    id: "1",
    title: "如何制定一個有效的運動計畫",
    content: "這是一篇關於運動計畫的文章內容...",
    category: "運動",
    image: "/images/post1.jpg",
  },
  {
    id: "2",
    title: "健康飲食的五大原則",
    content: "均衡飲食對健康非常重要，本文介紹五大原則...",
    category: "飲食",
    image: "/images/post2.jpg",
  },
  {
    id: "3",
    title: "減重過程常見的迷思",
    content: "減重時常常會遇到許多迷思，本文將一一破解...",
    category: "減重",
    image: "/images/post3.jpg",
  },
  {
    id: "123",
    title: "測試貼文123",
    content: "這是 id 為 123 的測試貼文內容",
    category: "測試",
    image: "/images/post123.jpg",
  },
];

export async function GET(req, { params }) {
  const post = fakeDB.find((p) => p.id === params.id);
  if (!post) return new Response("Not found", { status: 404 });
  return Response.json(post);
}

export async function PUT(req, { params }) {
  const body = await req.json();
  const index = fakeDB.findIndex((p) => p.id === params.id);

  if (index === -1) return new Response("Not found", { status: 404 });

  fakeDB[index] = {
    ...fakeDB[index],
    ...body,
  };
  return Response.json({ message: "Updated", post: fakeDB[index] });
}

export async function DELETE(req, { params }) {
  const index = fakeDB.findIndex((p) => p.id === params.id);
  if (index === -1) return new Response("Not found", { status: 404 });

  const deleted = fakeDB.splice(index, 1);
  return Response.json({ message: "Deleted", post: deleted[0] });
}
