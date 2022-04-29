import React from "react";
import styled from "styled-components";
import HeaderBlack from "../../components/individual/HeaderBlack";
import HeaderDropDownBlack from "../../components/individual/HeaderDropDownBlack";
import useMediaQuery from "../../hooks/useMediaQuery";
import Boat from "../../images/boat.gif";
import uno from "../../images/uno.svg";
import dos from "../../images/dos.svg";
import shopify from "../../images/shopify.svg";
import react from "../../images/react.svg";
import squarespace from "../../images/squarespace.svg";
import webflow from "../../images/webflow.svg";
import { Link } from "gatsby";

export default function DocsPage() {
  const isDesktop = useMediaQuery("(min-width: 800px)");

  return (
    <ParentWrapper>
      <Wrapper>
        {isDesktop ? <HeaderBlack /> : <HeaderDropDownBlack />}
        <ContentWrapper>
          <VStack1>
            <HStack1>
              <VStack2>
                <HStack2>
                  <TheBoat src={Boat} />
                  <Title>Documentation</Title>
                </HStack2>
                <SubTitle1>A quick guide for Banabo</SubTitle1>
                <Spacer />
              </VStack2>
              <Rectangle>
                <InsideVStack>
                  <SubTitle2>The Basics</SubTitle2>
                  <InsideHStack>
                    <IMGShrinker src={uno} />
                    <InsideText>
                      Add a clickable Banabo link to each channel to uniquely
                      identify visitors
                    </InsideText>
                  </InsideHStack>
                  <InsideHStack>
                    <IMGShrinker src={dos} />
                    <InsideText>
                      Add the code snippet to your website
                    </InsideText>
                  </InsideHStack>
                </InsideVStack>
              </Rectangle>
            </HStack1>
            <CardVStack>
              <CardHStack>
                <StyledLink to="/shopify">
                  <Adjustableimg src={shopify} />{" "}
                </StyledLink>{" "}
                <StyledLink to="/webflow">
                  <Adjustableimg src={webflow} />
                </StyledLink>
                <StyledLink to="/squarespace">
                  <Adjustableimg src={squarespace} />
                </StyledLink>
              </CardHStack>
              <CardHStack>
                <StyledLink to="/react">
                  <Adjustableimg src={react} />
                </StyledLink>
              </CardHStack>
            </CardVStack>
          </VStack1>
        </ContentWrapper>
      </Wrapper>
    </ParentWrapper>
  );
}

const ParentWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: #ffffff;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Spacer = styled.div`
  display: none;
`;

const Adjustableimg = styled.img`
  filter: drop-shadow(2px 5px 40px #eeeeee);
  @media (max-width: 1500px) {
    width: 80%;
    height: auto;
  }
  @media (max-width: 1200px) {
    width: 72vw;
    height: auto;
  }
`;

const IMGShrinker = styled.img`
  @media (max-width: 1200px) {
    width: 8%;
    height: auto;
  }
`;

const HStack1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 200px;
  padding-top: 100px;
  display: flex;
  justify-content: center;

  @media (max-width: 1500px) {
    gap: 100px;
    padding-right: 80px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 40px;
    padding-top: 40px;
    align-items: center;
    padding-right: 0px;
  }
`;

const VStack1 = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
  @media (max-width: 1200px) {
    gap: 60px;
  }
`;

const VStack2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 1200px) {
    align-items: center;
  }
`;

const HStack2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;

  @media (max-width: 1500px) {
    gap: 15px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TheBoat = styled.img`
  width: 70px;
  height: 70px;
`;

const Title = styled.div`
  font-family: "ProximaNovaBold";
  font-size: 75px;
  color: #252531;
  line-height: 85px;

  @media (max-width: 1500px) {
    font-size: 50px;
  }

  @media (max-width: 1200px) {
    font-size: 38px;
    line-height: 30px;
  }
`;

const SubTitle1 = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 30px;
  color: #252531;
  line-height: 45px;
  @media (max-width: 1200px) {
    font-size: 20px;
  }
`;

const SubTitle2 = styled.div`
  font-family: "ProximaNovaBold";
  font-size: 30px;
  color: #252531;
  line-height: 45px;
  @media (max-width: 1200px) {
    font-size: 26px;
  }
`;

const Rectangle = styled.div`
  width: 533px;
  height: 276.77px;
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 1500px) {
    width: 500px;
  }
  @media (max-width: 1200px) {
    width: 72vw;
  }
`;

const InsideVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 10px;
  align-items: left;
`;

const InsideHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: flex-start;
`;

const InsideText = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 22px;
  max-width: 370px;
  @media (max-width: 1200px) {
    font-size: 14px;
    width: 160px;
  }
`;

const CardVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 75px;
  @media (max-width: 1200px) {
    gap: 50px;
  }
`;

const CardHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 85px;

  @media (max-width: 1500px) {
    gap: 0px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 50px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

//
//
