import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Header = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setBlogs(res.data))
      .catch(() => toast.error("Failed to fetch blogs for search."));
  }, []);

  const handleSearch = () => {
    const query = searchTitle.trim().toLowerCase();

    if (!query) {
      toast.error("Please enter a title to search.");
      return;
    }

   
    const foundBlog = blogs.find((blog) =>
      blog.title.toLowerCase().includes(query)
    );

    if (foundBlog) {
      navigate(`/post/${foundBlog.id}`);
    } else {
      toast.error("No blog found with that title.");
    }
  };

  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow">
      
      <h1 className="text-2xl font-extrabold tracking-wide">CHBlogs</h1>

    
      <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1 bg-gray-50">
        <input
          type="text"
          placeholder="Search by Title..."
          className="outline-none bg-gray-50 px-2 w-40 sm:w-64"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button onClick={handleSearch} aria-label="Search" className="pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;
