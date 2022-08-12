import React from "react";
import Link from "next/link";
import * as timeago from "timeago.js";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white p-2 lg:p-8 shadow-lg rounded-lg mb-8">
      <div className="overflow-hidden">
        <img
          src={post.image.url}
          alt={post.title}
          className="w-full h-40 lg:h-80 object-cover rounded-lg shadow-lg"
        />
      </div>
      <Link href={`/post/${post.slug}`}>
        <h1 className="text-center lg:text-2xl my-4 font-semibold cursor-pointer hover:text-blue-600 transition duration-300">
          {post.title}
        </h1>
      </Link>
      <div className="text-center flex justify-between w-full">
        <div className="flex items-center lg:gap-2">
          <img
            src={post.author.avatar.url}
            alt={post.author.avatar.url}
            height="30px"
            width="30px"
            className="rounded-full"
          />
          <p className="text-gray-700 text-sm lg:text-lg">{post.author.name}</p>
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
          <span className="text-sm lg:text-lg">
            {timeago.format(post.createdAt)}
          </span>
        </div>
      </div>
      <p className="text-center my-4 text-gray-700 text-sm lg:text-lg font-normal px-2 lg:px-20">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <button className="bg-transparent px-4 lg:py-2 rounded-full hover:text-white text-sm lg:text-lg duration-500 hover:bg-blue-800 border border-blue-600 text-blue-800">
            Continue Reading
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
