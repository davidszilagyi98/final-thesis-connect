import React from "react";
import styled from "styled-components";
import { UserAuthContextProvider, useUserAuth } from "../context/userContext";

const LeftsideOrganizations = (props) => {
  const { user, logOut } = useUserAuth();
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
        
            <Photo />
            <Link>{user.displayName} </Link>
            <p>{user.email} </p>
            <img src="./images/danish-flag.svg" alt="" />
            <img src="./images/german-flag.svg" alt="" />
         
          <br />
          
          <a>
            <AddPhotoText>
              Add a photo
              <img src="images/icons/add-a-photo.svg" alt="" />
            </AddPhotoText>
          </a>
          <button onClick={logOut}>Log out</button>
        </UserInfo>
      </ArtCard>
      <a href="/guide">
        <GuideButton>Guide</GuideButton>
      </a>

     <CountryFilterButton>Counrty <img src="./images/icons/downarrow-icon.svg" alt="" /></CountryFilterButton>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftsideorganizations;

  a {
    text-decoration: none;
    color: #fff;
  }
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transitions: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), rgba(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 24px;
  word-wrap: break-word;
  word-break: break-word;

  button {
    margin-top: 40px;
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
  background: url("/images/volunteer-background.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  background-image: url("/images/rasmus.jpg");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: #1f5b87;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;

  img {
    width: 18px;
    margin-left: 2px;
  }
`;

const GuideButton = styled.button`
  display: block;
  margin-top: 1rem;
  color: #fff;
  background-color: #1f5b87;
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

const CountryFilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  color: #333;
  background-color: #fff;
  width: 100%;
  font-size: 14px;
  padding: 1rem;
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
    background-color: #EBEBEB;
  }
`

export default LeftsideOrganizations;
