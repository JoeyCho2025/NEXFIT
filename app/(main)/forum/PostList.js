export default function PostList({ posts }) {
  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
          <p className="text-gray-600">{post.content?.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}
