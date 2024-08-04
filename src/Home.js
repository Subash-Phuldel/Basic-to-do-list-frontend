import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-section">
        <div className="image-container">
          <img
            src={`${process.env.PUBLIC_URL}/image1.jpg`}
            alt="Background"
            className="background-image"
          />
          <div className="overlay">
            <div className="content">
              <h1 className="home-title">Todo List</h1>
              <p className="home-subtitle">
                Unleash your productivity with our to-do list app
              </p>
              <button className="join-button">Join Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="review-section">
        <p className="review-text">
          "This app changed my life! I actually get things done now!"
        </p>
        <img
          className="user-pic"
          src={`${process.env.PUBLIC_URL}/user1.jpeg`}
          alt="User"
        />
        <p className="user-name">Katrina</p>
        <button className="more-reviews-button">Read More Reviews</button>
      </div>
    </div>
  );
};

export default Home;
