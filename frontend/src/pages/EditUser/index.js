import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import api from "../../services/api";

const EditUser = ({ match }) => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    number: "",
  });

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    api.get("/users/" + match.params.id).then((response) => {
      setForm(response.data[0]);
    });
  }, [match.params.id]);

  const handleValue = (field) => ({ target }) => {
    setForm({
      ...form,
      [field]: target.value,
    });
  };

  const save = () => {
    api
      .put("/users/" + match.params.id, {
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
        <h1>Edit Users</h1>
        <Form>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleValue("name")}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="name">Username</Label>
            <Input
              id="name"
              type="text"
              name="name"
              value={form.username}
              onChange={handleValue("username")}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="name">E-mail</Label>
            <Input
              id="email"
              type="text"
              name="email"
              value={form.email}
              onChange={handleValue("email")}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="name">Phone</Label>
            <Input
              id="number"
              type="text"
              name="number"
              value={form.number}
              onChange={handleValue("number")}
            />
          </FormGroup>

          <Button color="primary" onClick={save}>
            Save
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default EditUser;
