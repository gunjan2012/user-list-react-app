import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import UserRow from "./UserRow";

const UserTable = () => {
  const userArr = useSelector((state) => state.userData);
  return (
    <Table responsive borderless className="table-container">
      <thead className="table-header">
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Access</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {userArr.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
