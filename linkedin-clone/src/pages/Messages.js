import React from "react";
import styled from "styled-components";
import Leftside from "../components/Leftside";
import Rightside from "../components/Rightside";
import Header from "../components/Header";
import { Container, Layout } from "./Home";

const Messages = () => {
  return (
    <Container>
      <Header />
      <Layout>
        <Leftside />
        <MainMessages>
          <Search>
            <div>
              <input type="text" placeholder="Search in messages" />
            </div>
            <SearchIcon>
              <img src="/images/icons/search-icon.svg" alt="search-icon" />
            </SearchIcon>
          </Search>
          <ActiveUser>
            <img src="/images/zach.jpg" alt="user" />
            <span>Zach Friedman</span>
          </ActiveUser>
          <UserContacts>
            <div className="activeMessage">
              <img src="/images/zach.jpg" alt="user" />
              <span>Zach Friedman</span>
              <p>See you tonight!</p>
              <span className="time">13:14</span>
            </div>

            <div>
              <img src="/images/erin.jpg" alt="user" />
              <span>Erin Steed</span>
              <p>I go to Cyprus too!!</p>
              <span className="time">12:58</span>
            </div>

            <div>
              <img src="/images/dee.jpg" alt="user" />
              <span>Dee McRobie</span>
              <p>Of course</p>
              <span className="time">10:41</span>
            </div>

            <div>
              <img src="/images/elena.jpg" alt="user" />
              <span>Elena Romanoff</span>
              <p>Anytime</p>
              <span className="time">08:12</span>
            </div>

            <div>
              <img src="/images/dyt.png" alt="user" />
              <span>Danish Youth Team</span>
              <p>No problem</p>
              <span className="time">Sat</span>
            </div>

            <div>
              <img src="/images/david.jpg" alt="user" />
              <span>Dávid Szilágyi</span>
              <p>Zsamo</p>
              <span className="time">Sat</span>
            </div>

            <div>
              <img src="/images/alex.jpg" alt="user" />
              <span>Alexandru Dorulet</span>
              <p>Come on bro</p>
              <span className="time">Sat</span>
            </div>

            <div>
              <img src="/images/gdoce.png" alt="user" />
              <span>GDOCE</span>
              <p>We are happy to hear that!</p>
              <span className="time">Fri</span>
            </div>
          </UserContacts>
          <MessageContainer>
            <ActiveMessenger1>
              <img src="/images/zach.jpg" alt="user" />
              <span>Are you coming?</span>
            </ActiveMessenger1>

            <ActiveMessenger2>
              <span>Sure</span>
              <img src="/images/rasmus.jpg" alt="user" />
            </ActiveMessenger2>

            <ActiveMessenger1>
              <img src="/images/zach.jpg" alt="user" />
              <span>See you tonight!</span>
            </ActiveMessenger1>
          </MessageContainer>
          <WriteMessageContainer>
            <p>Write a message...</p>
            <div className="sendContainer">
              <div className="iconsContainer">
                <img src="/images/icons/message-image.svg" alt="message" />
                <img src="/images/icons/message-attach.svg" alt="message" />
                <img src="/images/icons/message-emoticon.svg" alt="message" />
              </div>
              <button>Send</button>
            </div>
          </WriteMessageContainer>
        </MainMessages>

        <Rightside />
      </Layout>
    </Container>
  );
};

const MainMessages = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.3fr;
  gap: 0px 0px;
  grid-template-areas:
    "search userinfo"
    "usercontacts message"
    "usercontacts message"
    "usercontacts writemessage";
  background-color: #fff;
  border-radius: 12px;
  padding: 0;
  box-shadow: 0px 3px 3px 2px rgba(207, 207, 207, 0.2);
  -webkit-box-shadow: 0px 3px 3px 2px rgba(207, 207, 207, 0.2);
  -moz-box-shadow: 0px 3px 3px 2px rgba(207, 207, 207, 0.2);
`;

const Search = styled.div`
  grid-area: search;
  display: flex;
  align-items: center;
  padding-left: 38px;
  border-right: 1px solid #d5d5d5;
  border-bottom: 1px solid #d5d5d5;
  position: relative;
  & > div {
    max-width: 200px;
    input {
      border: none;
      box-shadow: none;
      background-color: #f2f2f2;
      border-radius: 10px;
      color: rgba(0, 0, 0, 0.9);
      max-width: 100%;
      padding: 0 8px 0 40px;
      line-height: 1.5;
      font-weight: 400;
      font-size: 12px;
      height: 28px;
      vertical-align: text-top;

      :focus {
        outline: none;
      }
    }
  }
`;

const SearchIcon = styled.div`
  width: 15px;
  position: absolute;
  z-index: 1;
  top: 34px;
  left: 50px;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 15px;
  }
`;

const ActiveUser = styled.div`
  grid-area: userinfo;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #d5d5d5;

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

const UserContacts = styled.div`
  grid-area: usercontacts;
  border-right: 1px solid #d5d5d5;
  overflow: scroll;

  .activeMessage {
    background: linear-gradient(to left, white 98.5%, #1f5b87 1.5%);
  }

  div {
    padding: 20px 0 20px 10px;
    border-bottom: 1px solid #d5d5d5;
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "userphoto username"
      "userphoto messagetext";

    img {
      grid-area: userphoto;
      display: flex;
      object-fit: cover;
      border: none;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-left: 10px;
      margin-right: 10px;
      box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
      -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
      -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    }

    span {
      grid-area: username;
      font-size: 0.9rem;
      display: flex;
      align-self: end;
    }

    p {
      grid-area: messagetext;
      font-size: 0.7rem;
      color: #555;
      display: flex;
      align-self: start;
    }

    .time {
      display: flex;
      justify-content: end;
      font-size: 0.7rem;
      align-self: end;
      color: #999;
      margin-right: 10px;
    }
  }
`;

const MessageContainer = styled.div`
  grid-area: message;
  border-bottom: 1px solid #d5d5d5;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const WriteMessageContainer = styled.div`
  grid-area: writemessage;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #d5d5d5;
  border-right: 1px solid #d5d5d5;

  p {
    color: #d5d5d5;
    font-size: 0.8rem;
    padding: 10px;
  }

  .sendContainer {
    background-color: #f2f2f2;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .iconsContainer {
      display: flex;
      align-content: center;
      width: 20%;
      justify-content: space-evenly;
      margin-left: 5px;

      img {
        width: 20px;
      }
    }

    button {
      margin-right: 15px;
      background-image: linear-gradient(to right top, #114265, #15486d, #184e76, #1c557e, #1f5b87);
      border: none;
      color: #fff;
      width: 18%;
      height: 30px;
      font-size: 0.8rem;
      border-radius: 8px;
      text-decoration: none;
      box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
      -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
      -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const ActiveMessenger1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  color: #555;
  margin-bottom: 20px;

  img {
    display: flex;
    object-fit: cover;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 10px;
    box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
  }
`;

const ActiveMessenger2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  font-size: 12px;
  color: #555;
  margin-bottom: 20px;

  img {
    display: flex;
    object-fit: cover;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 10px;
    box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
    -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.2);
  }
`;

export default Messages;
