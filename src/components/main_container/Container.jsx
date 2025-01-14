import React from "react";
import "./Container.css";
import Photo from "../../assets/images/photo.png";
import Days from "../days/Amount";
import Creator from "../created/creation";
import Eye from "../../assets/images/Eye.svg";

function Main() {
  return (
    <>
      <div className="main">
        <div className="image_div">
          <img className="image" src={Photo} />
          <img className="eye" src={Eye} alt="" />
        </div>
        <h className="name">Equilibrium #3429</h>
        <p className="description">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <Days />
        <div className="line"></div>
        <Creator />
      </div>
    </>
  );
}

export default Main;
