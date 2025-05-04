import { useRef, useEffect, useState } from "react";

export default function HotCarousel({ hotPosts }) {
  const cardWidth = 220; // 單張卡片寬度(px)
  const gap = 16;        // 卡片間距(px)
  const visibleCards = 3; // 同時顯示3張
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);

  // 自動輪播
  useEffect(() => {
    let timer;
    function autoScroll() {
      let next = current + visibleCards;
      if (next * (cardWidth + gap) >= hotPosts.length * (cardWidth + gap)) {
        next = 0;
      }
      setCurrent(next);
      timer = setTimeout(autoScroll, 3000);
    }
    timer = setTimeout(autoScroll, 3000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [current, hotPosts.length]);

  // 滾動效果
  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      left: current * (cardWidth + gap),
      behavior: "smooth",
    });
  }, [current]);

  // 箭頭點擊
  const handlePrev = () => {
    setCurrent((prev) => Math.max(prev - visibleCards, 0));
  };
  const handleNext = () => {
    let next = current + visibleCards;
    if (next * (cardWidth + gap) >= hotPosts.length * (cardWidth + gap)) {
      next = 0;
    }
    setCurrent(next);
  };

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: `${cardWidth * visibleCards + gap * (visibleCards - 1)}px`,
        margin: "0 auto",
      }}
    >
      {/* 左箭頭 */}
      <button
        onClick={handlePrev}
        className="absolute left-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100"
        style={{ transform: "translateX(-50%)" }}
        aria-label="上一頁"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {/* 輪播區 */}
      <div
        className="overflow-x-hidden"
        ref={containerRef}
        style={{
          width: `${cardWidth * visibleCards + gap * (visibleCards - 1)}px`,
        }}
      >
        <div
          className="flex gap-4 py-2 min-w-0"
          style={{
            scrollSnapType: "x mandatory",
          }}
        >
          {hotPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 bg-white rounded-lg shadow-md p-4"
              style={{
                width: `${cardWidth}px`,
                scrollSnapAlign: "start",
              }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-32 object-cover rounded-md"
              />
              <h4 className="mt-2 font-semibold">{post.title}</h4>
            </div>
          ))}
        </div>
      </div>
      {/* 右箭頭 */}
      <button
        onClick={handleNext}
        className="absolute right-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100"
        style={{ transform: "translateX(50%)" }}
        aria-label="下一頁"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  );
}