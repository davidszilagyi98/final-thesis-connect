import React from "react";
import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        <div>
          <ShareBoxPhoto/>
          <button>What's in your mind?</button>
        </div>
        <div>
          <button>
            <img src="./images/icons/photo-icon.svg" alt="" />
            <span>Photo</span>
          </button>

          <button>
            <img src="./images/icons/video-icon.svg" alt="video-icon" />
            <span>Video</span>
          </button>

          <button>
            <img src="./images/icons/project-icon.svg" alt="event-icon" />
            <span>Project</span>
          </button>

        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <SharedActorInfo>
            <a>
              <img src="./images/natalia.jpg" alt="" />
              <div>
                <span>Natalia Plop <img src="./images/danish-flag.svg" alt=""/> <img src="./images/romanian-flag.svg" alt=""/></span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            </SharedActorInfo>
            <button>
              <img src="./images/icons/ellipsis-icon.svg" alt="" />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImg>
            <a>
              <img src="./images/shared-image.jpg" alt="" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src="./images/icons/like-counter-icon.svg" alt="like-button" />
                <span>75</span>
              </button>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="./images/icons/like-icon.svg" alt="like" />
              <span>Like</span>
            </button>
            <button>
              <img src="./images/icons/comment-icon.svg" alt="comments" />
              <span>Comments</span>
            </button>
            <button>
              <img src="./images/icons/share-icon.svg" alt="share" />
              <span>Share</span>
            </button>
          </SocialActions>
        </Article>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 2px rgb(0 0 0 /15%), rgb(0 0 0 /15%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;

  div {

    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      margin: 8px;
      img{
        width:48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 8px;
        box-shadow: none;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius 35px;
        padding-left: 16px;
        border: none;
        border-radius: 35px;
        background-color: #ededed;
        text-align:left;
        color: #333;
      }
    }
    &:nth-child(2) {
      display:flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
          height: 20px;
        }
        span {
          color: #1F5B87;
        }
      }
    }
  }
`;

const ShareBoxPhoto = styled.div `
box-shadow: none;
  background-image: url("/images/rasmus.jpg");
  width: 48px;
  height: 48px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 2px solid white;
  border-radius: 50%;
`

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
   background: linear-gradient(to left, white 97%, #D9B233 3%);
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 20px 16px 0;
  margin-bottom: 8px;
  margin-left: 40px;
  align-items: center;
  display: flex;
  color: #333;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img{
      width: 48px;
      height:48px;
      border-radius: 50%;
      object-fit: cover;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span{
        text.align:left;
        &:first-child{
          font-size 14px;
          font-weight: 700;
          color: #333;

          & > img {
            width: 12px;
            height: 12px;
          }
        }
        &:nth-child(n+1){
          font-size:12px;

        }
      }
    }

  }

  button{
    position: absolute;
    right: 12px;
    top: 20px;
    background: transparent;
    border: none;
    outline: none;

  }
`;

const SharedActorInfo = styled.div`
  display: flex;
  text-align: left;
`

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
  margin-left: 40px;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 90%;
  display: block;
  margin: 40px auto;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: auto;
  margin: 0 40px;
  padding: 8px;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  color: #333;
  li {
    display: flex;
    font-size: 12px;
    align-items: center;
    button {
      display: flex;
      border: none;
      background-color: white;
      align-items: self-end;
      
      img {
        width: 18px;
        margin-right: 4px;
      }
    }
  }
`;

const SocialActions = styled.div`
align-items: center;
display: flex;
justify-content: space-between;
margin: 0 auto;
min-height: 40px;
width: 60%;
padding: 4px 8px;
button{
  display: inline-flex;
  align-items:center;
  padding:8px;
  color: #919191;
  border: none;
  background-color: #fff;
  @media (min-width:768px){
    span{
      margin-left: 8px;
      
    }
  }
}
img {
  width: 18px;
}
`;

export default Main;
