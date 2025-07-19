import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setBlogs(res.data); 
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch blogs");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
     
      <Header />

  
      <div
        className="relative flex items-center justify-center bg-cover bg-center h-[500px]"
        style={{
          backgroundImage:"url('https://images.unsplash.com/photo-1519183071298-a2962be90b8e?auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-4xl font-bold mb-3">Welcome to CHBlogs</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Discover blogs, stories, and experiences from around the world.
          </p>
        </div>
      </div>

      
      <div className="px-10 py-10 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center">Latest Blogs</h2>

        {loading && <p>Loading Blogs...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-3">
                {blog.body.substring(0, 80)}...
              </p>
              <button
                onClick={() => navigate(`/post/${blog.id}`)}
                className="text-blue-600 hover:underline font-medium"
              >
                Read More...
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
