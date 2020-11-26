import React, { useEffect, useState } from "react";

const TableBody = (props) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const arrAux = [];
    for (const prop in props) {
      arrAux.push(props[prop]);
    }
    setProperties(arrAux);
  }, [props]);

  return (
    <>
      <tbody>
        <tr>
          {properties.map((itemProp) => {
            return <th key={itemProp}>{itemProp}</th>;
          })}
        </tr>
      </tbody>
    </>
  );
};

export default TableBody;
