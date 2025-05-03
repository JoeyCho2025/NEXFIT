export default function SidebarRight({
  announcements,
  stats,
  upcomingEvents,
  achievements,
}) {
  return (
    <aside className="w-72 hidden lg:block space-y-6">
      {/* 最新公告 */}
      <div className="bg-white shadow-md rounded-xl p-5">
        <h4 className="font-bold text-base mb-4 border-b pb-2 flex items-center gap-2">
          📰 最新公告
        </h4>
        <ul className="space-y-2 text-sm">
          {announcements.map((item) => (
            <li
              key={item.id}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      {/* 🧍‍♂️ 個人運動統計 */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-black text-white rounded-xl p-3 text-center shadow hover:shadow-lg transition"
          >
            <div className="text-xl">{s.icon}</div>
            <div className="text-xs mt-1">{s.label}</div>
            <div className="text-sm font-semibold">{s.value}</div>
          </div>
        ))}
      </div>

      {/* 📅 即將到來活動 */}
      <div className="bg-white shadow-md rounded-xl p-5">
        <h4 className="font-bold text-base mb-4 border-b pb-2">📅 即將到來活動</h4>
        <div className="space-y-4">
          {upcomingEvents.map((event, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <div className="bg-gray-200 text-center p-2 w-12 rounded">
                <div className="text-xs text-gray-600">FEB</div>
                <div className="text-lg font-bold">{event.date.split(" ")[1]}</div>
              </div>
              <div>
                <h5 className="text-sm font-semibold">{event.title}</h5>
                <p className="text-xs text-gray-500">主辦人: {event.organizer}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🏆 成就徽章 */}
      <div className="bg-white shadow-md rounded-xl p-5">
        <h4 className="font-bold text-base mb-4 border-b pb-2">🏆 成就專區</h4>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-lg text-center p-3 text-sm hover:bg-gray-200 transition"
            >
              <div className="font-bold">{a.percent}%</div>
              <div className="text-xs text-gray-600">{a.label}</div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
