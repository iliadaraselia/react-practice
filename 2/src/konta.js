// import React, { Component } from "react";
import "./konta.css";

export default function konta(props) {
  //   console.log(props);
  return (
    <div className="conta">
      <img src={props.img} alt="shit" />
      <h1>{props.name}</h1>
      <div className="info">
        {props.phone && (
          <span>
            <i className="fa-solid fa-phone"></i>
            <p>{props.phone}</p>
          </span>
        )}

        {props.email && (
          <span>
            <i className="fa-solid fa-envelope"></i> <p>{props.email}</p>
          </span>
        )}
      </div>
    </div>
  );
}
