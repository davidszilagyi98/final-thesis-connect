import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { addDoc, serverTimestamp, onSnapshot, query, orderBy } from "firebase/firestore";
import { postsRef } from "../firebase/index";
import { useNavigate } from "react-router-dom";
import CreatePost from "../components/CreatePost";
import PostCard from "./PostCard";
import { getAuth } from "firebase/auth";


const Main = (props) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [posts, setPosts] = useState([]);


  async function handleSubmit(newPost) {
    newPost.createdAt = serverTimestamp();
    newPost.uid = auth.currentUser.uid;
    await addDoc(postsRef, newPost);
    navigate("/home");
  }

  useEffect(() => {
    const q = query(postsRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (data) => {
      const postsData = data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setPosts(postsData);
    });
    return () => unsubscribe();
  }, []);
  
  return (
    <Container>
      <ShareBox>
          <CreatePost savePost={handleSubmit} />
      </ShareBox>
      <div>
        <section className="grid-container">
          {posts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </section>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 12px;
  border: none;
  box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
  padding: 30px 20px;
`;

const ShareBox = styled(CommonCard)`
   img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 8px;
        box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
        -webkit-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
        -moz-box-shadow: 0px 3px 6px 2px rgba(207, 207, 207, 0.4);
         object-fit: cover;
      }
`;

export default Main;
