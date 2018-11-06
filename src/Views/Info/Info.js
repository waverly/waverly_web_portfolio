import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PortfolioItem from "Components/PortfolioItem";
import { generateKey } from "Utils/helpers";
import { fetchWorkPage } from "../../Utils/prismic-configuration";

const PageWrap = styled.div`
  text-align: left;
  padding: 150px 0px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-size: 14px;
  }
`;

const TextWrap = styled.div`
  width: 70%;
  margin: 0 auto;
  max-width: 800px;
`;
const Bio = styled.h2`
  margin-bottom: 40px;
`;

const TechWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 40px;

  div {
    margin-right: 80px;
  }
`;

const Info = props => {
  return (
    <PageWrap>
      <TextWrap>
        <Bio>
          WAVERLY MANDEL IS A full-stack web developer with a strong design
          sensibility. After studying web programming and VISUAL art at New York
          University, SHE went on to split my time between building websites and
          applications, teaching Front-End Web Development for General Assembly,
          and doing occasional boutique design work.
        </Bio>

        <h2>Technologies</h2>
        <br />
        <TechWrap>
          <div>
            <h3>*React.JS</h3>
            <h3>*Angular 2+</h3>
            <h3>*Shopify / Liquid</h3>
            <h3>*GraphQL</h3>
          </div>
          <div>
            <h3>*Javascript / JQuery</h3>
            <h3>*HTML5</h3>
            <h3>*css /scss / jss</h3>
            <h3>*Basic ThreeJS / WebGL</h3>
          </div>
        </TechWrap>
        <a href="https://github.com/waverly">View Github</a>
      </TextWrap>
    </PageWrap>
  );
};

export default Info;
