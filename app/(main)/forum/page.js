"use client";

import { useEffect, useState } from "react";

export default function ForumPage() {
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("全部");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // 從 API 抓資料
  useEffect(() => {
    fetch("/api/forum")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("資料讀取失敗：", err));
  }, []);

  const filteredPosts =
    activeCategory === "全部"
      ? posts
      : posts.filter((post) => post.tags?.includes(activeCategory));

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const renderPagination = () => (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-3 py-1 rounded border text-sm ${
            currentPage === i + 1 ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );

  return (
    <div className="grid grid-cols-[250px_1fr_250px] gap-6">
      {/* 左側邊欄 */}
      <aside className="bg-white p-4 rounded shadow h-fit sticky top-20 self-start">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4" />
          <div className="flex justify-center gap-2">
            <button className="px-3 py-1 bg-black text-white rounded">追蹤</button>
            <button className="px-3 py-1 bg-black text-white rounded">訊息</button>
          </div>
        </div>
        <nav className="space-y-2 text-sm">
          <button className="w-full text-left hover:bg-gray-100 p-2 rounded">個人檔案</button>
          <button className="w-full text-left hover:bg-gray-100 p-2 rounded">我的貼文</button>
          <button className="w-full text-left hover:bg-gray-100 p-2 rounded">收藏貼文</button>
          <button className="w-full text-left hover:bg-gray-100 p-2 rounded">設定</button>
        </nav>
        <div className="mt-6">
          <h3 className="font-bold mb-2 text-sm">成就徽章</h3>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-gray-200 rounded-full" />
            ))}
          </div>
        </div>
      </aside>

      {/* 中間主區域 */}
      <main className="space-y-6">
        <div className="flex gap-2 mb-4">
          {["全部", "重訓", "有氧", "飲食", "心得"].map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
              className={`px-4 py-1.5 rounded-full text-sm ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-white text-black border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {currentPosts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-3" />
              <div>
                <p className="font-bold">{post.author_name || "匿名用戶"}</p>
                <p className="text-xs text-gray-500">{post.created_at}</p>
              </div>
            </div>
            <p className="mb-4">{post.content}</p>
            <div className="mb-4">
              {/* 若未來加入圖片欄位再補這邊 */}
            </div>
            <div className="flex gap-4 text-sm">
              <button>❤️ {post.likes ?? 0}</button>
              <button>💬 {post.comments ?? 0}</button>
              <button>🔄 {post.shares ?? 0}</button>
            </div>
          </div>
        ))}

        {renderPagination()}
      </main>

      {/* 右側邊欄 */}
      <aside className="bg-white p-4 rounded shadow h-fit sticky top-20 self-start">
        <div className="mb-6">
          <h3 className="font-bold mb-2 text-sm">推薦用戶</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-2" />
                  <div>
                    <p className="font-semibold">User {i}</p>
                    <p className="text-xs text-gray-500">健身教練</p>
                  </div>
                </div>
                <button className="text-blue-500">追蹤</button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-sm">熱門標籤</h3>
          <div className="flex flex-wrap gap-2">
            {["#健身", "#重訓", "#飲食", "#瑜珈"].map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gray-100 rounded text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
