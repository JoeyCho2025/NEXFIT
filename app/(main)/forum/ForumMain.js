"use client";
import HotCarousel from "./HotCarousel";
import PostList from "./PostList";

export default function ForumMain({
  posts,
  hotPosts,
  currentPage,
  setCurrentPage,
  activeCategory,
  setActiveCategory,
  postsPerPage,
}) {
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const categories = ["全部", "運動", "健康", "營養"];

  const filteredPosts =
    activeCategory === "全部"
      ? currentPosts
      : currentPosts.filter((post) => post.category === activeCategory);

  return (
    <main className="flex-1">
      <HotCarousel hotPosts={hotPosts} />

      {/* 分類 tabs */}
      <div className="flex flex-wrap gap-2 my-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold ${
              activeCategory === cat
                ? "bg-black text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 文章列表 */}
      <PostList posts={filteredPosts} />

      {/* 分頁器 */}
      <div className="flex gap-2 mt-6">
        {Array.from(
          { length: Math.ceil(posts.length / postsPerPage) },
          (_, idx) => (
            <button
              key={idx + 1}
              onClick={() => setCurrentPage(idx + 1)}
              className={`w-10 h-10 rounded-full text-sm ${
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
    </main>
  );
}
