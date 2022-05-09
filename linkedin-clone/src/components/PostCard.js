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
              <img src={post.image} alt="" />
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
  img {
    width: 18px;
  }
`;
