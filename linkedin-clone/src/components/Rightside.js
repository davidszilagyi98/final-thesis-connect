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
              <a href="#">
              <Avatar />
              </a> 
                <div>
                  <div className="namewithflag">
                    <a href="#">Rasmus Andersen  </a>
                    <img src="./images/danish-flag.svg" alt=""/>
                    <img src="./images/german-flag.svg" alt="" />
                  </div>
    
                  <IconConnections>
                  <img src="./images/connect-icon.svg" alt=""/>
                  <span> mutual connections</span>
                  </IconConnections>
               </div>
              <button>connect</button>
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
  border-radius: 5px;
  position: relative;
  background-color: #F9F9F9;
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
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;

  
    button {
      color: #333;
      background-color: #ececec;
      box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
      -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
      -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
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
      background-color: #1F5B87;
      }
    }
  }
`;

const RightSideExploreCard = styled.div`
  background-color: #fff;
  background: linear-gradient(to left, white 97%, #D9B233 3%);
  box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  border-radius: 12px;
  display: flex;
  width: 95%;
  text-align: left;
  margin: 0 auto;
  align-items: center;
  
  padding: 10px;

  .namewithflag {
    display: flex;
    flex-direction: row;

    a {
      margin-right: 3px;
    }
  }
`;

const Avatar = styled.img`
display: flex;
  background-image: url("./images/rasmus2.jpg");
  background-size: cover;
  border: none;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
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
      background-color: #1F5B87;
      }
`;

export default Rightside;
