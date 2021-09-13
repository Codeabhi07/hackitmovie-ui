import styled from "styled-components";

export const Outer = styled.div``;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ url }) => url});
  filter: blur(6px);
`;

export const Poster = styled.img`
  display: flex;
  margin: auto;
  height: 55vh;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
`;

export const Text = styled.div`
  display: flex;
  margin: auto;
  border-radius: 6px;
  margin-top: 10px;
  align-items: center;
  flex-direction: column;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 60px;
`;

export const LeftContainer = styled.div`
  background: white;
  border-radius: 6px;
  flex-wrap: wrap;
  padding: 2px;
  flex-direction: column;
  justify-content: space-around;
  font-weight: bold;
  flex: 1;
`;

export const BlankSpace = styled.div`
  flex: 0.5;
`;

export const RightContainer = styled.div`
  background-color: rgba(255, 255, 255);
  border-radius: 6px;
  flex-direction: column;
  padding-top: 10px;
  padding-right: 10px;
  flex-direction: column;
  justify-content: space-around;
  flex: 3;
`;

export const Header = styled.div`
  height: 50px;
  width: 100%;
  position: fixed;
  margin-top: 20px;
  margin-right: 20px;
  border-radius: 5px;
  top: 0;
  display: flex;
  align-items: center;
  background: blue;
  opacity: 1;
`;

export const Footer = styled.div`
  height: 60px;
  width: 61.5%;
  position: fixed;
  border-radius: 5px;
  bottom: 0;
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  margin-right: 60px;
  background-image: linear-gradient(white, skyblue);
  justify-content: space-around;
`;
