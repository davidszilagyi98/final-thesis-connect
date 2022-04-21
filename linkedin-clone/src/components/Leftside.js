import React from "react";
import styled from "styled-components";

const Leftside = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome There</Link>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>
      </ArtCard>
      <a href="/guide">
        <GuideButton>Guide</GuideButton>
      </a>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;

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
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
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
  background-image: url("/images/volunteer-placeholder-image.svg");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
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
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;

const GuideButton = styled.button`
  display: block;
  margin-top: 1rem;
  color: #fff;
  background-color: #1f5b87;
  width: 100%;
  font-size: 16px;
  padding: 1rem;
  border-radius: 12px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export default Leftside;
