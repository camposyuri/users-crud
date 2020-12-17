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

const types = {
  email: {
    regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g,
  },

  number: {
    regex: /^\d+$/,
  },
};

const NewUsers = () => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    number: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const validate = () => {
    if (!types.email.regex.test(form.email)) {
      setError("Preencha um e-mail válido");
      return false;
    } else if (form.number.length === 0) {
      setError("Preencha um número de telefone válido");
      return false;
    } else if (!types.number.regex.test(form.number)) {
      setError("Digite apenas números no campo de telefone");
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const save = () => {
    // verifica se todos as propriedades do meu objeto são maiores que 0
    for (let value in form) {
      if (form[value].length === 0) {
        setError("Preencha todos os campos acima para salvar!");
        return false;
      }
    }

    api
      .post("/users", {
        ...form,
      })
      .then((_) => {
        setSuccess(true);
      });
  };

  const handlerBlur = ({ target }) => {
    validate(target.value);
  };

  const handleValue = (field) => (event) => {
    if (error) {
      validate({
        ...form,
        [field]: event.target.value,
      });
    }

    setForm({
      ...form,
      [field]: event.target.value,
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
              onBlur={handlerBlur}
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
              onBlur={handlerBlur}
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
          {error ? (
            <Button disabled onClick={save}>
              Save
            </Button>
          ) : (
            <Button color="primary" onClick={save}>
              Save
            </Button>
          )}
        </Form>
        <p>{error}</p>
      </Container>
    </>
  );
};

export default NewUsers;
