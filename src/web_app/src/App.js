import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Recipes from "./components/recipes";
import Voice from "./components/voice";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Lasagna from "./components/lasagna";
import "./App.css";
//import { ReactComponent as Logo } from "./images/logo-with-name.svg"
import HomeIcon from "./images/home-icon.svg";
import DiscoverIcon from "./images/discover-icon.svg";
import FavoritesIcon from "./images/favorites-icon.svg";
import OrdersIcon from "./images/orders-icon.svg";
import Logo from "./images/Logo.png";
import X from "./images/timer-exit-icon.png";
import UserImg from "./images/user-profile.svg";
import SearchIcon from "./images/search-icon.svg";

class App extends Component {
  openSlideMenu = function() {
    var element = document.getElementById("side-menu");
    element.style.width = "250px";
    var disp = document.getElementById("display");
    disp.style.marginLeft = "250px";
    var burger = document.getElementById("hamburger");
    burger.style.visibility = "hidden";
  };
  closeSlideMenu = function() {
    var element = document.getElementById("side-menu");
    element.style.width = "0px";
    var disp = document.getElementById("display");
    disp.style.marginLeft = "0px";
    var burger = document.getElementById("hamburger");
    burger.style.visibility = "visible";
  };
  render() {
    return (
      <Router>
        <Link to="/">
          <img src={Logo} className="Logo" alt="Logo" />
        </Link>
        <nav className="navbar">
          <div className="userbar">
            <Link className="nav-link" to="/search">
              <img
                src={SearchIcon}
                alt="Search"
                className="nav-icon"
                id="search"
              />
            </Link>
            <input
              type="text"
              className="searchBar"
              placeholder="   Search"
              name="name"
            />
            <Link className="nav-link" to="/notifications" id="notificationbtn">
              Notifications
            </Link>
            <Link className="nav-link" to="/login">
              <img
                src={UserImg}
                alt="Login"
                className="nav-icon"
                id="loginbtn"
              />
            </Link>
          </div>
          <span className="open-slide">
            <p id="hamburger" onClick={this.openSlideMenu}>
              <svg width="30" height="30">
                <path d="M0,5 30,5" stroke="#FFF" stroke-width="5" />
                <path d="M0,14 30,14" stroke="#FFF" stroke-width="5" />
                <path d="M0,23 30,23" stroke="#FFF" stroke-width="5" />
              </svg>
            </p>
          </span>
        </nav>

        <div id="side-menu" className="side-nav">
          <img
            src={X}
            alt="Close"
            className="btn-close"
            onClick={this.closeSlideMenu}
          />
          <ul>
            <li>
              <Link className="nav-link" to="/">
                <img src={HomeIcon} alt="Home" className="nav-icon" />{" "}
                &nbsp;Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/recipes">
                <img src={DiscoverIcon} alt="Discover" className="nav-icon" />{" "}
                &nbsp;Discover
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/voice">
                <img src={FavoritesIcon} alt="Favorites" className="nav-icon" />{" "}
                &nbsp;Favorites
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/orders">
                <img src={OrdersIcon} alt="Favorites" className="nav-icon" />{" "}
                &nbsp;Orders
              </Link>
            </li>
          </ul>
        </div>

        <div id="display" onClick={this.closeSlideMenu}>
          <Route exact path="/" component={Home} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/voice" component={Voice} />
          <Route path="/login" component={Login} />
          <Route path="/lasagna" component={Lasagna} />
        </div>
      </Router>
    );
  }
}

export default App;
