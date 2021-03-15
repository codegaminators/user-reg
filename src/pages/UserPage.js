import React, { useState } from "react";
import styled from "styled-components";
import HeaderComp from "../components/HeaderComp";
// import users from "../users";

const UserPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Denice O' Scallan",
      email: "do0@scientificamerican.com",
    },
    {
      id: 2,
      name: "Alison Turbat",
      email: "aturbat1@cornell.edu",
    },
  ]);
  return (
    <div className="users">
      <HeaderComp />

      <div className="container">
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <button className="btn btn-sm transparent">Delete</button>
                <button className="btn btn-sm transparent ml-1">Update</button>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserPage;

const Table = styled.table`
  /* background-color: red; */
  width: 100%;
  tr {
    text-align: left;
  }
`;
