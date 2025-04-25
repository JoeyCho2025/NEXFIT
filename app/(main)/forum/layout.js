export default function ForumLayout({ children }) {
    return (
      <main className="w-full min-h-screen bg-gray-100 flex justify-center pt-16">
        {/* 包一個最大寬度排版容器 */}
        <div className="w-full max-w-[1440px] px-4">{children}</div>
      </main>
    );
  }
  