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
            <img src="/images/icons/search-icon.svg" alt=""/>
          </SearchIcon>
          </Search>
          <ActiveUser>
            <img src="/images/zach.jpg" alt=""/>
            <span>Zach Friedman</span>
          </ActiveUser>
          <UserContacts>
            <div className="activeMessage">
                 <img src="/images/zach.jpg" alt=""/>
                  <span>Zach Friedman</span>
                  <p>See you tonight!</p>
            </div>

            <div>
                 <img src="/images/erin.jpg" alt=""/>
                  <span>Erin Steed</span>
                  <p>I go to Cyprus too!!</p>
            </div>

            <div>
                 <img src="/images/dee.jpg" alt=""/>
                  <span>Dee McRobie</span>
                  <p>Of course</p>
            </div>

            <div>
                 <img src="/images/elena.jpg" alt=""/>
                  <span>Elena Romanoff</span>
                  <p>Anytime</p>
            </div>

                 <div>
                 <img src="/images/dyt.png" alt=""/>
                  <span>Danish Youth Team</span>
                  <p>No problem</p>
            </div>

            <div>
                  <img src="/images/david.jpg" alt=""/>
                  <span>Dávid Szilágyi</span>
                  <p>Zsamo</p>
            </div>

            <div>
                 <img src="/images/alex.jpg" alt=""/>
                  <span>Alexandru Dorulet</span>
                  <p>Come on bro</p>
            </div>


          </UserContacts>
          </MainMessages>
          
        <Rightside />
      </Layout>
    </Container>
  );
};

const MainMessages = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr; 
  grid-template-rows: 0.2fr 1fr 0.4fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "search userinfo"
    "usercontacts message"
    "usercontacts writemessage"; 
  background-color: #fff;
  border-radius: 12px;
  padding: 10px 20px;
  box-shadow: 0px 3px 3px 2px rgba(207, 207, 207, 0.2);
  -webkit-box-shadow: 0px 3px 3px 2px rgba(207, 207, 207, 0.2);
  -moz-box-shadow: 0px 3px 3px 2px rgba(207, 207, 207, 0.2);
`

const Search = styled.div`
  grid-area: search;
  display: flex;
  align-items: center;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 10px;
      color: rgba(0, 0, 0, 0.9);
      width: 90%;
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
  top: 30px;
  left: 10px;
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
`

const UserContacts = styled.div `
  grid-area: usercontacts;

  .activeMessage {
    background: linear-gradient(to left, white 98.5%, #1F5B87 1.5%);
  }

  div {
  margin: 20px 0;
  display: grid;
  grid-template-columns: 0.4fr 1fr; 
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
   }
`

export default Messages;