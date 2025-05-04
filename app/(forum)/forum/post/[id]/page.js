"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaUser, FaCalendarAlt, FaHeart } from "react-icons/fa";

export default function ForumPostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/api/forum/post/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("無法取得文章");
        return res.json();
      })
      .then((data) => setPost(data))
      .catch((err) => console.error("讀取文章失敗", err));
  }, [id]);

  if (!post) {
    return <div className="text-center py-20 text-gray-500">載入中...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      {/* 主圖 */}
      {post.images?.length > 0 && (
        <img
          src={post.images[0]}
          alt="主圖"
          className="w-full h-72 object-cover rounded-lg"
        />
      )}

      {/* 標題 */}
      <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>

      {/* 作者與資訊 */}
      <div className="flex items-center gap-4 text-sm text-gray-600 border-b pb-4">
        <div className="flex items-center gap-1">
          <FaUser /> {post.author_name}
        </div>
        <div className="flex items-center gap-1">
          <FaCalendarAlt /> {new Date(post.created_at).toLocaleDateString()}
        </div>
        <div className="flex items-center gap-1">
          <FaHeart /> {post.likes} 喜歡
        </div>
      </div>

      {/* 內文 */}
      <article className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-800">
        {post.content}
      </article>
    </div>
  );
}
