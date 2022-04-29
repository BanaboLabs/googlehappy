import React from "react";
import styled from "styled-components";
import step3 from "../../../images/step3.svg";
import step3small from "../../../images/step3small.svg";
import goldheart from "../../../images/goldheart.gif";
import useMediaQuery from "../../../hooks/useMediaQuery";

export default function Section5() {
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  return (
    <Wrapper>
      <ContentWrapper>
        <HorizontalWrapper1>
          <VerticalWrapper1>
            <BiggerVertical>
              <SmallVertical>
                <Step>STEP 3</Step>
                <SmallBlackText>Get scores for every channel</SmallBlackText>
              </SmallVertical>
              {isDesktop ? (
                <VerySmallBlackText>
                  Banabo analyzes each channel’s performance with our in-house
                  machine learning model telling you exactly what influenced a
                  conversion
                </VerySmallBlackText>
              ) : (
                <VerySmallBlackText>
                  Banabo analyzes each channel’s performance with our in-house
                  machine learning model
                </VerySmallBlackText>
              )}
            </BiggerVertical>
          </VerticalWrapper1>
          {isDesktop ? (
            <Container>
              <ShadowIMG src={step3} />
              <THEImg src={goldheart} />
            </Container>
          ) : (
            <Container>
              <ShadowIMG src={step3small} />
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
  @media (max-width: 1200px) {
    padding: 0px;
    padding-top: 20px;
    padding-bottom: 40px;
  }
`;

const Spacer = styled.div`
  padding-top: 120px;
`;

const Title1 = styled.div`
  font-size: 70px;
  line-height: 85px;
  color: #252531;
  font-family: "ProximaNovaSemiBold";
  @media (max-width: 1500px) {
    font-size: 50px;
    width: 400px;
    line-height: 50px;
  }
  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    text-align: center;
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
  top: 25px;
  left: 30px;
  height: 62px;
  width: 62px;
`;

const SmallBlackText = styled.div`
  font-size: 50px;
  line-height: 61px;
  width: 400px;
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

const Title = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 70px;
  color: #252531;
  line-height: 85px;
  @media (max-width: 1200px) {
    font-size: 35px;
    line-height: 43px;
  }
`;

const SubTitle = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 24px;
  line-height: 29px;
  color: #3a3a3a;
  width: 600px;
  @media (max-width: 1200px) {
    font-size: 15px;
    width: 330px;
  }
`;
