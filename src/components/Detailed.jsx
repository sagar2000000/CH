import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

const Detailed = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch blog details");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading blog details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
   <div>
    <Header/>
     <article className="max-w-3xl mx-auto p-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:underline"
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-4">User: {blog.userId}</h1>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 whitespace-pre-line">{blog.body}</p>
    </article>
    
   </div>
  );
};

export default Detailed;
