import React, { useState, useEffect } from "react";
import styled from "styled-components";
import withbanabo from "../../images/withbanabo.svg";
import withoutbanabo from "../../images/withoutbanabo.svg";

export default function ToggleSection() {
  const [toggle, toggleSelected] = useState(false);
  const [rightvalue, rightValueSelected] = useState(false);
  const [widthvalue, widthValueSelected] = useState(false);

  useEffect(() => {
    rightValueSelected(!rightvalue);
    widthValueSelected(!widthvalue);
  }, [toggle]);

  return (
    <ContentWrapper>
      <Container onClick={() => toggleSelected(!toggle)}>
        <Button rightvalue={rightvalue} widthvalue={widthvalue}>
          <TextWrapper>
            <Text>Without Banabo</Text>
            <Text>Without Banabo</Text>
          </TextWrapper>
        </Button>
      </Container>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  height: 73px;
  width: 350.8428649902344px;
  background: #ffffff;
  box-shadow: 0px 0px 30px 5px rgba(174, 174, 174, 0.18);
  border-radius: 60px;
  border-radius: 60px;
  position: relative;
  cursor: pointer;
  transition: all 0.9s ease;
`;

const Button = styled.div`
  height: 72px;
  width: 180px;
  background: #2194ff;
  border-radius: 60px;
  will-change: transform;
  padding-top: 20px;
  transition: transform 0.4s ease-out;
  right: ${(props) => (props.rightvalue ? 0 : "none")};
`;

const Text = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 18px;
  color: #252531;
  padding-left: 55px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const CenteredImg = styled.img`
  text-align: center;
  top: 700px;
  margin: 0 auto;
  max-width: 100%;
  @media (min-width: 2100px) {
    min-width: 55%;
  }
  @media (max-width: 1080px) {
    padding-left: 20px;
  }
  @media (max-width: 700px) {
    max-width: 99%;
    padding-top: 10px;
  }
`;

/* <div>
        {toggle == true ? (
          <CenteredImg src={withoutbanabo} alt="channel attribution" />
        ) : (
          <CenteredImg src={withbanabo} alt="channel attribution" />
        )}
      </div> */

// width: ${(props) => (props.widthvalue ? 134 : 154)}px;
