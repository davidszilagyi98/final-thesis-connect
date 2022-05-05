import styled from "styled-components";
import UserInfo from "./UserInfo"

export default function PostCard({ post }) {

   
    return (
     <Container>
        <Article>
          <SharedActor>
             <UserInfo uid={post.uid} />
                <p>{post.body}</p>
               
          </SharedActor>
    
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
    </Container> 
    );
}

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