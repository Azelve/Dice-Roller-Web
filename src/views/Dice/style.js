import styled from "styled-components";

export const Container = styled.div`
  .custom {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: calc(20% + 250px);
  }

  .custom > button {
    font-size: 20px;
    font-family: "Verdana";
    width: 200px;
    height: 50px;
    font-weight: bold;
    color: #c00;
    background-color: #000;
    border: none;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    transition: 0.4s ease;
  }

  .custom > button:hover {
    background-color: #c00;
    color: #000;
  }
`;

export const Icon = styled.button`
  padding: 0;
  cursor: pointer;
  outline: none;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  margin: 0 20px;
`;

export const Panel = styled.div`
  border-radius: 10px;
  width: 200px;
  height: 200px;
  perspective: 400px;
  position: absolute;
  left: 60%;
  top: 30%;
  transform: translate(-50%, -50%);

  .dot {
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 4px;
    background-color: ${(props) => props.dotColor};
  }
  .side {
    position: absolute;
    background-color: ${(props) => props.diceColor};
    width: 200px;
    height: 200px;
    border-radius: 10px;
    line-height: 200px;
  }
  .one {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotateX(-90deg) translateZ(100px);
    z-index: 1;
  }
  .two {
    display: flex;
    justify-content: space-between;
    transform: rotateY(180deg) translateZ(100px);
    z-index: 2;
  }
  .two .dot:nth-of-type(2) {
    align-self: flex-end;
  }
  .three {
    display: flex;
    justify-content: space-between;
    transform: rotateY(90deg) translateZ(100px);
    z-index: 3;
  }

  .three .dot:nth-of-type(2) {
    align-self: center;
  }

  .three .dot:nth-of-type(3) {
    align-self: flex-end;
  }
  .four {
    z-index: 4;
    transform: rotateY(0deg) translateZ(100px);
  }
  .four,
  .six {
    display: flex;
    justify-content: space-between;
  }

  .four .kolona,
  .six .kolona {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .five {
    display: flex;
    justify-content: space-between;
    transform: rotateY(-90deg) translateZ(100px);
    z-index: 5;
  }

  .five .kolona {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .five .kolona:nth-of-type(2) {
    justify-content: center;
  }
  .six {
    transform: rotateX(90deg) translateZ(100px);
    z-index: 6;
  }
`;

export const Dice = styled.div`
  height: 200px;
  width: 200px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px) rotateY(${(props) => `${props.rotateY}deg`})
    rotateX(${(props) => `${props.rotateX}deg`});
  transition: transform 1s;
`;
