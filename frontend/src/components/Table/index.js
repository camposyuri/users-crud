import React from "react";
import { Table } from "reactstrap";

const TableList = ({ children }) => {
  return (
    <div>
      <Table responsive hover size="md">
        {children}
      </Table>
    </div>
  );
};

export default TableList;
