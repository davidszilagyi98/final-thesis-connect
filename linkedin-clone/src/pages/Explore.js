import styled from "styled-components";
import Header from "../components/Header";
import Leftside from "../components/Leftside";
import { Container, Layout } from "./Home";
import { db } from "../firebase";
import { collection, onSnapshot } from "@firebase/firestore";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Explore = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => onSnapshot(collection(db, "users"), (snapshot) => setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))), []);
  return (
    <div>
      <Container>
        <Layout>
          <Header />
          <Leftside />
          <Explorecontainer>
            <div className="sort-buttons">
              <a href="/explore"><Sortbuttons className="active">People</Sortbuttons></a>
              <a href="/explore/organizations"><Sortbuttons>Organizations</Sortbuttons></a>
              <a href="/explore/projects"><Sortbuttons>Projects </Sortbuttons></a>
            </div>
            <Explorecards>
              <ul>
                {users.map((user) => (
                  <Link to={`/userprofile/${user.id}`}>
                    <li key={user.id}>
                      <div className="profiletop-center">
                        <img src={user.image} className="profile-picture" alt=""></img>
                        <p>{user.name}</p>
                        <div className="residency-nationality">
                          <p>{user.residency}</p>
                          <p>{user.nationality}</p>
                        </div>
                        <p>5 mutual connections</p>
                        <button className="connect-button">connect</button>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </Explorecards>
          </Explorecontainer>
        </Layout>
      </Container>
    </div>
  );
};

const Sortbuttons = styled.button`
    margin-right: 1.5rem;
    color: #333;
    background-color: #F0F0F0;
    box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
    -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
    -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
    border: none;
    border-radius: 15px;
    padding: 10px;
    width: 150px;
    margin-top: 1rem;
    align-items: center;
    cursor: pointer;

    &:hover{
      background-color: #fff;
      
    }
  
`;

const Explorecontainer = styled.div`
  grid-area: main;


  .sort-buttons {
    display: flex;
    flex-direction: row;


     .active {
        -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
        -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
        box-shadow: inset 0px 0px 5px #c1c1c1;
        outline: none;
        font-weight: 500;
  
    }
  }
`;

const Explorecards = styled.div`
  .profile-picture {
    width: 107px;
    height: 107px;
    border-radius: 360px;
    margin-top: 1rem;
    object-fit: cover;
    margin: 0 auto;
  }

  .profiletop-center {
    text-align: center;
    padding-bottom: 2rem;
  }

  .residency-nationality {
    display: flex;
    justify-content: center;
  }

  .connect-button {
    color: #333;
    background-color: #ececec;
    box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    border: none;
    border-radius: 12px;
    padding: 1rem 1.5rem 1rem 1.5rem;
    align-items: center;
    font-weight: light;
    justify-content: center;
    max-height: 32px;
    max-width: 480px;
    text-align: center;
    margin-top: 1.5rem;
    display: inline-flex;

    &:hover {
      cursor: pointer;
      color: #fff;
      background-color: #1f5b87;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 2rem;

    @media (max-width: 768px) {
      margin: 20px auto;
      grid-template-columns: 1fr;
    }
  }
  li {
    list-style-type: none;
    background-color: #fff;
    background: linear-gradient(to top, white 70%, #d9b233 50%);
    box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    border-radius: 12px;
    display: flex;
    margin-bottom: 10px;
    margin-right: 1rem;
    padding: 30px;
    width: 12rem;
    height: 15rem;
    justify-content: center;
  }
`;

export default Explore;
