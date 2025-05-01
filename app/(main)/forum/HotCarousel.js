export default function HotCarousel({ hotPosts }) {
  return (
    <div className="flex overflow-x-auto gap-4">
      {hotPosts.map((post) => (
        <div
          key={post.id}
          className="flex-shrink-0 w-52 bg-white rounded-lg shadow-md p-4"
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
  );
}
