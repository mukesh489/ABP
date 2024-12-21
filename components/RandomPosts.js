import { useEffect, useState } from "react";

const RandomPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 5)); 
        setLoading(false);
      });
  }, []);

  return (
    <section className="px-4 py-10 bg-gray-50">
      <h1 className="mb-6 text-3xl font-bold text-center">Random Posts</h1>
      {loading ? (
        <div className="text-center">
          <p className="text-xl text-gray-500 animate-pulse">Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-4 transition-transform duration-300 bg-white border rounded-lg shadow-lg hover:scale-105"
            >
              <h2 className="mb-2 text-lg font-bold">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default RandomPosts;
