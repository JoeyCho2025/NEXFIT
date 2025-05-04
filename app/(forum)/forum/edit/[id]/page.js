"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import {
  FaPen,
  FaThumbtack,
  FaScroll,
  FaCheckCircle,
  FaSave,
  FaSpinner,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

export default function EditPostPage() {
  const { id } = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [image, setImage] = useState(null);
  const [saveStatus, setSaveStatus] = useState(<><FaCheck className="text-green-500" /> 已儲存</>);
  const [isDirty, setIsDirty] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    fetch(`/api/forum/edit/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("找不到貼文");
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setImage(data.image);
      })
      .catch(() => {
        setPost(null);
      });
  }, [id]);

  useEffect(() => {
    if (!post) return;
    if (isDirty) {
      setSaveStatus(<><FaSpinner className="animate-spin" /> 儲存中...</>);
      const timeout = setTimeout(() => {
        setSaveStatus(<><FaCheck className="text-green-500" /> 已儲存</>);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [post?.title, post?.content, post?.category]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "尚有未儲存的變更，確定離開？";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  const handleSave = async () => {
    if (!post.title || !post.category) {
      setToast("請填寫標題並選擇分類");
      return;
    }

    const updatedPost = { ...post, image };
    const res = await fetch(`/api/forum/edit/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPost),
    });
    if (res.ok) {
      setIsDirty(false);
      setSaveStatus(<><FaCheck className="text-green-500" /> 已儲存</>);
      setToast("✅ 儲存成功，3 秒後返回列表");
      setTimeout(() => {
        setToast("");
        router.push("/forum");
      }, 3000);
    } else {
      setSaveStatus(<><FaTimes className="text-red-500" /> 儲存失敗</>);
      setToast("❌ 儲存失敗，請稍後再試");
      setTimeout(() => setToast(""), 3000);
    }
  };

  if (!post) return <div className="text-center py-20">載入中...</div>;

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 py-10 relative">
      {toast && (
        <div className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-md shadow">
          {toast}
        </div>
      )}

      {/* 主內容區 */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaPen /> 編輯文章 #{id}
          </h2>
          <input
            type="text"
            value={post.title}
            onChange={(e) => {
              setPost({ ...post, title: e.target.value });
              setIsDirty(true);
            }}
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
          ) : Array.isArray(post.images) ? (
            <img
              src={post.images[0]}
              alt="預覽圖片"
              className="w-full h-64 object-cover rounded-md mb-3"
            />
          ) : typeof post.images === "string" ? (
            <img
              src={post.images}
              alt="預覽圖片"
              className="w-full h-64 object-cover rounded-md mb-3"
            />
          ) : (
            <div className="w-full h-64 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
              尚未上傳圖片
            </div>
          )}

          <div className="relative inline-block mt-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium cursor-pointer"
              onClick={() => document.getElementById("imageUpload").click()}
            >
              選擇圖片
            </button>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setImage(URL.createObjectURL(file));
                  setIsDirty(true);
                }
              }}
              className="hidden"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <label className="block text-sm font-medium mb-1">分類</label>
          <select
            value={post.category}
            onChange={(e) => {
              setPost({ ...post, category: e.target.value });
              setIsDirty(true);
            }}
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
            onChange={(e) => {
              setPost({ ...post, content: e.target.value });
              setIsDirty(true);
            }}
            rows={6}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-black"
            placeholder="請輸入文章內容..."
          />
        </div>

        <div className="text-right">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            儲存變更
          </button>
        </div>
      </div>

      {/* 右側側欄區塊 */}
      <aside className="space-y-4 w-full lg:max-w-sm lg:sticky top-24 h-fit">
        <div className="bg-white rounded-xl shadow p-4">
          <h4 className="text-md font-bold mb-2 flex items-center gap-2">
            <FaThumbtack /> 精選分類
          </h4>
          <ul className="space-y-2 text-sm">
            {["運動", "營養", "健康", "特殊活動"].map((cat) => (
              <li key={cat} className="text-gray-700">#{cat}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-4 text-sm space-y-1">
          <h4 className="font-bold mb-2 flex items-center gap-2">
            <FaScroll /> 發文須知
          </h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>禁止張貼廣告內容</li>
            <li>不得包含違法、醫療不實資訊</li>
            <li>保持禮貌，尊重每位發文者</li>
          </ul>
          <div className="text-xs text-gray-500 mt-2 flex gap-2 flex-wrap">
            <FaCheckCircle className="text-green-500" />
            清楚標題、分類正確、圖片清晰
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4 text-sm flex items-center gap-2">
          <FaSave className="text-gray-500" />
          {saveStatus}
        </div>
      </aside>
    </div>
  );
}