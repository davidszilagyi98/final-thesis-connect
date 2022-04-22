import React from "react";
import styled from "styled-components";

const Rightside = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Explore</h2>
        </Title>

        <FeedList>
          <li>
            <RightSideExploreCard>
              {/* <Color /> */}
              <div>
                <a>
                  <Avatar />
                </a>
              </div>

              <div>
                <h4>
                  Rasmus Andersen <img src="./images/danish-flag.svg" alat=""/>
                  <img src="./images/german-flag.svg" alt="" />
                </h4>

                <IconConnections />
                <p>
                  <img src="./images/connect-icon.svg" alt=""/>
                  mutual connections
                </p>
              </div>

              <div>
                <ConnectButton>connect</ConnectButton>
              </div>
            </RightSideExploreCard>
          </li>
        </FeedList>

        <a href="/explore">
          <Recommendation>See more</Recommendation>
        </a>
      </FollowCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #f9f9f9;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 30px 20px;
`;

const Title = styled.div`
  text-align: center;
`;

const FeedList = styled.ul`
  margin-top: 16px;
  cursor: pointer;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;

    & > div {
      //   display: flex;
      //   flex-direction: column;
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
      cursor: pointer;
    }
  }
`;

const RightSideExploreCard = styled.div`
  //   background-color: #fff;
  background: linear-gradient(to left, white 97%, yellow 3%);
  border-radius: 12px;
  width: 120%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Avatar = styled.img`
  background-image: url("./images/volunteer-placeholder-image.svg");
  background-size: contain;
  width: 55px;
  height: 55px;
  margin-left: 15px;
`;

const IconConnections = styled.div`
  display: flex;
  flex-direction: row;
`;

const ConnectButton = styled.button`
  color: #333;
  background-color: #ececec;
  border: none;
  border-radius: 12px;
`;
const Recommendation = styled.button`
  color: #333;
  background-color: #ececec;
  border: none;
  border-radius: 12px;
  padding: 12px 30px;
  align-items: center;
  font-size: 14px;
  margin: 15px auto;
  drop-shadow: (0px 3px 6px rgba(0, 0, 0, 0.1));
  cursor: pointer;
`;
// const Color = styled.area`
//   //   color: blue;
//   //   left: 0;
//   //   height: 100%;
//   //   width: 5px;
// `;

export default Rightside;
