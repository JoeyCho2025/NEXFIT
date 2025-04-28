"use client";

import { useState, useEffect } from "react";

export default function ForumPage() {
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("全部");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const hotPosts = [
    { id: 1, title: "熱門文章1", image: "/images/hot1.jpg" },
    { id: 2, title: "熱門文章2", image: "/images/hot2.jpg" },
    { id: 3, title: "熱門文章3", image: "/images/hot3.jpg" },
  ];

  const announcements = [
    { id: 1, title: "系統維護通知" },
    { id: 2, title: "新功能上線啦！" },
    { id: 3, title: "會員活動開跑" },
  ];

  useEffect(() => {
    fetch("/api/forum")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("資料讀取失敗：", err));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const categories = ["全部", "運動", "健康", "營養"];
  const filteredPosts =
    activeCategory === "全部"
      ? currentPosts
      : currentPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="flex max-w-7xl mx-auto px-4 py-8 gap-8">
      {/* 左側 Sidebar */}
      <SidebarLeft />

      {/* 中間內容區 */}
      <main className="flex-1">
        <HotCarousel hotPosts={hotPosts} />

        {/* 分類 tabs */}
        <div className="flex flex-wrap gap-2 my-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold ${
                activeCategory === cat
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 文章列表 */}
        <PostList posts={filteredPosts} />

        {/* 分頁器 */}
        <div className="flex gap-2 mt-6">
          {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, idx) => (
            <button
              key={idx + 1}
              onClick={() => setCurrentPage(idx + 1)}
              className={`w-10 h-10 rounded-full text-sm ${
                currentPage === idx + 1
                  ? "bg-black text-white"
                  : "bg-gray-300 text-black hover:bg-gray-400"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </main>

      {/* 右側 Sidebar */}
      <SidebarRight announcements={announcements} />
    </div>
  );
}

// 熱門輪播子組件
function HotCarousel({ hotPosts }) {
  return (
    <div className="flex overflow-x-auto gap-4">
      {hotPosts.map((post) => (
        <div key={post.id} className="flex-shrink-0 w-52 bg-white rounded-lg shadow-md p-4">
          <img src={post.image} alt={post.title} className="w-full h-32 object-cover rounded-md" />
          <h4 className="mt-2 font-semibold">{post.title}</h4>
        </div>
      ))}
    </div>
  );
}

// 文章列表子組件
function PostList({ posts }) {
  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
          <p className="text-gray-600">{post.content?.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

// 左側 Sidebar
function SidebarLeft() {
  return (
    <aside className="w-64 bg-gray-100 p-6 rounded-lg hidden md:block">
      <div className="text-center">
        <img
          src="/images/avatars/default-avatar.jpg"
          alt="User"
          className="w-24 h-24 mx-auto rounded-full"
        />
        <h4 className="mt-4 font-semibold">用戶名稱</h4>
        <p className="text-gray-500">積分: 1200</p>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <button className="bg-black text-white py-2 rounded-lg">發表文章</button>
        <button className="bg-black text-white py-2 rounded-lg">查看成就</button>
        <button className="bg-black text-white py-2 rounded-lg">收藏文章</button>
      </div>
    </aside>
  );
}

// 右側 Sidebar
function SidebarRight({ announcements }) {
  return (
    <aside className="w-64 bg-gray-100 p-6 rounded-lg hidden lg:block">
      <h4 className="font-bold mb-4">最新公告</h4>
      <ul className="list-disc list-inside space-y-2">
        {announcements.map((item) => (
          <li key={item.id} className="text-gray-700">
            {item.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
