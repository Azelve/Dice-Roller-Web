import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Drawer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0;
  width: 20%;
  height: 100vh;
  background: #f0f0f0;

  ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0;
    justify-content: space-evenly;
    list-style-type: none;
    padding: 10px;
    font-family: Verdana;

    li {
      max-width: 400px;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
    }

    li a {
      display: flex;
      width: 200px;
      height: 80px;
      color: #000;
      border-radius: 40px;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    li a:hover {
      background-color: #c00;
    }
  }

  a {
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    color: white;
    font-size: 20px;
    margin-bottom: 30px;
  }

  div a {
    font-size: 20px;
    color: #000000;
    transition: 0.4s ease;
    font-weight: normal;
    font-family: Verdana;
  }

  div a:hover {
    color: #c00;
    font-size: 22px;
  }
`;

export const SPA = styled.div`
  flex: 1;
  padding: 15px;
  background-color: #30343b;
`;
