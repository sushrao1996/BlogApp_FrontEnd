import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem, Container, Button } from "reactstrap";
import Post from "../components/Post";
import { useHistory } from "react-router-dom";
import routes from "../routes/routes";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  const fetchDetails = async () => {
    const { data } = await Axios.get("https://vojyw.sse.codesandbox.io/posts");
    setPosts(data.posts);
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  const onReadMore = post => {
    history.push(routes.post.replace(":id", post._id));
  };

  return (
    <ListGroup flush className="text-center mt-5 pb-5">
      <h4 className="text-center">LATEST STORIES</h4>
      <Container>
        {posts.map(post => (
          <ListGroupItem className="text-left p-5" key={post._id}>
            <Post post={post} isSummary={true} />
            <Button
              color="primary"
              onClick={() => {
                onReadMore(post);
              }}
            >
              Read More
            </Button>
          </ListGroupItem>
        ))}
      </Container>
    </ListGroup>
  );
};

export default Home;
