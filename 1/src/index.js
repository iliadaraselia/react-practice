import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Info() {
  return (
    <>
      <img
        className="supersu"
        src="https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/1bbe7/Twitter-NFT-profile.jpg"
        alt="vava"
      />
      <div className=" info-wrap">
        <h1 className="name">monkey cool</h1>
        <h4 className="job"> banana slayer</h4>
        <h6 className="wtf">idk anything </h6>
      </div>
      <div className="nav">
        <button className="email">
          <i class="fa-solid fa-envelope"></i>
          <p>Email</p>
        </button>
        <button className="linkedin">
          <i class="fa-brands fa-linkedin"></i>
          <p> linkedin </p>
        </button>
      </div>
    </>
  );
}
function About() {
  return (
    <>
      <h2 className="ok">about</h2>
      <p className="nono">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eaque nisi
        voluptatibus deleniti repudiandae, aperiam commodi debitis quam
        accusamus atque dignissimos odio odit quo exercitationem assumenda id
        eos nostrum dicta?
      </p>
    </>
  );
}
function Interests() {
  return (
    <>
      <h2 className="ok">interests</h2>
      <p className="nono">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eaque nisi
        voluptatibus deleniti repudiandae, aperiam commodi debitis quam
        accusamus atque dignissimos odio odit quo exercitationem assumenda id
        eos nostrum dicta?
      </p>
    </>
  );
}
function Footer() {
  return (
    <>
      <div className="foot-wrap">
        <span>
          <i class="fa-brands fa-twitter-square"></i>
        </span>
        <span>
          <i class="fa-brands fa-facebook-square"></i>
        </span>
        <span>
          {" "}
          <i class="fa-brands fa-linkedin"></i>
        </span>
        <span>
          {" "}
          <i class="fa-brands fa-github-square"></i>
        </span>
      </div>
    </>
  );
}

function MainShit() {
  return (
    <div className="container">
      <Info />
      <div className="jartia">
        {" "}
        <About /> <Interests />
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.render(<MainShit />, document.getElementById("root"));
