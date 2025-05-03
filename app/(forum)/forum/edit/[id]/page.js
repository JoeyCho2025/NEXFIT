"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function EditPostPage() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(`/api/post/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('找不到貼文');
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setImage(data.image);
      })
      .catch((err) => {
        setPost(null);
        // 你可以在這裡顯示錯誤訊息
      });
  }, [id]);

  if (!post) return <div className="text-center py-20">載入中...</div>;

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 py-10">
      {/* 主內容區 */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">✏️ 編輯文章 #{id}</h2>
          <input
            type="text"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-black"
            placeholder="請輸入文章標題..."
          />
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <label className="block text-sm font-medium mb-2">封面圖片</label>
          {image ? (
            <img
              src={image}
              alt="預覽圖片"
              className="w-full h-64 object-cover rounded-md mb-3"
            />
          ) : (
            <div className="w-full h-64 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
              尚未上傳圖片
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setImage(URL.createObjectURL(file));
            }}
            className="text-sm"
          />
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <label className="block text-sm font-medium mb-1">分類</label>
          <select
            value={post.category}
            onChange={(e) => setPost({ ...post, category: e.target.value })}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-black mb-4"
          >
            <option value="">請選擇分類</option>
            <option value="運動">運動</option>
            <option value="營養">營養</option>
            <option value="健康">健康</option>
            <option value="特殊活動">特殊活動</option>
          </select>

          <label className="block text-sm font-medium mb-1">內容</label>
          <textarea
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            rows={6}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-black"
            placeholder="請輸入文章內容..."
          />
        </div>
      </div>

      {/* 右側側欄區塊 */}
      <aside className="space-y-4">
        <div className="bg-white rounded-xl shadow p-4">
          <h4 className="text-md font-bold mb-2">📌 精選分類</h4>
          <ul className="space-y-2 text-sm">
            {['運動', '營養', '健康', '特殊活動'].map((cat) => (
              <li key={cat} className="text-gray-700">#{cat}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow p-4 text-sm space-y-1">
          <h4 className="font-bold mb-2">📜 發文須知</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>禁止張貼廣告內容</li>
            <li>不得包含違法、醫療不實資訊</li>
            <li>保持禮貌，尊重每位發文者</li>
          </ul>
          <div className="text-xs text-gray-500 mt-2">
            ✔️ 清楚標題、✔️ 分類正確、✔️ 圖片清晰
          </div>
        </div>
      </aside>
    </div>
  );
}