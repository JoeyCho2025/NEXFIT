"use client";
import Image from "next/image";
import { useState } from "react";

export default function ForumAccountPage() {
  const [activeTab, setActiveTab] = useState("我的文章");

  const posts = [
    {
      id: 1,
      title: "健康飲食管理計畫",
      image: "/images/post1.jpg",
      excerpt: "這篇是關於我這週的健康飲食紀錄心得與建議...",
    },
    {
      id: 2,
      title: "山林中的冥想之旅",
      image: "/images/post2.jpg",
      excerpt: "走進山中讓我釋放壓力，這裡分享我的體驗與照片...",
    },
  ];

  const menuItems = [
    { label: "我的文章", icon: "📝" },
    { label: "收藏文章", icon: "💖" },
    { label: "草稿箱", icon: "📦" },
    { label: "發文成就", icon: "🏆" },
  ];

  const handleEdit = (id) => {
    alert(`🖊️ 編輯文章 ID: ${id}`);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("確定要刪除這篇文章嗎？");
    if (confirmDelete) {
      alert(`🗑️ 已刪除文章 ID: ${id}`);
    }
  };

  return (
    <div className="w-full mx-auto px-10 py-6 space-y-10">
      {/* 頭像資訊卡片 */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl shadow-md p-8 text-center">
        <Image
          src="/images/avatars/default-avatar.jpg"
          alt="User"
          width={100}
          height={100}
          className="rounded-full mx-auto border-4 border-white shadow"
        />
        <h2 className="mt-4 text-2xl font-bold">阿海</h2>
        <p className="text-sm text-gray-300">運動個案管理師 / 健康推廣者</p>

        <div className="grid grid-cols-3 gap-4 text-center text-sm text-white/90 mt-4">
          <div className="flex flex-col items-center">
            <span className="text-xl">📝</span>
            <span>發文數</span>
            <span className="font-semibold">120</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl">💖</span>
            <span>收藏數</span>
            <span className="font-semibold">35</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl">👍</span>
            <span>被讚數</span>
            <span className="font-semibold">88</span>
          </div>
        </div>
      </div>

      {/* 四個橫向按鈕選單 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveTab(item.label)}
            className={`flex flex-col items-center justify-center p-4 rounded-xl border text-sm transition text-center ${
              activeTab === item.label
                ? "bg-black text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span className="text-2xl">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

      {/* 主內容區 */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold">{activeTab}</h3>

        {activeTab === "我的文章" && (
          <div className="space-y-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow p-4 flex gap-4 items-center justify-between"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold">{post.title}</h4>
                    <p className="text-sm text-gray-600">{post.excerpt}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <button
                    onClick={() => handleEdit(post.id)}
                    className="px-3 py-1 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                  >
                    🖊️ 編輯
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="px-3 py-1 text-red-600 border border-red-600 rounded hover:bg-red-50"
                  >
                    🗑️ 刪除
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "收藏文章" && (
          <div className="text-gray-500 text-sm italic">（尚未加入收藏文章）</div>
        )}
        {activeTab === "草稿箱" && (
          <div className="text-gray-500 text-sm italic">（尚未有草稿內容）</div>
        )}
        {activeTab === "發文成就" && (
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-gray-700">
              🎉 你已獲得 <strong>健筆如飛</strong>、<strong>日更小達人</strong> 等 3 枚徽章！
            </p>
          </div>
        )}
      </div>

      {/* 分頁器 */}
      <div className="flex justify-center gap-3 mt-8">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`w-10 h-10 rounded-full text-sm font-medium flex items-center justify-center transition ${
              page === 1
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-800 hover:bg-gray-400"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
