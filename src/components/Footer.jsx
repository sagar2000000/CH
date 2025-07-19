import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6 mt-10 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} CHBlogs. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
