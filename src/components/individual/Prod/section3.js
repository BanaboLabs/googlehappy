import React from "react";
import styled from "styled-components";
import step1 from "../../../images/step1.svg";
import step1test from "../../../images/step1.png";
import step1small from "../../../images/step1small.svg";
import heart from "../../../images/heartgif.gif";
import logogrid from "../../../images/logogrid.svg";
import useMediaQuery from "../../../hooks/useMediaQuery";

export default function Section3() {
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return (
    <Wrapper>
      <ContentWrapper>
        <Title1>Here’s how it works</Title1>
        {isDesktop ? (
          <SubHead>Get started with Banabo in 5 minutes</SubHead>
        ) : null}
        <Spacer />
        <HorizontalWrapper1>
          <VerticalWrapper1>
            <BiggerVertical>
              <SmallVertical>
                <Step>STEP 1</Step>
                <SmallBlackText>Connect your channels</SmallBlackText>
              </SmallVertical>

              {isDesktop ? (
                <VerySmallBlackText>
                  Banabo gathers the traffic source for all unique visitors on
                  your site. Know both the general source like Facebook or be
                  precise with a campaign
                </VerySmallBlackText>
              ) : (
                <VerySmallBlackText>
                  Banabo gathers the traffic source for all unique visitors on
                  your site.
                </VerySmallBlackText>
              )}
            </BiggerVertical>
          </VerticalWrapper1>
          {isDesktop ? (
            <Container>
              <ShadowIMG src={step1} />
              <THEImg src={heart} />
            </Container>
          ) : (
            <Container>
              <ShadowIMG src={step1small} />
            </Container>
          )}
        </HorizontalWrapper1>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 50vh;
  min-width: 100%;
  position: relative;
  background-color: #ffffff;
`;

const BiggerVertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: left;

  @media (max-width: 1200px) {
    text-align: left;
    gap: 0px;
    width: 80vw;
  }
`;

const ShadowIMG = styled.img`
  filter: drop-shadow(2px 5px 40px #eeeeee);
  @media (max-width: 1200px) {
    filter: drop-shadow(2px 5px 40px #eeeeee);
    width: 80%;
    height: 80%;
  }
`;

const SmallVertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 30px;
  @media (max-width: 1200px) {
    gap: 0px;
    padding-top: 0px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
  padding: 60px;
  padding-top: 200px;
  @media (max-width: 1200px) {
    padding: 0px;
    padding-top: 60px;
    padding-bottom: 40px;
  }
`;

const Spacer = styled.div`
  padding-top: 120px;
  @media (max-width: 1200px) {
    padding-top: 60px;
  }
`;

const Title1 = styled.div`
  font-size: 70px;
  line-height: 85px;
  color: #252531;
  font-family: "ProximaNovaSemiBold";
  @media (max-width: 1500px) {
    font-size: 50px;
    width: 500px;
    line-height: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 61px;
  }
  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 75vw;
  }
`;

const SubHead = styled.div`
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #252531;
  font-family: "ProximaNovaSemiBold";
`;

const Step = styled.div`
  font-size: 24px;
  line-height: 29px;
  font-family: "ProximaNovaSemiBold";
  color: #666581;
  @media (max-width: 1200px) {
    font-size: 18px;
  }
`;

const THEImg = styled.img`
  position: absolute;
  top: 35px;
  left: 40px;
  height: 62px;
  width: 62px;
`;

const SmallBlackText = styled.div`
  font-size: 50px;
  line-height: 61px;
  width: 410px;
  font-family: "ProximaNovaSemiBold";
  color: #252531;
  @media (max-width: 1200px) {
    font-size: 26px;
    width: 200px;
    line-height: 35px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const VerySmallBlackText = styled.div`
  font-size: 24px;
  line-height: 29px;
  font-family: "ProximaNovaRegular";
  color: #3a3a3a;
  width: 550px;
  @media (max-width: 1500px) {
    width: 440px;
  }
  @media (max-width: 1200px) {
    font-size: 18px;
    width: 80vw;
  }
`;

const HorizontalWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 120px;
  align-items: top;
  justify-content: top;
  @media (max-width: 1500px) {
    gap: 40px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  position: relative;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    text-align: center;
    padding-bottom: 20px;
  }
`;

const VerticalWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  @media (max-width: 1200px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    text-align: center;
  }
`;
