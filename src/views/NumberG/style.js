import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow-x: hidden;
  font-family: Verdana;
  font-weight: 300;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .row {
    max-width: 600px;
    margin: 0 auto;
    padding: 60px 30px;
    text-align: center;
  }
  span {
    position: relative;
    display: inline-block;
    margin: 30px 10px;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 215px;
  font-size: 15px;
  padding: 10px 0 10px 15px;
  font-family: Verdana;
  font-weight: bold;
  color: #ce3a47;
  background: #efefef;
  border: 0;
  border-radius: 3px;
  outline: 0;
  text-indent: 60px;
  transition: all 0.3s ease-in-out;

  &::-webkit-input-placeholder {
    color: #efefef;
    text-indent: 0;
    font-weight: 300;
  }

  + label {
    display: inline-block;
    position: absolute;
    top: 4px;
    left: 0;
    bottom: 6px;
    padding: 5px 15px;
    color: #ce3a47;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0 1px 0 rgba(19, 74, 70, 0);
    transition: all 0.3s ease-in-out;
    border-radius: 3px;
    background: rgba(122, 184, 147, 0);

    &:after {
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      top: 100%;
      left: 50%;
      margin-left: -3px;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-top: 3px solid rgba(122, 184, 147, 0);
      transition: all 0.3s ease-in-out;
    }
  }

  &:focus,
  &:active {
    color: #ec635b;
    text-indent: 0;
    background: #fff;

    &::-webkit-input-placeholder {
      color: #aaa;
    }
    + label {
      color: #222222;
      text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
      background: #ec635b;
      transform: translateY(-40px);

      &:after {
        border-top: 4px solid #ec635b;
      }
    }
  }
`;

export const Output = styled.output`
  display: flex;
  max-width: 200px;
  max-heidth: 200px;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  color: #000000;
  background-color: #ec635b;
  font-size: 22px;
  font-weight: bold;
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  transition: all 0.4s;
  -webkit-transition: all 0.1s;
  height: 40px;
  cursor: pointer;
  position: absolute;
  padding: 10px 40px;
  margin: 0px 10px 10px 0px;
  float: left;
  border-radius: 3px;
  font-family: Verdana, sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: #000000;
  text-decoration: none;
  background-color: #ec635b;
  border-bottom: 5px solid #ce3a47;
  text-shadow: 1px -1px #000000;

  &:active {
    transform: translate(0px, 5px);
    -webkit-transform: translate(0px, 5px);
    border-bottom: 1px solid;
  }
`;
