import React from "react";
import { Categories, PostWidget } from "../../components";
import Author from "../../components/Author";
import Comments from "../../components/Comments";
import PostDetail from "../../components/PostDetail";
import { getAllPosts, getPostDetails } from "../../services";
import { useRouter } from "next/router";

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return "...Loading";
  }
  return (
    <div className="container mx-auto px-2 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} /> <Author author={post.author} />{" "}
          <Comments post={post} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export const getStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const data = await getPostDetails(params.slug);

  return {
    props: {
      post: data,
    },
  };
};
