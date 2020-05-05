import React, { useState } from "react";
import $ from "jquery";
import "./App.css";

const App = () => {
  let [diceColor, setDiceColor] = useState("#000000");
  let [dotColor, setDotColor] = useState("#ffd700");
  let rnd;
  let x, y;

  // $("#dice-color").val("#000000");
  // $("#dot-color").val("#ffd700");

  const Roll = (e) => {
    e.preventDefault();
    rnd = Math.floor(Math.random() * 6 + 1);
    console.log(rnd);
    switch (rnd) {
      case 1:
        y = 720;
        x = 810;
        break;
      case 6:
        y = 720;
        x = 990;
        break;
      default:
        y = 720 + (6 - rnd) * 90;
        x = 900;
        break;
    }

    document.documentElement.style.setProperty("--x", x + "deg");
    document.documentElement.style.setProperty("--y", y + "deg");
  };

  // $("#spin").click(function (e) {
  //   e.preventDefault();
  //   rnd = Math.floor(Math.random() * 6 + 1);
  //   console.log(rnd);
  //   switch (rnd) {
  //     case 1:
  //       y = 720;
  //       x = 810;
  //       break;
  //     case 6:
  //       y = 720;
  //       x = 990;
  //       break;
  //     default:
  //       y = 720 + (6 - rnd) * 90;
  //       x = 900;
  //       break;
  //   }
  //   $(".dice").css(
  //     "transform",
  //     "translateZ(-100px) rotateY(" + y + "deg) rotateX(" + x + "deg)"
  //   );
  // });

  // $("#dot-color").change(function () {
  //   const dot = $("#dot-color").val();
  //   $(".dot").css("background-color", dot);
  // });
  // $("#dice-color").change(function () {
  //   const dice = $("#dice-color").val();
  //   $(".side").css("background-color", dice);
  // });

  return (
    <div className="App">
      <div className="panel">
        <div className="dice">
          <div className="side one">
            <span className="dot"></span>
          </div>
          <div className="side two">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="side three">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="side four">
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          <div className="side five">
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="kolona">
              <span className="dot"></span>
            </div>
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          <div className="side six">
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="kolona">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="custom">
        <h2>Dice Color</h2>
        <input
          className="picker"
          id="dice-color"
          type="color"
          defaultValue={diceColor}
          onChange={setDiceColor}
        />
        <h2>Dot Color</h2>
        <input
          className="picker"
          id="dot-color"
          type="color"
          defaultValue={dotColor}
          onChange={setDotColor}
        />
        <button id="spin" onClick={Roll}>
          Spin random!!!
        </button>
      </div>
    </div>
  );
};

export default App;
