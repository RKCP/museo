import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  width: 100%;
  background: white;
`;

const StyledNavbarLeft = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 40px;
  width: 200px;
  margin: 2%;
  height: 100%;
`;

const StyledNavbarRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width: 600px;
  margin: 2%;
  height: 100%;
`;

const StyledNavbarNavi = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  margin: 10px;
  padding: 10px;
  border-radius: 20px;
  border: gray 1px solid;
  &:hover {
    cursor: pointer;
    background: #f9f9f9;
  }
`;

export function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavbarLeft className="navbar-left">Museo</StyledNavbarLeft>
      <StyledNavbarRight className="navbar-right">
        <StyledNavbarNavi>About</StyledNavbarNavi>
        <StyledNavbarNavi>Profile</StyledNavbarNavi>
        <StyledNavbarNavi>Home</StyledNavbarNavi>
      </StyledNavbarRight>
    </StyledNavbar>
  );
}
