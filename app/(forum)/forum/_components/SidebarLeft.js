"use client";
import {
  FaUserGraduate,
  FaTools,
  FaFemale,
  FaBalanceScale,
  FaDumbbell,
  FaAppleAlt,
  FaStethoscope,
  FaWheelchair,
} from "react-icons/fa";

const topics = [
  {
    icon: <FaUserGraduate className="text-2xl" />,
    title: "新手入門",
    desc: "適合新註冊用戶的教學與入門",
  },
  {
    icon: <FaTools className="text-2xl" />,
    title: "系統協助解說",
    desc: "如何使用論壇功能",
  },
  {
    icon: <FaFemale className="text-2xl" />,
    title: "女性專區",
    desc: "健康、運動、飲食等主題",
  },
  {
    icon: <FaBalanceScale className="text-2xl" />,
    title: "減重專區",
    desc: "減脂、控制體重與健康體態",
  },
  {
    icon: <FaDumbbell className="text-2xl" />,
    title: "健身專區",
    desc: "重訓、體能與運動技巧分享",
  },
  {
    icon: <FaAppleAlt className="text-2xl" />,
    title: "營養專區",
    desc: "飲食建議與營養補充討論",
  },
  {
    icon: <FaStethoscope className="text-2xl" />,
    title: "醫學專區",
    desc: "健康檢查、慢性病與醫療問題",
  },
  {
    icon: <FaWheelchair className="text-2xl" />,
    title: "特殊族群",
    desc: "長輩與照護者交流區",
  },
];

export default function SidebarLeft() {
  return (
    <aside className="w-72 space-y-6 hidden md:block">
      {/* 用戶卡片 */}
      <div className="bg-white rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
        <img
          src="/images/avatars/default-avatar.jpg"
          alt="User"
          className="w-20 h-20 mx-auto rounded-full"
        />
        <h4 className="mt-3 text-lg font-semibold">用戶名稱</h4>
        <p className="text-sm text-gray-500">積分: 1200</p>

        <div className="mt-5 flex flex-col gap-2">
          {["發表文章", "收藏文章", "成就專區"].map((label) => (
            <button
              key={label}
              className="bg-black text-white py-2 rounded-md text-sm border border-black transition-all duration-200 hover:bg-white hover:text-black"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* 精選社群主題 */}
      <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg">
        <h4 className="font-bold text-base mb-4 border-b pb-2">精選社群主題</h4>
        <div className="flex flex-col gap-3">
          {topics.map((item) => (
            <button
              key={item.title}
              className="text-left bg-gray-100 hover:bg-gray-200 p-4 rounded-lg shadow-sm transition-all"
            >
              <div className="flex items-start gap-3">
                {item.icon}
                <div>
                  <h5 className="font-semibold text-sm">{item.title}</h5>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 熱門標籤 */}
      <div className="bg-white shadow-md rounded-xl p-5">
        <h4 className="font-bold text-base mb-4 border-b pb-2">熱門標籤</h4>
        <div className="flex flex-wrap gap-2 text-sm">
          {[
            { tag: "#fitness", count: 82645 },
            { tag: "#sport", count: 65523 },
            { tag: "#training", count: 51534 },
            { tag: "#health", count: 48029 },
            { tag: "#diet", count: 51534 },
            { tag: "#nutrition", count: 82645 },
          ].map(({ tag, count }) => (
            <span
              key={tag}
              className="bg-gray-200 rounded-full px-3 py-1 hover:bg-gray-300"
            >
              {tag} - {count.toLocaleString()} 篇
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
