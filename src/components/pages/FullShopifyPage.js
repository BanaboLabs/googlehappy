import React from "react";
import styled from "styled-components";
import HeaderBlack from "../../components/individual/HeaderBlack";
import HeaderDropDownBlack from "../../components/individual/HeaderDropDownBlack";
import useMediaQuery from "../../hooks/useMediaQuery";
import GoldHeart from "../../images/goldheart.gif";
import Picture1 from "../../images/shopifypicture1.svg";
import Picture2 from "../../images/shopifypicture2.svg";
import Code1 from "../../images/shopifycode1.svg";

export default function FullShopifyPage() {
  const isDesktop = useMediaQuery("(min-width: 800px)");
  var one = "</he";
  var two = "ad>";

  return (
    <ParentWrapper>
      <Wrapper>
        {isDesktop ? <HeaderBlack /> : <HeaderDropDownBlack />}
        <ContentWrapper>
          <LargeVStack>
            <VStack2>
              <HStack2>
                <TheBoat src={GoldHeart} />
                <Title>Shopify</Title>
              </HStack2>
              <SubTitle>Add the Banabo Snippet to your Shopify site</SubTitle>
              <Spacer />
            </VStack2>
            <Line />
            <SmallVStack>
              <SubTitle>Step 1</SubTitle>
              <TextWrapper>
                <GrayLight>
                  Navigate to the edit code section of your theme by going to:
                </GrayLight>
                <GrayDark> Online Store - Themes - Actions </GrayDark>
                <GrayLight> (next to your current theme) -</GrayLight>
                <GrayDark> Edit Code</GrayDark>
              </TextWrapper>
              <ShrunkIMG src={Picture1} />
            </SmallVStack>
            <Line />
            <SmallVStack>
              <SubTitle>Step 2</SubTitle>
              <TextWrapper>
                <GrayLight>Under the</GrayLight>
                <GrayDark> Layout </GrayDark>
                <GrayLight> section of the code editor select, </GrayLight>
                <GrayDark> theme.liquid</GrayDark>
              </TextWrapper>
            </SmallVStack>
            <Line />
            <SmallVStack>
              <SubTitle>Step 3</SubTitle>
              <TextWrapper>
                <GrayLight>Find the closing</GrayLight>
                <GrayDark> {one + two} </GrayDark>
                <GrayLight>
                  section of the theme.liquid file. Note that some themes will
                  use a variation of this, such as [/header] or [/head].{" "}
                </GrayLight>
                <GrayDark> Edit Code</GrayDark>
              </TextWrapper>
              <TextWrapper>
                <GrayLight>You can search for</GrayLight>
                <GrayDark> {one + two} </GrayDark>
                <GrayLight>
                  within the theme.liquid by clicking into the code and pressing
                </GrayLight>
                <GrayDark> CTRL + F </GrayDark>
                <GrayLight>on Windows or</GrayLight>
                <GrayDark> command + F </GrayDark>
                <GrayLight>on Mac.</GrayLight>
              </TextWrapper>
              <ShrunkIMG src={Picture2} />
            </SmallVStack>
            <Line />
            <SmallVStack>
              <SubTitle>Step 4</SubTitle>
              <TextWrapper>
                <GrayLight>
                  Your code snippet should be available within the Banabo app.
                  Copy the code to your clipboard and paste it immediately
                </GrayLight>
                <GrayDark> before </GrayDark>
                <GrayLight> the closing tag.</GrayLight>
                <GrayDark> {one + two} </GrayDark>
                <GrayLight>tag.</GrayLight>
              </TextWrapper>
              <Rectangle>
                <CodeIMG src={Code1} />
              </Rectangle>
            </SmallVStack>
            <Line />
            <SmallVStack>
              <SubTitle>Step 5</SubTitle>
              <TextWrapper>
                <GrayLight>
                  Click save to deploy your newly added Banabo code. That’s it
                  for implementing Banabo on the storefront of your Shopify
                  website.
                </GrayLight>
              </TextWrapper>
            </SmallVStack>
          </LargeVStack>
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
  min-height: 100%;
  min-width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 95px;
  padding-bottom: 95px;
  @media (max-width: 1500px) {
    padding-left: 200px;
  }
  @media (max-width: 1200px) {
    padding-left: 0px;
    padding-top: 60px;
  }
`;

const ShrunkIMG = styled.img`
  width: 69%;
  height: 69%;

  @media (max-width: 1200px) {
    width: 60vw;
    height: auto;
  }
`;

const CodeIMG = styled.img`
  @media (max-width: 1200px) {
    width: 80%;
    height: 80%;
  }
`;

const HStack2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;

  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding-right: 10px;
  }
`;

const VStack2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Spacer = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: inline;
    padding-top: 10px;
  }
`;

const TheBoat = styled.img`
  width: 70px;
  height: 70px;
`;

const Title = styled.div`
  font-family: "ProximaNovaBold";
  font-size: 70px;
  color: #252531;
  line-height: 85px;

  @media (max-width: 1200px) {
    font-size: 35px;
    padding-left: 10px;
    line-height: 60px;
  }
`;

const SubTitle = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 30px;
  color: #252531;
  line-height: 45px;

  @media (max-width: 1200px) {
    font-size: 26px;
    width: 300px;
    text-align: center;
  }
`;

const LargeVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 108px;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }
`;

const SmallVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-content: left;
  justify-items: left;
  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
  }
`;

const Line = styled.div`
  width: 1380px;
  height: 1px;
  background: #eaeaea;
  @media (max-width: 1200px) {
    width: 80%;
  }
`;

const GrayLight = styled.span`
  font-family: "ProximaNovaRegular";
`;

const GrayDark = styled.span`
  font-family: "ProximaNovaSemibold";
`;

const TextWrapper = styled.div`
  width: 827px;
  line-height: 24px;
  color: #7f7f7f;
  font-size: 20px;
  @media (max-width: 1200px) {
    font-size: 16px;
    width: 340px;
    text-align: center;
  }
`;

const Rectangle = styled.div`
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 15px;
  width: 747px;
  height: 247px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    width: 300px;
    height: 137px;
  }
`;
