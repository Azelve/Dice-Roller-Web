import React, { useState } from "react";
import { Container, Panel, Dice, Button } from "./style";

const DiceRoller = () => {
  const diceColor = "#000";
  const dotColor = "#C00";
  const diceColor2 = "#C00";
  const dotColor2 = "#000";
  const [rotateX, setRotateX] = useState(200);
  const [rotateY, setRotateY] = useState(135);
  const [rotateX2, setRotateX2] = useState(45);
  const [rotateY2, setRotateY2] = useState(45);

  const Roll = (e) => {
    RollDark(e);
    RollFun(e);
  };

  const RollDark = (e) => {
    e.preventDefault();
    let x, y;
    const rnd = Math.floor(Math.random() * 6 + 1);
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

    setRotateX(x);
    setRotateY(y);
  };

  const RollFun = (e) => {
    e.preventDefault();
    let x, y;
    const rnd = Math.floor(Math.random() * 6 + 1);
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

    setRotateX2(x);
    setRotateY2(y);
  };

  return (
    <Container>
      <Panel dotColor={dotColor} diceColor={diceColor} placeDice={50}>
        <Dice rotateY={rotateY} rotateX={rotateX}>
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
        </Dice>
      </Panel>

      <Panel dotColor={dotColor2} diceColor={diceColor2} placeDice={70}>
        <Dice rotateY={rotateY2} rotateX={rotateX2}>
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
        </Dice>
      </Panel>

      <div className="custom">
        <Button onClick={Roll}>Spin dice</Button>
      </div>
    </Container>
  );
};

export default DiceRoller;
