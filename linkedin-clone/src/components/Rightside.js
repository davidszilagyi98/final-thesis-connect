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
              <Avatar>
                {" "}
                <img src="./images/rasmus2.jpg" alt="user" />
              </Avatar>
              <div>
                <div className="namewithflag">
                  <h5>Rasmus Andersen </h5>
                  <img src="./images/danish-flag.svg" alt="user-country" />
                  <img src="./images/german-flag.svg" alt="user-country" />
                </div>
                <IconConnections>
                  <img src="./images/connect-icon.svg" alt="" />
                  <span> 5 mutual connections</span>
                </IconConnections>
              </div>
              <button>connect</button>
            </RightSideExploreCard>

            <RightSideExploreCardOrganization>
              <Avatar>
                {" "}
                <img src="./images/Nextgeneration.png" alt="ngo-icon" />
              </Avatar>
              <div>
                <div className="namewithflag">
                  <h5>Next Generation</h5>
                  <img src="./images/macedonian-flag.svg" alt="country-flag" />
                </div>
                <IconConnections>
                  <img src="./images/connect-icon.svg" alt="connect-icon" />
                  <span> 11 mutual connections</span>
                </IconConnections>
              </div>
              <button>connect</button>
            </RightSideExploreCardOrganization>

            <RightSideExploreCardOrganization>
              <Avatar>
                {" "}
                <img src="./images/gdoce.png" alt="ngo-icon" />
              </Avatar>
              <div>
                <div className="namewithflag">
                  <h5>GDOCE</h5>
                  <img src="./images/spanish-flag.svg" alt="country-flag" />
                </div>
                <IconConnections>
                  <img src="./images/connect-icon.svg" alt="connect-icon" />
                  <span> 15 mutual connections</span>
                </IconConnections>
              </div>
              <button>connect</button>
            </RightSideExploreCardOrganization>

            <RightSideExploreCard>
              <Avatar>
                {" "}
                <img src="./images/tereza.jpg" alt="user" />
              </Avatar>
              <div>
                <div className="namewithflag">
                  <h5>Tereza Ceczh</h5>
                  <img src="./images/danish-flag.svg" alt="country-flag" />
                  <img src="./images/czech-flag.svg" alt="country-flag" />
                </div>
                <IconConnections>
                  <img src="./images/connect-icon.svg" alt="connect-icon" />
                  <span> 4 mutual connections</span>
                </IconConnections>
              </div>
              <button>connect</button>
            </RightSideExploreCard>

            <RightSideExploreCardOrganization>
              <Avatar>
                {" "}
                <img src="./images/a4action.png" alt="ngo-icon" />
              </Avatar>
              <div>
                <div className="namewithflag">
                  <h5>A4ACTION</h5>
                  <img src="./images/romanian-flag.svg" alt="country-icon" />
                </div>
                <IconConnections>
                  <img src="./images/connect-icon.svg" alt="connect-icon" />
                  <span> 9 mutual connections</span>
                </IconConnections>
              </div>
              <button>connect</button>
            </RightSideExploreCardOrganization>
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
  border-radius: 5px;
  position: relative;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  padding: 30px 20px;
`;

const Title = styled.div`
  text-align: center;
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;

    button {
      color: #333;
      background-color: #ececec;
      box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
      -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
      -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
      border: none;
      border-radius: 12px;
      position: absolute;
      right: 10px;
      padding: 16px;
      align-items: center;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;

      &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #1f5b87;
      }
    }
  }
`;

const RightSideExploreCardOrganization = styled.div`
  background-color: #fff;
  background: linear-gradient(to left, white 97%, #063a54 3%);
  box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
  border-radius: 12px;
  display: flex;
  width: 95%;
  text-align: left;
  margin: 5px auto;
  align-items: center;

  padding: 10px;

  .namewithflag {
    display: flex;
    flex-direction: row;

    h5 {
      margin-right: 3px;
    }
  }
`;

const RightSideExploreCard = styled.div`
  background-color: #fff;
  background: linear-gradient(to left, white 97%, #d9b233 3%);
  box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
  border-radius: 12px;
  display: flex;
  width: 95%;
  text-align: left;
  margin: 5px auto;
  align-items: center;

  padding: 10px;

  .namewithflag {
    display: flex;
    flex-direction: row;

    h5 {
      margin-right: 3px;
    }
  }
`;

const Avatar = styled.div`
  img {
    display: flex;
    object-fit: cover;
    border: none;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 10px;
    box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
  }
`;

const IconConnections = styled.div`
  display: flex;
  flex-direction: row;

  span {
    color: #555;
    font-size: 0.7rem;
    margin-left: 5px;
  }
`;

const Recommendation = styled.button`
  color: #333;
  background-color: #ececec;
  border: none;
  border-radius: 12px;
  padding: 12px 30px;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 15px auto;
  box-shadow: 0px 3px 3px 2px rgba(207, 207, 207, 0.4);
  -webkit-box-shadow: 0px 3px 3px 2px rgba(207, 207, 207, 0.4);
  -moz-box-shadow: 0px 3px 3px 2px rgba(207, 207, 207, 0.4);

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #1f5b87;
  }
`;

export default Rightside;
