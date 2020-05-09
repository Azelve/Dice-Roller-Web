import React, { useState } from "react";
import { Container, Panel, Dice, Icon, Button } from "./style";

import dark from "../../assets/images/dark.png";
import red from "../../assets/images/red.png";

const DiceRoller = () => {
  const [diceColor, setDiceColor] = useState("#CC0000");
  const [dotColor, setDotColor] = useState("#000000");
  const [buttonColor, setButtonColor] = useState("#a6a6a6");
  const [buttonShadow, setButtonShadow] = useState("#737373");
  const [buttonTextColor, setButtonTextColor] = useState("#ce3a47");
  const [rotateX, setRotateX] = useState(45);
  const [rotateY, setRotateY] = useState(30);

  const Roll = (e) => {
    e.preventDefault();
    let x, y;
    const rnd = Math.floor(Math.random() * 6 + 1);
    console.log(diceColor);
    console.log(dotColor);
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

  const ChangeDark = () => {
    setDiceColor("#000000");
    setDotColor("#CC0000");
    setButtonColor("#ec635b");
    setButtonShadow("#ce3a47");
    setButtonTextColor("#000000");
  };

  const ChangeRed = () => {
    setDiceColor("#CC0000");
    setDotColor("#000000");
    setButtonColor("#a6a6a6");
    setButtonShadow("#737373");
    setButtonTextColor("#ce3a47");
  };

  return (
    <Container>
      <span>
        <Icon onClick={ChangeDark}>
          <img src={dark} alt="Dark Mode" height={100} width={100} />
        </Icon>
        <Icon onClick={ChangeRed}>
          <img src={red} alt="Blood Mode" height={100} width={100} />
        </Icon>
      </span>
      <Panel dotColor={dotColor} diceColor={diceColor}>
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

      <div className="custom">
        <Button
          onClick={Roll}
          buttonColor={buttonColor}
          buttonShadow={buttonShadow}
          buttonTextColor={buttonTextColor}
        >
          Spin dice
        </Button>
      </div>
    </Container>
  );
};

export default DiceRoller;
