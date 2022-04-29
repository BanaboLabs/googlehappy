import React from "react";
import styled from "styled-components";
import HeaderBlack from "../../components/individual/HeaderBlack";
import HeaderDropDownBlack from "../../components/individual/HeaderDropDownBlack";
import useMediaQuery from "../../hooks/useMediaQuery";
import GoldHeart from "../../images/goldheart.gif";
import Code1 from "../../images/reactcode1.svg";
import Code2 from "../../images/reactcode2.svg";
import Code3 from "../../images/reactcode3.svg";

export default function FullReactPage() {
  const isDesktop = useMediaQuery("(min-width: 800px)");
  var one = "<Hel";
  var two = "met>";

  return (
    <ParentWrapper>
      <Wrapper>
        {isDesktop ? <HeaderBlack /> : <HeaderDropDownBlack />}
        <ContentWrapper>
          <LargeVStack>
            <VStack2>
              <HStack2>
                <TheBoat src={GoldHeart} />
                <Title>React</Title>
              </HStack2>
              <SubTitle>Add the Banabo Snippet to your React site</SubTitle>
              <Spacer />
            </VStack2>
            <Line />
            <SmallVStack>
              <SubTitle>Step 1</SubTitle>
              <TextWrapper>
                <GrayLight>
                  You'll need to use the React Helmet dependency to add the code
                  snippet to your website's header. Start by running either...
                </GrayLight>
              </TextWrapper>
              <RectangleSmall>
                <CodeIMG src={Code1} />
              </RectangleSmall>
              <RectangleSmall>
                <CodeIMG src={Code2} />
              </RectangleSmall>
            </SmallVStack>
            <Line />
            <SmallVStack>
              <SubTitle>Step 2</SubTitle>
              <TextWrapper>
                <GrayLight>
                  Then simply add the {one + two} tags to app.js with the code
                  snippet inside. Should look like this...
                </GrayLight>
              </TextWrapper>
              <Rectangle>
                <CodeIMG src={Code3} />
              </Rectangle>
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
  @media (max-width: 900px) {
    width: 90%;
    height: 90%;
  }
`;

const HStack2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;

  @media (max-width: 900px) {
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
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Spacer = styled.div`
  display: none;
  @media (max-width: 900px) {
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

  @media (max-width: 900px) {
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

  @media (max-width: 900px) {
    font-size: 26px;
    width: 300px;
    text-align: center;
  }
`;

const LargeVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 108px;
  @media (max-width: 900px) {
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
  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
`;

const Line = styled.div`
  width: 1380px;
  height: 1px;
  background: #eaeaea;
  @media (max-width: 900px) {
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
  @media (max-width: 900px) {
    font-size: 16px;
    width: 350px;
    text-align: center;
  }
`;

const RectangleSmall = styled.div`
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 15px;
  width: 607px;
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 350px;
    height: 67px;
  }
`;

const Rectangle = styled.div`
  background: #ffffff;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 15px;
  height: 333px;
  width: 747px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    width: 350px;
    height: 180px;
  }
`;
