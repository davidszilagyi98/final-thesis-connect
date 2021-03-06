import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { collection, onSnapshot } from "@firebase/firestore";
import { Link } from "react-router-dom";

const MainOrganizations = ({ name }) => {
  const [users, setUsers] = useState([]);
  // shows all the users we have in the collection
  useEffect(() => onSnapshot(collection(db, "users"), (snapshot) => setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))), []);

  return (
    <Container>
      <OrganizationsList>
        <ul>
          {users.map((user) => (
            <Link to={`/userprofile/${user.id}`}>
              <li key={user.id}>
                <div className="img-name-div">
                  <img src={user.image} className="profile-picture" alt="user"></img>
                  <p>{user.name}</p>
                  <p>{user.nationality}</p>
                  <p>{user.residency}</p>
                </div>
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
  margin-top: 1.5rem;
  .img-name-div {
    display: flex;
    align-items: center;
    margin-left: 0.8rem;
  }
  .profile-picture {
    width: 4rem;
    height: 4rem;
    border-radius: 360px;
    margin-top: 1rem;
    object-fit: cover;
    margin: 0 auto;
    margin-right: 0.8rem;
    background-color: #fff;
    box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
  }
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
    padding: 15px;

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
