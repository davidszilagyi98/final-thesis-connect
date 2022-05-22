import styled from "styled-components";
import UserInfo from "./UserInfo";

export default function PostCard({ post }) {
  return (
    <Container>
      <Article>
        <UserInfo uid={post.uid} />
        <SharedActor>
            <div>
              <p>{post.body}</p>
              <img src={post.image} alt="user" />
            </div>
        </SharedActor>

        <SocialCounts>
          <li>
            <button>
              <img src="./images/icons/like-counter-icon.svg" alt="like-button" />
              <span>75</span>
            </button>
          </li>
          <li>
            <span>2 comments</span>
          </li>
        </SocialCounts>

        <SocialActions>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
            <path id="Icon_awesome-thumbs-up" data-name="Icon awesome-thumbs-up" d="M4.875,10.5H1.125A1.125,1.125,0,0,0,0,11.625v11.25A1.125,1.125,0,0,0,1.125,24h3.75A1.125,1.125,0,0,0,6,22.875V11.625A1.125,1.125,0,0,0,4.875,10.5ZM3,22.125A1.125,1.125,0,1,1,4.125,21,1.125,1.125,0,0,1,3,22.125ZM18,3.818c0,1.988-1.217,3.1-1.56,4.432h4.768A2.8,2.8,0,0,1,24,10.973a3.394,3.394,0,0,1-.911,2.306l-.005.005a3.916,3.916,0,0,1-.436,3.725,3.707,3.707,0,0,1-.768,3.5,2.488,2.488,0,0,1-.288,2.092C20.634,23.981,18.263,24,16.258,24h-.133a13.456,13.456,0,0,1-5.6-1.487,7.377,7.377,0,0,0-2.468-.758.563.563,0,0,1-.552-.562V11.172a.562.562,0,0,1,.167-.4c1.857-1.835,2.655-3.778,4.177-5.3a5.677,5.677,0,0,0,1.19-2.761C13.243,1.842,13.679,0,14.625,0,15.75,0,18,.375,18,3.818Z" transform="translate(1 1)" fill="none" stroke="#919191" stroke-width="2"/>
            </svg>
            <span>Like</span>
          </button>
          <button>
            <img src="./images/icons/comment-icon.svg" alt="comments-button" />
            <span>Comments</span>
          </button>
          <button>
            <img src="./images/icons/share-icon.svg" alt="share-button" />
            <span>Share</span>
          </button>
        </SocialActions>
      </Article>
    </Container>
  );
}

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin: 30px 0;
  background-color: #fff;
  border-radius: 12px;
  position: relative;
  border: none;
  box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
`;

const Article = styled(CommonCard)`
  padding: 40px;
  overflow: visible;
  background: linear-gradient(to left, white 97%, #d9b233 3%);
`;

const SharedActor = styled.div`
  display: grid; 
  grid-template-columns: 0.3fr 1fr 1fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    ". postbody postbody"; 
  padding: 10px 20px;
  text-align: left;
  color: #333;
  

  div {
    grid-area: postbody;
   
    
  p {
    padding: 0 10px;
  }

    img {
      display: block;
      padding: 20px 10px;
      max-width: 100%;
      margin: 0 auto;
    }
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
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #919191;
    border: none;
    background-color: #fff;
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
  svg {
    width: 18px;
  }

`;
