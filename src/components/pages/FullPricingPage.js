import React from "react";
import styled from "styled-components";
import HeaderWhite from "../individual/HeaderWhite";
import HeaderDropDownWhite from "../individual/HeaderDropDownWhite";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function FullPricingPage() {
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return (
    <Wrapper>
      {isDesktop ? <HeaderWhite /> : <HeaderDropDownWhite />}
      <ContentWrapper>
        <Headline>
          Banabo is free during <br /> the Beta Release
        </Headline>
        <Subheadline>We will introduce pricing in 2022</Subheadline>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: #21212b;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: 80vh;
  gap: 35px;
  @media (max-width: 900px) {
    gap: 25px;
  }
`;

const Headline = styled.h1`
  color: #f6f5f1;
  font-family: "ProximaNovaBold";
  font-size: 50px;
  line-height: 1.2;
  min-width: 100%;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 32px;
  }
`;

const Subheadline = styled.div`
  color: #f6f5f1;
  font-family: "ProximaNovaRegular";
  font-size: 20px;
  line-height: 1.2;
  min-width: 100%;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 16px;
  }
`;
