import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="bg-black bg-opacity-20 text-center mt-20 p-12 relative rounded-lg text-white">
      <div className="absolute left-0 right-0 -top-10">
        <Image
          unoptimized
          src={author.avatar.url}
          alt={author.name}
          height="80px"
          width="80px"
          className="rounded-full align-middle"
        />
      </div>
      <h3 className="my-4 text-lg font-semibold">{author.name}</h3>
      <p className="font-light text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
