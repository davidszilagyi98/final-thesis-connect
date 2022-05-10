import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/connect-logo-thick-dot.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/icons/search-icon.svg" alt=""></img>
          </SearchIcon>
        </Search>
        <Nav>
          <nav>
            <NavList>
             <NavLink to="/home">
                <svg xmlns="http://www.w3.org/2000/svg" width="25.719" height="20" viewBox="0 0 25.719 20">
                <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M12.518,7.442l-8.232,6.78v7.317A.714.714,0,0,0,5,22.254l5-.013a.714.714,0,0,0,.711-.714V17.253a.714.714,0,0,1,.714-.714h2.857a.714.714,0,0,1,.714.714v4.27a.714.714,0,0,0,.714.717l5,.014a.714.714,0,0,0,.714-.714V14.217L13.2,7.442A.544.544,0,0,0,12.518,7.442Zm13,4.608L21.788,8.973V2.789a.536.536,0,0,0-.536-.536h-2.5a.536.536,0,0,0-.536.536V6.031l-4-3.289a2.143,2.143,0,0,0-2.724,0L.193,12.05a.536.536,0,0,0-.071.755L1.26,14.189a.536.536,0,0,0,.755.073l10.5-8.65a.544.544,0,0,1,.683,0l10.5,8.65a.536.536,0,0,0,.755-.071L25.6,12.806a.536.536,0,0,0-.076-.756Z" transform="translate(0.001 -2.254)" fill="#c3c3c3"/>
                </svg>
                <span>Home</span>
                </NavLink>
            </NavList>
            <NavList>
              <NavLink to="/organizations">
                <svg xmlns="http://www.w3.org/2000/svg" width="29.762" height="23.5" viewBox="0 0 29.762 23.5">
                <g id="Group_592" data-name="Group 592" transform="translate(-101.119 -13)">
                <path id="Icon_awesome-hand-holding" data-name="Icon awesome-hand-holding" d="M29.208,22.919a1.71,1.71,0,0,0-2.2,0l-4.774,3.818a3.289,3.289,0,0,1-2.067.723H14.054a.827.827,0,0,1,0-1.653H18.1a1.72,1.72,0,0,0,1.721-1.374A1.655,1.655,0,0,0,18.187,22.5H9.92a6.081,6.081,0,0,0-3.829,1.359l-2.4,1.948H.827A.829.829,0,0,0,0,26.633v4.96a.829.829,0,0,0,.827.827H19.262a3.311,3.311,0,0,0,2.067-.723l7.812-6.252A1.653,1.653,0,0,0,29.208,22.919Z" transform="translate(101.119 4.08)" fill="#c3c3c3"/>
                <text id="NGO" transform="translate(109 22)" fill="#c3c3c3" font-size="9" font-family="Poppins-Regular, Poppins"><tspan x="0" y="0">NGO</tspan></text>
                </g>
                </svg>
                <span>Organisations</span>
              </NavLink>
            </NavList>
            <NavList>
              <NavLink to="/explore">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path id="Icon_material-explore" data-name="Icon material-explore" d="M15,13.68A1.32,1.32,0,1,0,16.32,15,1.316,1.316,0,0,0,15,13.68ZM15,3A12,12,0,1,0,27,15,12,12,0,0,0,15,3Zm2.628,14.628L7.8,22.2l4.572-9.828L22.2,7.8Z" transform="translate(-3 -3)" fill="rgba(112,112,112,0.42)"/>
                </svg>
                <span>Explore</span>
              </NavLink>
            </NavList>
            <NavList>
              <NavLink to="/mynetwork">
                <svg xmlns="http://www.w3.org/2000/svg" width="31.111" height="20" viewBox="0 0 31.111 20">
                <path id="Icon_ionic-md-people" data-name="Icon ionic-md-people" d="M23.462,16.208a4.167,4.167,0,1,0-4.242-4.167A4.218,4.218,0,0,0,23.462,16.208Zm-11.313,0a4.167,4.167,0,1,0-4.243-4.167A4.218,4.218,0,0,0,12.149,16.208Zm0,3.056c-3.323,0-9.9,1.6-9.9,4.861v3.75h20v-3.75C22.25,20.861,15.472,19.264,12.149,19.264Zm11.313.764a7.547,7.547,0,0,0-1.212.069c1.627,1.181,2.222,1.944,2.222,4.028v3.75h8.889v-3.75C33.361,20.861,26.786,20.028,23.462,20.028Z" transform="translate(-2.25 -7.875)" fill="#c3c3c3"/>
                </svg>
                <span>My network</span>
              </NavLink>
            </NavList>
            <NavList>
              <NavLink to="/notifications">
                <svg xmlns="http://www.w3.org/2000/svg" width="18.389" height="23" viewBox="0 0 18.389 23">
                <g id="Icon_ionic-ios-notifications" data-name="Icon ionic-ios-notifications" transform="translate(0)">
                <path id="Path_351" data-name="Path 351" d="M17.993,32.062c2.187,0,3.382-1.547,3.382-3.727H14.6C14.6,30.516,15.8,32.062,17.993,32.062Z" transform="translate(-8.808 -9.062)" fill="rgba(112,112,112,0.42)"/>
                <path id="Path_352" data-name="Path 352" d="M24.917,20.129c-.885-1.11-2.627-1.76-2.627-6.73,0-5.1-2.368-7.151-4.576-7.643-.207-.049-.356-.115-.356-.323V5.275a1.4,1.4,0,0,0-2.805,0v.159c0,.2-.149.273-.356.323C11.983,6.254,9.62,8.3,9.62,13.4c0,4.97-1.742,5.615-2.627,6.73a1.083,1.083,0,0,0,.914,1.739h16.1A1.082,1.082,0,0,0,24.917,20.129Z" transform="translate(-6.761 -3.93)" fill="rgba(112,112,112,0.42)"/>
                </g>
                </svg>
                <span>Notifications</span>
              </NavLink>
            </NavList>
            <NavList>
              <NavLink to="/messages">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 31.812 31.812">
                <g id="Group_474" data-name="Group 474" transform="translate(-1650 -29)">
                <path id="Icon_feather-message-circle" data-name="Icon feather-message-circle" d="M36.312,19.522a14.81,14.81,0,0,1-1.591,6.716A15.022,15.022,0,0,1,21.29,34.545a14.81,14.81,0,0,1-6.716-1.591L4.5,36.312,7.858,26.238a14.81,14.81,0,0,1-1.591-6.716A15.022,15.022,0,0,1,14.574,6.091,14.81,14.81,0,0,1,21.29,4.5h.884A14.987,14.987,0,0,1,36.312,18.639Z" transform="translate(1645.5 24.5)" fill="#c3c3c3"/>
                <ellipse id="Ellipse_59" data-name="Ellipse 59" cx="1.5" cy="2" rx="1.5" ry="2" transform="translate(1659.812 42.812)" fill="#fff"/>
                <ellipse id="Ellipse_60" data-name="Ellipse 60" cx="1.5" cy="2" rx="1.5" ry="2" transform="translate(1665.812 42.812)" fill="#fff"/>
                <circle id="Ellipse_61" data-name="Ellipse 61" cx="2" cy="2" r="2" transform="translate(1670.812 42.812)" fill="#fff"/>
                </g>
                </svg>
                <span>Messages</span>
              </NavLink>
            </NavList>
          </nav>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
background-color: white;
border-bottom: 1px solid rgba(0,0,0,0.08);
left: 0;
padding: 0 24px;
position: fixed;
top: 0;
width: 100vw;
z-index: 100;
height: 4rem;
-webkit-box-shadow: 0px 3px 6px 1px rgba(51,51,51,0.1); 
box-shadow: 0px 3px 6px 1px rgba(51,51,51,0.1);

`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 1rem;
  font-size: 0px;
  width: 140px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  height: 50px;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  margin-top: 0.3rem;

  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: end;
    min-height: 42px;
    min-width: 90px;
    position: relative;
    text-decoration: none;

    span {
      color: #c3c3c3;
      display: flex;
      align-items: baseline;
      margin-bottom: 3px;
      margin-top: 3px;
    }

    svg {
      max-height: 22px;
      max-width: 25px;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover {
    a {
      path {
        fill: #1F5B87;
      }

      text {
        fill: #1F5B87;
      }
      cursor: pointer;
      span {
        color: #1F5B87;
      }
    }
  }
`;

export default Header;
