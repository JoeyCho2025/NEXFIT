"use client";
import { useState } from "react";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [hasAgreed, setHasAgreed] = useState(false);

  // ✅ 加上這段
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!hasAgreed) {
      alert("⚠️ 請勾選「我已閱讀並同意發文規則」後再提交。");
      return;
    }

    alert("✅ 已送出發表（模擬）");

    // 可選：清空表單狀態
    setTitle("");
    setCategory("");
    setContent("");
    setImage(null);
    setHasAgreed(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* 中央主表單區塊 */}
      <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6">📄 發表新文章</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 標題 */}
          <div>
            <label className="block mb-1 text-sm font-semibold">標題</label>
            <input
              type="text"
              placeholder="請輸入文章標題..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* 分類 */}
          <div>
            <label className="block mb-1 text-sm font-semibold">分類</label>
            <input
              type="text"
              placeholder="請輸入分類（例如：運動）"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-black"
            />
          </div>

          {/* 內容 */}
          <div>
            <label className="block mb-1 text-sm font-semibold">內容</label>
            <textarea
              rows={6}
              placeholder="在這裡輸入你的文章內容..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* 上傳圖片 */}
          <div>
            <label className="block mb-1 text-sm font-semibold">圖片上傳</label>
            <div className="border border-dashed border-gray-400 p-6 rounded-md text-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="upload-image"
              />
              <label
                htmlFor="upload-image"
                className="cursor-pointer text-sm text-gray-600 hover:underline"
              >
                點我上傳圖片
              </label>
              {image && (
                <div className="mt-4">
                  <img
                    src={image}
                    alt="預覽圖"
                    className="w-40 mx-auto rounded-md border"
                  />
                </div>
              )}
            </div>
          </div>

          {/* 按鈕 */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="px-5 py-2 rounded-md border border-gray-500 text-gray-700 hover:bg-gray-100"
            >
              儲存草稿
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800"
            >
              立即發表
            </button>
          </div>
        </form>
      </div>

      {/* 右側欄 */}
      <aside className="space-y-6">
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h4 className="font-bold mb-3 border-b pb-1">📌 精選分類</h4>
          <div className="flex flex-wrap gap-2">
            {["運動", "營養", "健康", "其他"].map((tag) => (
              <button
                key={tag}
                onClick={() => setCategory(tag)}
                className="text-sm px-3 py-1 border border-gray-300 rounded-full hover:bg-gray-100 transition"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* 📜 發文須知 */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h4 className="font-bold mb-3 border-b pb-1">📜 發文須知</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>🔹 禁止張貼廣告內容</li>
            <li>🔹 不得包含違法、醫療不實資訊</li>
            <li>🔹 保持禮貌，尊重每位發文者</li>
          </ul>
          <div className="mt-4 text-sm">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-black w-4 h-4"
                checked={hasAgreed}
                onChange={(e) => setHasAgreed(e.target.checked)}
              />
              我已閱讀並同意發文規則
            </label>
          </div>
        </div>

        {/* 🏆 發文任務 */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h4 className="font-bold mb-3 border-b pb-1">🏆 發文任務進度</h4>
          <div className="mb-2 text-sm font-medium text-gray-700">
            今日目標：發表 1 篇
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
            <div
              className="bg-green-500 h-3 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mb-1">目前已完成：80%</p>
          <div className="mt-3 text-sm text-green-700 bg-green-100 px-3 py-2 rounded-lg">
            🎉 再發一篇文章即可獲得徽章：<strong>健筆如飛</strong>
          </div>
        </div>
      </aside>
    </div>
  );
}
