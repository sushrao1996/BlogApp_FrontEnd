import React from "react";
import {
  Card,
  CardTitle,
  Container,
  CardBody,
  Form,
  Input,
  Label,
  FormGroup,
  Col,
  Row,
  CardHeader,
  Button
} from "reactstrap";

const NewPost = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col md={6} className="offset-md-3 mt-5">
          <Form>
            <h3>Add Post</h3>
            <br />
            <FormGroup row>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder="Post Title"
              />
            </FormGroup>
            <FormGroup row>
              <Input
                type="text"
                name="author"
                id="author"
                placeholder="Author Name"
              />
            </FormGroup>
            <FormGroup row>
              <Input
                type="textarea"
                name="content"
                id="content"
                placeholder="Add your story"
              />
            </FormGroup>
            <br />
            <Button color="primary" style={{ width: "50%" }}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewPost;
