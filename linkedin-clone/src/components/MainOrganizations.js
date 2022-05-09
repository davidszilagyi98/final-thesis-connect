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
      <h2>Titel</h2>
      <OrganizationsList>
        <ul>
          
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
    ul {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}



    @media (max-width: 768px) {
      margin: 20px auto;
      grid-template-columns: 1fr;
    }
  
  li {
    list-style-type: none;
    background-color: #fff;
    background: linear-gradient(to left, white 97%, #063a54 3%);
    box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    border-radius: 12px;
    display: flex;
    text-align: left;
    margin-bottom: 10px;
    margin-right: 1rem;
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
