import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { lorem, random } from "faker";
import { Container } from "reactstrap";
const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const fetchdetail = async () => {
    const { data } = await Axios.get(
      "https://vojyw.sse.codesandbox.io/posts/" + id
    );
    console.log(data.post);
    setPost(data.post);
  };
  useEffect(() => {
    fetchdetail();
  }, []);

  return (
    <Container className="mt-5 p-5">
      <h1 className="text-uppercase text-center">{post.title}</h1>
      <p style={{ color: "#0ABDE3" }} className="text-center">
        <span>by {post.author?.name}</span>
        <span> | {lorem.word()}</span>
        <span> | {random.number({ min: 1, max: 5 })} months ago</span>
        <span> | {lorem.word()}</span>
      </p>
      <br />
      <p>{post.content}</p>
    </Container>
  );
};

export default PostPage;
