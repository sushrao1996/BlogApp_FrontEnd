import React from "react";
import { lorem, random } from "faker";

const Post = ({ post, isSummary = false }) => {
  return (
    <>
      <h1 className="text-uppercase">{post.title}</h1>
      <p style={{ color: "#0ABDE3" }}>
        <span>by {post.author.name}</span>
        <span> | {lorem.word()}</span>
        <span> | {random.number({ min: 1, max: 5 })} months ago</span>
        <span> | {lorem.word()}</span>
      </p>
      <br />
      <p>{isSummary ? post.content.substr(0, 400) + "..." : post.content}</p>
    </>
  );
};

export default Post;
