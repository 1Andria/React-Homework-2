import React from "react";
import "./Amount.css";
import Diamond from "../../assets/images/diamond.svg";
import Clock from "../../assets/images/Clock.svg";

function Days() {
  return (
    <>
      <div className="div">
        <div className="amount">
          <img src={Diamond} alt="Diamond" />
          <p className="eth">0.041 ETH</p>
        </div>
        <div className="left">
          <img src={Clock} alt="Clock" />
          <p className="day">3 days left</p>
        </div>
      </div>
    </>
  );
}
export default Days;
