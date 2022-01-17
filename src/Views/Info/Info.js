import React from "react";
import styled from "styled-components";

const PageWrap = styled.div`
  text-align: left;
  padding: 150px 0px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    padding: 80px 0;
  }
`;

const TextWrap = styled.div`
  width: 60%;
  margin: 0 auto;
  max-width: 600px;
  min-width: 500px;

  @media screen and (max-width: 1000px) {
    width: 95%;
    min-width: auto;
  }
`;

const Name = styled.h1`
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
    margin-left: -10px;
  }
`;

const Bio = styled.h2`
  margin-bottom: 40px;
  margin-left: 5px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    margin-left: 0;
  }
`;

const FlexWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 5px;

  a {
    margin-right: 20px;
    position: relative;
    display: inline-block;
    text-decoration: none;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-left: 0;
  }
`;


const Info = () => {
  return (
    <PageWrap>
      <TextWrap>
        <Name>Waverly Mandel</Name>
        <Bio>
          Software engineer
        </Bio>
        <FlexWrap>
          <a href="mailto:waverly.rose.mandel@gmail.com">
            Contact
          </a>
          <a href="https://www.linkedin.com/in/waverly-mandel-001813125/">
            Linkedin
          </a>
        </FlexWrap>
      </TextWrap>
    </PageWrap>
  );
};

export default Info;
