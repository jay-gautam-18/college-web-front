import React from "react";
import Nav from "../Components/Nav";
import Home1 from "../Components/HomeComponets/Home1";
import LnctFooter from "../Components/LnctFooter";

const BlogView = ({blogData,img,des,head}) => {
  return (
    <>
    <Nav/>
    <Home1
    heading={head}
    description={des}
    image={img}
    />
    <div className="max-w-4xl mx-auto p-4 text-gray-800">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">{blogData.title}</h1>

      {/* Metadata */}
      <div className="text-sm text-gray-500 mb-4">
        <span>By <span className="font-medium">{blogData.author}</span></span> ·{" "}
        <span>{new Date(blogData.date).toLocaleDateString()}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {blogData.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Blog Sections */}
      {blogData.sections.map((section, idx) => (
        <div key={idx} className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">{section.heading}</h2>
          <p className="text-gray-700">{section.content}</p>

          {/* Image (if available at same index) */}
          {blogData.images[idx] && (
            <div className="mt-4">
              <img
                src={blogData.images[idx].src}
                alt={blogData.images[idx].alt}
                className="rounded-md shadow max-h-80 mx-auto"
              />
            </div>
          )}
        </div>
      ))}

      {/* Source Link */}
      <div className="mt-12 text-sm text-gray-500">
        <a
          href={blogData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600 hover:text-blue-800"
        >
          View original post
        </a>
      </div>
    </div>
    <LnctFooter/>
    </>
  );
};

export default BlogView;
