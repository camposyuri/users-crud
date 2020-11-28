import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Row, Spinner } from "reactstrap";
import TableList from "../../components/Table";
import TableBody from "../../components/Table/TableBody";
import TableHeader from "../../components/Table/TableHeader";
import api from "../../services/api";

const Users = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // GET: Listing my users
  useEffect(() => {
    setTimeout(() => {
      api.get("/users").then((response) => {
        setData(response.data);
      });
      setIsLoaded(true);
    }, 500);
  }, []);

  if (!isLoaded) {
    return (
      <Container className="my-5">
        <Row
          className="align-items-center justify-content-center"
          style={{ height: "70vh" }}
        >
          <Spinner color="dark" style={{ width: "3rem", height: "3rem" }} />
        </Row>
        {console.log("AQUI")}
      </Container>
    );
  }

  const handleDelete = (id) => {
    api.delete("/users/" + id).then((response) => {
      const filters = data.filter((item) => item.id !== id);
      setData(filters);
    });
  };

  if (data.length === 0) {
    return (
      <Container>
        <h1 className="my-5">Listing of users</h1>
        <Link className="btn btn-primary" to="/newUsers">
          New User
        </Link>
        <Alert className="my-4" color="warning">
          You have no registered users
        </Alert>
      </Container>
    );
  }

  return (
    <>
      <h1 className="my-5">Listing of users</h1>

      <TableList>
        <TableHeader
          id="ID"
          name="Name"
          usename="UserName"
          email="E-mail"
          number="Phone"
          action="Actions"
        />
        {data.map((item) => {
          return (
            <TableBody
              key={item.id}
              id={item.id}
              name={item.name}
              username={item.username}
              email={item.email}
              number={item.number}
            >
              <Link className="btn btn-warning" to={"/edit/" + item.id}>
                Edit
              </Link>
              <Button
                className="ml-2"
                color="danger"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </Button>
            </TableBody>
          );
        })}
      </TableList>
    </>
  );
};

export default Users;
