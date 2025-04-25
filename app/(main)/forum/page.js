"use client";

import { useState } from "react";

export default function ForumPage() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const allPosts = [
    {
      id: 1,
      author: { name: "Jenny", avatar: "/avatars/user1.jpg" },
      content: "今天的核心訓練真的很充實！",
      images: ["/posts/workout1.jpg"],
      tags: ["重訓", "健身"],
      likes: 24,
      comments: 5,
      shares: 2,
    },
    {
      id: 2,
      author: { name: "John", avatar: "/avatars/user2.jpg" },
      content: "慢跑讓我心情好多了。",
      images: [],
      tags: ["有氧"],
      likes: 10,
      comments: 2,
      shares: 1,
    },
    {
      id: 3,
      author: { name: "Amy", avatar: "/avatars/user3.jpg" },
      content: "我嘗試了新飲食計畫，好吃又健康！",
      images: [],
      tags: ["飲食"],
      likes: 15,
      comments: 3,
      shares: 0,
    },
    {
      id: 4,
      author: { name: "Tom", avatar: "/avatars/user4.jpg" },
      content: "深蹲重量終於突破 100 公斤了！",
      images: [],
      tags: ["重訓"],
      likes: 30,
      comments: 4,
      shares: 5,
    },
    {
      id: 5,
      author: { name: "Sandy", avatar: "/avatars/user5.jpg" },
      content: "第一次嘗試瑜珈，很有挑戰性呢！",
      images: [],
      tags: ["心得"],
      likes: 18,
      comments: 1,
      shares: 0,
    },
    {
      id: 6,
      author: { name: "Leo", avatar: "/avatars/user6.jpg" },
      content: "參加馬拉松後的心得分享！",
      images: [],
      tags: ["有氧", "心得"],
      likes: 22,
      comments: 5,
      shares: 2,
    },
    {
      id: 7,
      author: { name: "Mia", avatar: "/avatars/user7.jpg" },
      content: "健康便當這樣配超營養！",
      images: [],
      tags: ["飲食"],
      likes: 17,
      comments: 0,
      shares: 0,
    },
    {
      id: 8,
      author: { name: "David", avatar: "/avatars/user8.jpg" },
      content: "今天練腿練到炸裂 🦵🔥",
      images: [],
      tags: ["重訓"],
      likes: 40,
      comments: 7,
      shares: 4,
    },
  ];

  const filteredPosts =
    activeCategory === "全部"
      ? allPosts
      : allPosts.filter((post) => post.tags.includes(activeCategory));

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
                <p className="font-bold">{post.author.name}</p>
                <p className="text-xs text-gray-500">2 小時前</p>
              </div>
            </div>
            <p className="mb-4">{post.content}</p>
            <div className="mb-4">
              {post.images.map((image, index) => (
                <div key={index} className="w-full aspect-video bg-gray-200 rounded" />
              ))}
            </div>
            <div className="flex gap-4 text-sm">
              <button>❤️ {post.likes}</button>
              <button>💬 {post.comments}</button>
              <button>🔄 {post.shares}</button>
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
