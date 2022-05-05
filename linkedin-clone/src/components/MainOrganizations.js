import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { collection, onSnapshot } from "@firebase/firestore";
import { Link } from "react-router-dom";


const MainOrganizations = ({ name }) => {

  const [users, setUsers] = useState([]);
  useEffect(() => onSnapshot(collection(db, "users"), (snapshot) => setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))), []);

  
  return (
    <Container>
      <OrganizationsList>
        <ul>
          <h2>Titel</h2>
          {users.map((user) => (
            <Link to={`/userprofile/${user.id}`}>
            <li key={user.id}>
                <p>{user.name}</p>
            </li>
              </Link>
          ))}
        </ul>
      </OrganizationsList>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const OrganizationsList = styled.div`
    display: block;

    li {
        list-style-type: none;
        background-color: #fff;
        background: linear-gradient(to left, white 97%, #063A54 3%);
        box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
        -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
        -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
        border-radius: 12px;
        display: flex;
        width: 40%;
        text-align: left;
        margin-bottom: 10px;
        padding: 30px;

  .namewithflag {
    display: flex;
    flex-direction: row;

    a {
      margin-right: 3px;
    }
    }
  }
`;

export default MainOrganizations;
