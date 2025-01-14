import React from "react";
import "./Creation.css";
import Person from "../../assets/images/person.svg";

function Creator() {
  return (
    <>
      <div className="creation">
        <img src={Person} alt="Person" />
        <p className="info">
          Creation of <span className="Creator_name">Jules Wyvern</span>
        </p>
      </div>
    </>
  );
}

export default Creator;
