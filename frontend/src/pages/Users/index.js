import React, { useEffect, useState } from "react";
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
      {data.map((item) => {
        return (
          <h1>
            {item.id} - {item.username}
          </h1>
        );
      })}
    </>
  );
};

export default Users;
