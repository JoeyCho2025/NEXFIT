export default function PostList({ posts }) {
  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => {
        let imageUrl = "";
        let avatarUrl = post.avatar || "/uploads/forum/avatars/default.jpg"; // fallback 頭像

        try {
          const parsedImages = Array.isArray(post.images)
            ? post.images
            : JSON.parse(post.images || "[]");
          imageUrl = parsedImages.length > 0 ? parsedImages[0] : "";
        } catch (err) {
          console.error("圖片解析錯誤：", err);
        }

        return (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow">
            {/* 文章封面圖片 */}
            {imageUrl && (
              <img
                src={imageUrl}
                alt={post.title}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />
            )}

            {/* 作者資訊 */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src={avatarUrl}
                alt={post.author_name}
                className="w-10 h-10 rounded-full object-cover border"
              />
              <span className="text-sm font-medium text-gray-800">
                {post.author_name}
              </span>
            </div>

            {/* 文章標題與內文 */}
            <h3 className="text-xl font-bold mb-1">{post.title}</h3>
            <p className="text-gray-600 text-sm">{post.content?.slice(0, 100)}...</p>
          </div>
        );
      })}
    </div>
  );
}
