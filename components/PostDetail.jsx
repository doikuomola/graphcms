import React from "react";
import * as timeago from "timeago.js";
import ReactHtmlParser from "react-html-parser";

const PostDetail = ({ post }) => {
  const html = post.content.html;
  return (
    <div className="bg-white shadow-lg lg:p-8">
      <div className="overflow-hidden shadow-md mb-6">
        <img
          src={post.image.url}
          alt={post.title}
          className="w-full h-full object-cover shadow-lg lg:rounded-lg"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img
            src={post.author.avatar.url}
            alt={post.author.name}
            height="30px"
            width="30px"
            className="rounded-full"
          />
          <p>{post.author.name}</p>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{timeago.format(post.createdAt)}</span>
        </div>
      </div>
      <h1 className="text-sm lg:text-2xl text-center lg:text-left font-semibold my-4">
        {post.title}
      </h1>
      <p className="text-sm lg:text-lg">{ReactHtmlParser(html)}</p>
    </div>
  );
};

export default PostDetail;
