// src/Pricing.js
import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>Choose your path to productivity</h1>
        <p>
          Use Todoist for free forever or upgrade to unlock our most powerful
          features for work and collaboration.
        </p>
        <button className="start-free-button">Start for free</button>
      </div>
      <div className="pricing-plans">
        <div className="plan beginner">
          <h2>Beginner</h2>
          <p className="price">US$0</p>
          <ul>
            <li>5 personal projects</li>
            <li>Smart quick add</li>
            <li>Flexible list & board layouts</li>
            <li>3 filter views</li>
            <li>1 week activity history</li>
            <li>Integrate email, calendar, and more</li>
          </ul>
          <button className="select-button">
            Start organizing your life for free
          </button>
        </div>
        <div className="plan pro">
          <h2>Pro</h2>
          <p className="price">
            US$4/month, billed yearly
            <br />
            $5 when billed monthly
          </p>
          <ul>
            <li>Everything in Beginner, plus:</li>
            <li>300 personal projects</li>
            <li>Calendar layout</li>
            <li>Task reminders & duration</li>
            <li>150 filter views</li>
            <li>Unlimited activity history</li>
            <li>AI Assistant</li>
          </ul>
          <button className="select-button">Organize your work and life</button>
        </div>
        <div className="plan business">
          <h2>Business</h2>
          <p className="price">
            US$6/user/month, billed yearly
            <br />
            $8 when billed monthly
          </p>
          <ul>
            <li>Everything in Pro for every member, plus:</li>
            <li>A shared team workspace</li>
            <li>Up to 500 team projects</li>
            <li>Calendar layout for team projects</li>
            <li>Granular team activity logs</li>
            <li>1000 team members & guests</li>
            <li>1000 project folders</li>
            <li>Team roles & permissions</li>
            <li>Centralized team billing</li>
          </ul>
          <button className="select-button">Manage your teamwork, too</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
