import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { generateKey } from "Utils/helpers";

const ItemWrapper = styled.div`
  width: 100%;
  padding: 30px 5px;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;

  img {
    opacity: 0;
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
  }
`;

const OuterWrap = styled.div`
  &:hover {
    background-color: ${props => props.theme.colors.yellow};
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  width: 30%;
  text-align: right;
  span {
    margin-left: 10px;
    font-size: 14px;
    line-height: 22px;
    text-transform: uppercase;
  }
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;
const Description = styled.h3``;

const PortfolioItem = props => {
  const { title, description, hyperlink, thumbnail, technologies } = props.data;

  return (
    <OuterWrap>
      <Link to={hyperlink}>
        <ItemWrapper>
          <Left>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Left>
          <Right>
            {technologies.map(tech => (
              <span key={generateKey(tech)}>{tech}</span>
            ))}
          </Right>
        </ItemWrapper>
      </Link>
      {/* <img src={thumbnail} alt="" /> */}
    </OuterWrap>
  );
};

export default PortfolioItem;
