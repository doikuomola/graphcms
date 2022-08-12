import Head from "next/head";
import { useEffect, useState } from "react";
import { Categories, PostCard, PostWidget } from "../components";
import { getAllPosts } from "../services";
import { useRouter } from "next/router";

export default function Home({ posts }) {
  const router = useRouter();

  if (router.isFallback) {
    return "...loading";
  }
 

  return (
    <div className="container mx-auto p-2 lg:px-20">
      <Head>
        <title>Graph CMS- Next-X</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:mt-12">
        <div className="col-span-1 lg:col-span-8">
          {posts?.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="sticky top-8">
            <PostWidget /> <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = (await getAllPosts()) || [];

  return {
    props: {
      posts: posts,
    },
  };
};

// export const getServerSideProps = async () => {
//   const posts = (await getAllPosts()) || [];

//   return {
//     props: {
//       posts: posts,
//     },
//   };
// };
