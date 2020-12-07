import React, { useState } from "react";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { Link, Redirect } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import api from "../../services/api";

const NewUsers = () => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    number: "",
  });

  const [success, setSuccess] = useState(false);

  const handleValue = (field) => (event) => {
    setForm({
      ...form,
      [field]: event.target.value,
    });
  };

  const save = () => {
    api
      .post("/users", {
        ...form,
      })
      .then((_) => {
        setSuccess(true);
      });
  };

  if (success) {
    return <Redirect to="/users" />;
  }

  return (
    <>
      <Container>
        <Col md="6">
          <Row className="mt-3">
            <Link to="/users" className="d-flex align-items-center">
              <BsBoxArrowInLeft className="text-secondary" size="30" />
            </Link>
            <h1>New user</h1>
          </Row>
        </Col>

        <Form>
          <FormGroup>
            <Label htmlFor="name">Name:</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleValue("name")}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="username">Username:</Label>
            <Input
              id="username"
              type="text"
              value={form.username}
              onChange={handleValue("username")}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">E-mail:</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleValue("email")}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="number">Phone:</Label>
            <Input
              id="number"
              name="number"
              type="text"
              value={form.number}
              onChange={handleValue("number")}
            />
          </FormGroup>

          <Button onClick={save}>Save</Button>
        </Form>
      </Container>
    </>
  );
};

export default NewUsers;
