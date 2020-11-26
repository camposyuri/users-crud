import React, { useEffect, useState } from "react";

const TableHeader = (props) => {
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
      <thead>
        <tr>
          {properties.map((itemProp) => {
            return <th key={itemProp}>{itemProp}</th>;
          })}
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
