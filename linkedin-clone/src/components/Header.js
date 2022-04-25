import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/connect-logo-thick.dot.svg" alt="" />
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
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src="/images/icons/home-icon.svg" alt="" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/icons/ngo-icon.svg" alt="" />
                <span>Organisations</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/icons/explore-icon.svg" alt="" />
                <span>Explore</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/icons/mynetwork-icon.svg" alt="" />
                <span>My network</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/icons/notifications-icon.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
background-color: white;
border-bottom: 1px; solid rgba(0,0,0,0.08);
left: 0;
padding: 0 24px;
position: fixed;
top: 0;
width: 100vw;
z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
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
      font_weight: 400;
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

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: no-wrap;
  list-style-type: none;
  margin-top: 3px;

  .active {
    span:after {
      content: "";
      border-bottom: 1px solid #333;
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: #333;
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center; 
  
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content:end;
    min-height: 42px;
    min-width: 90px;
    position: relative;
    text-decoration: none;

    span {
      color: #C3C3C3;
      display: flex;
      align-items: baseline;
      margin-bottom: 3px;
    }


    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      cursor: pointer;
      span {
        color: #333;
      }
      img {
        fill: red;
        
      }
    }
  }
`;

export default Header;
