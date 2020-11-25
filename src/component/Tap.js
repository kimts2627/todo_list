
import React from 'react';



function Tap(props) {
  return (
    <div>
      <button
      className={props.isDarkOn ? "darkbutton-dark" : "darkbutton"}
      onClick={props.turnOnDarkMode}
      >
        <span/>
        Push to Darkmode
      </button>
    </div>
  );
}

export default Tap;