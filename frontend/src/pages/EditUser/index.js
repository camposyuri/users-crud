import React, { useEffect, useState } from "react";
import api from "../../services/api";

const EditUser = ({ match }) => {
  const [form, setForm] = useState([
    {
      name: "",
      email: "",
    },
  ]);

  useEffect(() => {
    api.get("/users/" + match.params.id).then((response) => {
      setForm(response.data);
    });
  }, [match.params.id]);

  return (
    <>
      <ul>
        {form.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </>
  );
};

export default EditUser;
