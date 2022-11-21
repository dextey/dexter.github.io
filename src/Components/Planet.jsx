import React from "react";
import "./Planet.css";
function Planet() {
  return (
    <div className="planetPositon">
      <div className="planet-container">
        <div className="sun"></div>
        <div className="planetIndex">
          <div className="revolve">
            <div className="revolve-container">
              <div className="planet"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planet;
