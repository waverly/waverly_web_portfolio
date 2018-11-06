import React, { Fragment } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div`
  width: 100vw;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
`;

const Left = styled.div`
  width: 49%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 49%;
  text-align: right;
  a {
    margin-left: 15px;
    font-size: 14px;
    line-height: 22px;
    text-transform: uppercase;
    position: relative;
    &::before {
      content: "";
      width: 100%;
      height: 40%;
      position: absolute;
      background-color: ${props => props.theme.colors.yellow};
      top: 30%;
      left: 0;
      z-index: -1;
      opacity: ${props => (props.active ? "1" : "0")};
    }
  }
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;
const Description = styled.h3``;

const Nav = props => {
  return (
    <NavWrapper>
      <Left>
        <h2>Waverly Mandel</h2>
      </Left>
      <Right>
        <Link active={props.location.pathname === "/info"} to="/info">
          Info
        </Link>
        <Link active={props.location.pathname === "/"} to="/">
          Recent Work
        </Link>
      </Right>
    </NavWrapper>
  );
};

export default withRouter(Nav);
