import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Leftside from "../components/Leftside";
import Rightside from "../components/Rightside";
import { Container, Layout } from "./Home";

const Notifications = () => {
  return (
    <div>
      <Container>
        <Layout>
          <Header />
          <Leftside />
          <NotificationsList>
            <div className="noti-card">
              <ul>
                <li className="noti-list unread">
                  <span class="dot"></span>
                  <img className="notificationsimage" src="./images/natalia.jpg" alt=""></img>
                  <div className="name-title-noti">
                    <h4>Elena Romanoff</h4>
                    <p>Posted an article</p>
                  </div>
                  <p className="time">4h</p>
                </li>
                <li className="noti-list read">
                  <span class="dot"></span>
                  <img className="notificationsimage" src="./images/natalia.jpg" alt=""></img>
                  <div className="name-title-noti">
                    <h4>Elena Romanoff</h4>
                    <p>Posted an article</p>
                  </div>
                  <p className="time">4h</p>
                </li>
                <li className="noti-list read">
                  <span class="dot"></span>
                  <img className="notificationsimage" src="./images/natalia.jpg" alt=""></img>

                  <div className="name-title-noti">
                    <h4>Elena Romanoff</h4>
                    <p>Posted an article</p>
                  </div>
                  <p className="time">4h</p>
                </li>
              </ul>
            </div>
          </NotificationsList>
          <Rightside />
        </Layout>
      </Container>
    </div>
  );
};

const NotificationsList = styled.div`
  width: 85%;
  margin: 0 auto;

  .notificationsimage {
    width: 5rem;
    border-radius: 360px;
    margin-right: 1rem;
  }
  .dot {
    background-color: #1f5b87;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    display: inline-block;
    margin-right: 1rem;
  }

  .noti-list {
    list-style-type: none;
    border-radius: 12px;
    display: flex;
    margin-bottom: 10px;
    padding: 1.5rem 2rem;
    align-items: center;

    .name-title-noti {
    }
    .time {
    }
  }

  .read {
    background-color: #ffffff;
    .dot {
      background-color: white;
    }
  }

  .unread {
    background-color: #f2f2f2;
  }
`;

export default Notifications;
