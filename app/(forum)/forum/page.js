"use client";
import { useState, useEffect } from "react";
import SidebarLeft from "@/app/(forum)/forum/_components/SidebarLeft";
import SidebarRight from "@/app/(forum)/forum/_components/SidebarRight";
import ForumMain from "@/app/(forum)/forum/_components/ForumMain";

// 引入 React Icons 用於 stats
import { FaRunning, FaChartLine, FaDumbbell, FaFire } from "react-icons/fa";

export default function ForumPage() {
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("全部");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const hotPosts = [
    { id: 1, title: "熱門文章1", image: "/images/hot1.jpg" },
    { id: 2, title: "熱門文章2", image: "/images/hot2.jpg" },
    { id: 3, title: "熱門文章3", image: "/images/hot3.jpg" },
    { id: 3, title: "熱門文章3", image: "/images/hot3.jpg" },
    { id: 2, title: "熱門文章2", image: "/images/hot2.jpg" },
    { id: 3, title: "熱門文章3", image: "/images/hot3.jpg" },
    { id: 3, title: "熱門文章3", image: "/images/hot3.jpg" },
    { id: 2, title: "熱門文章2", image: "/images/hot2.jpg" },
    { id: 3, title: "熱門文章3", image: "/images/hot3.jpg" },
    { id: 3, title: "熱門文章3", image: "/images/hot3.jpg" },
  ];

  const announcements = [
    { id: 1, title: "系統維護通知" },
    { id: 2, title: "新功能上線啦！" },
    { id: 3, title: "會員活動開跑" },
  ];

  // ✅ 改用 React Icons 作為 stats icon
  const stats = [
    { icon: <FaRunning />, label: "運動時長", value: "4 小時" },
    { icon: <FaChartLine />, label: "進步程度", value: "+15%" },
    { icon: <FaDumbbell />, label: "訓練次數", value: "12 次" },
    { icon: <FaFire />, label: "消耗熱量", value: "1200 卡路里" },
  ];

  const upcomingEvents = [
    {
      date: "FEB 7",
      title: "路跑訓練",
      organizer: "John",
      tags: ["running", "fitness"],
    },
    {
      date: "FEB 3",
      title: "營養講座",
      organizer: "Tom",
      tags: ["nutrition", "forum"],
    },
    {
      date: "FEB 5",
      title: "皮拉提斯體驗課",
      organizer: "Alice",
      tags: ["yoga", "health"],
    },
  ];

  const achievements = [
    { label: "健康達成率", percent: 80 },
    { label: "健走小幫手", percent: 60 },
    { label: "進食紀錄王", percent: 90 },
    { label: "健身之王", percent: 10 },
  ];

  useEffect(() => {
    fetch("/api/forum")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("資料讀取失敗：", err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 主要內容區塊 */}
      <div className="flex max-w-7xl mx-auto px-4 py-8 gap-8 flex-1 w-full">
        <SidebarLeft />
        <ForumMain
          posts={posts}
          hotPosts={hotPosts}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          postsPerPage={postsPerPage}
        />
        <SidebarRight
          announcements={announcements}
          stats={stats}
          upcomingEvents={upcomingEvents}
          achievements={achievements}
        />
      </div>

      {/* 分頁器 */}
      <div className="w-full flex justify-center py-4 bg-white">
        {Array.from(
          { length: Math.ceil(posts.length / postsPerPage) },
          (_, idx) => (
            <button
              key={idx + 1}
              onClick={() => setCurrentPage(idx + 1)}
              className={`mx-1 w-10 h-10 rounded-full text-sm ${
                currentPage === idx + 1
                  ? "bg-black text-white"
                  : "bg-gray-300 text-black hover:bg-gray-400"
              }`}
            >
              {idx + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
