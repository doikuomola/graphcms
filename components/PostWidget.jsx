import React, { useEffect, useState } from "react";
import { getRecentPosts } from "../services";
import Image from "next/image";
import * as timeago from "timeago.js";
import Link from "next/link";

const PostWidget = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    getRecentPosts()
      .then((result) => {
        setRecentPosts(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8  mb-12">
      <h4 className="text-center font-semibold text-sm lg:text-2xl pb-4">
        Recent Posts
      </h4>
      {recentPosts.map((post, index) => (
        <div key={index} className="flex items-center gap-8   my-4">
          <div className="">
            <Image
              src={post.image.url}
              alt={post.title}
              height="80px"
              width="80px"
              unoptimized
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-600 text-xs">
              {timeago.format(post.createdAt)}
            </span>
            <Link href={`/post/${post.slug}`}>
              <span className="lg:font-semibold text-sm cursor-pointer hover:text-blue-600 duration-500">
                {post.title}
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
