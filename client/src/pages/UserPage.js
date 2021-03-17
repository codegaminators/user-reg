import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderComp from "../components/HeaderComp";
import axios from "axios";
// import users from "../users";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/users");
        setUsers(data);
        // console.log(config);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  // const handleDelete = async (id) => {
  //   try {
  //     const
  //   } catch (error) {

  //   }
  // }

  return (
    <div className="users">
      <HeaderComp />

      <div className="mt-2">{show && <h6>Hello</h6>}</div>
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
                <td>
                  <button className="btn btn-sm transparent">Delete</button>
                  <button className="btn btn-sm transparent ml-1">
                    Update
                  </button>
                </td>
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
