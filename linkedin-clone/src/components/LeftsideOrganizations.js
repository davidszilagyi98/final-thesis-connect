import styled from "styled-components";
import { useUserAuth } from "../context/userContext";
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { usersRef } from "../firebase/index";
import { doc, getDoc } from "firebase/firestore";

const LeftsideOrganizations = (props) => {
  const { user, logOut } = useUserAuth();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const auth = getAuth();
  useEffect(() => {
    async function getUser() { // shows the autentichated current user
      if (auth.currentUser) {
        const docRef = doc(usersRef, auth.currentUser.uid);
        const userData = (await getDoc(docRef)).data();
        if (userData) {
          setName(userData.name);
          setImage(userData.image);
        }
      }
    }
    getUser();
  }, [auth.currentUser]);

  return (
    <Container>
          <ArtCard>
        <UserInfo>
          <CardBackground />
          <Photo>
            <img src={image} alt={user.id} />
          </Photo>
          <Link>
            <a href="/profile">{user.displayName}</a>
            <a href="/profile"> {name} </a>
          </Link>
          <img src="../images/danish-flag.svg" alt="user-flag" />
          <img src="../images/german-flag.svg" alt="user-flag" />
          <br />
          <button onClick={logOut}>Log out</button>
        </UserInfo>
      </ArtCard>
      <a href="/guide">
        <GuideButton>Guide</GuideButton>
      </a>

      <CountryFilterButton>
        Counrty <img src="../images/icons/downarrow-icon.svg" alt="country-filter" />
      </CountryFilterButton>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftsideorganizations;
`;

const CountryFilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  color: #333;
  background-color: #fff;
  width: 100%;
  font-size: 14px;
  padding: 0.7rem;
  border: none;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);

  img {
    display: block;
    width: 8px;
    padding-left: 3px;
  }

  &:hover {
    cursor: pointer;
    background-color: #ebebeb;
  }
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 15px;
  position: relative;
  border: none;
  box-shadow: 0px 3px 3px 2px rgba(207, 207, 207, 0.2);
  -webkit-box-shadow: 0px 3px 3px 2px rgba(207, 207, 207, 0.2);
  -moz-box-shadow: 0px 3px 3px 2px rgba(207, 207, 207, 0.2);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-bottom: 30px;

  button {
    margin-top: 20px;
    color: #333;
    background-color: #fff;
    box-shadow: 0px 3px 3px 2px rgba(207, 207, 207, 0.2);
    -webkit-box-shadow: 0px 3px 3px 2px rgba(207, 207, 207, 0.2);
    -moz-box-shadow: 0px 3px 3px 2px rgba(207, 207, 207, 0.2);
    border: none;
    border-radius: 8px;
    padding: 10px;
    align-items: center;
    font-weight: 600;
    font-size: 0.7rem;
    display: inline-flex;
    justify-content: center;
    max-height: 28px;
    max-width: 480px;
    text-align: center;

    &:hover {
      cursor: pointer;
      color: #fff;
      background-color: #b80017;
    }
  }
`;

const CardBackground = styled.div`
  background: #d9b233;
  height: 54px;
`;

const Photo = styled.div`
  img {
    width: 72px;
    height: 72px;
    border: 2px solid white;
    margin: -38px auto 0;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
  a {
    color: #333;
  }
`;

const GuideButton = styled.button`
  display: block;
  margin-top: 1rem;
  color: #fff;
  background-image: linear-gradient(to right top, #114265, #15486d, #184e76, #1c557e, #1f5b87);
  width: 100%;
  font-size: 16px;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  &:hover {
    cursor: pointer;
    background-color: #164466;
  }
`;

export { LeftsideOrganizations, CountryFilterButton };
