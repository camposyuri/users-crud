import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableList from "../../components/Table";
import TableBody from "../../components/Table/TableBody";
import TableHeader from "../../components/Table/TableHeader";
import api from "../../services/api";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/users").then((response) => {
      setData(response.data);
    });
  }, []);

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
            </TableBody>
          );
        })}
      </TableList>
    </>
  );
};

export default Users;
