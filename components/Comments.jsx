import React from "react";
import { DiscussionEmbed } from "disqus-react";

const Comments = ({ post }) => {
  const disqusShortname = "graphcms";
  const disqusConfig = {
    url: `https://your-site-url/${post.slug}`,
    identifier: post.slug, // Single post id
    title: post.title, // Single post title
  };
  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
};

export default Comments;
