import React from "react";
import "./FindStore.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";


const FindStore = () => {

  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  return (
    <div>
      <nav id="desktop-nav">
        <div className="navbar">
          <Link to="/">
            <img src={assets.starbucks} alt="" className="navbar-icon" />
          </Link>
          <ul className="nav-links">
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#rewards">Rewards</a>
            </li>
            <li>
              <a href="#gift-cards">Gift Cards</a>
            </li>
          </ul>
        </div>
        <div className="navbar-btn-icon">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#000000"
            >
              <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
            <p className="navbar-text">
              <Link to="google-maps">Find a Store</Link>
            </p>
          </div>
          <button className="navbar-btn">
            <Link to="sign-in">Sign In</Link>
          </button>
          <button className="navbar-second-btn">Join Now</button>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <img src={assets.starbucks} alt="" className="navbar-icon" />
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#menu" className="menu-text" onClick={toggleMenu}>
                Menu
              </a>
            </li>
            <li>
              <a href="#rewards" className="menu-text" onClick={toggleMenu}>
                Rewards
              </a>
            </li>
            <li>
              <a href="#gift-cards" className="menu-text" onClick={toggleMenu}>
                Gift’s
              </a>
            </li>
            <hr className="menu-hr" />
            <div className="menu-button">
              <button className="navbar-btn">
                <Link to="sign-in">Sign In</Link>
              </button>
              <button className="navbar-second-btn">Join Now</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="find-continer">
        <div className="find-second">
          <div className="container-left">
            <div className="search-input">
              <input type="search" placeholder="Find a Store" />
                <button className="find-button">Filter</button>
            </div>
            <div className="find-text">
              <h2>No stores were found.</h2>
              <p className="text-text">Do you want to look further away?</p>
              <button className="second-find-button">Expand Search</button>
            </div>
            <div className="privaty-police">
              <a href="" className="one">Privacy Notice</a>
              <a href="" className="one">Terms of Use</a>
              <a href="" className="one">Do Not Share My Personal Information</a>
            </div>
          </div>
          <div className="container-right">
          <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24000.6438429364!2d69.2846592!3d41.241804800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1723468532460!5m2!1sru!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindStore;
