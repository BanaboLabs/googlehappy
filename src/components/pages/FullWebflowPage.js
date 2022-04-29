import React from "react";
import styled from "styled-components";
import HeaderBlack from "../../components/individual/HeaderBlack";
import HeaderDropDownBlack from "../../components/individual/HeaderDropDownBlack";
import useMediaQuery from "../../hooks/useMediaQuery";
import GoldHeart from "../../images/goldheart.gif";
import Code1 from "../../images/squarespacecode1.svg";

export default function FullWebflowPage() {
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
                <Title>Webflow</Title>
              </HStack2>
              <SubTitle>Add the Banabo Snippet to your Webflow site</SubTitle>
              <Spacer />
            </VStack2>
            <Line />
            <SmallVStack>
              <SubTitle>Step 1</SubTitle>
              <TextWrapper>
                <GrayLight>
                  Code entered in the Head tag is applied to your entire site
                  and links external resources, adds meta data, and uses custom
                  styles in your document. In Project settings, Custom code,
                  enter your code in the Head section. Here is what the code
                  snippet should look like...
                </GrayLight>
              </TextWrapper>
              <RectangleSmall>
                <CodeIMG src={Code1} />
              </RectangleSmall>
            </SmallVStack>
            <Line />
            <SmallVStack>
              <SubTitle>Step 2</SubTitle>
              <TextWrapper>
                <GrayLight>Click the</GrayLight>
                <GrayDark> Save Changes </GrayDark>
                <GrayLight> Button. Presto, you're good to go!</GrayLight>
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
  @media (max-width: 900px) {
    width: 40%;
    height: 40%;
  }
`;

const CodeIMG = styled.img`
  @media (max-width: 900px) {
    width: 90%;
    height: 90%;
  }
`;

const ShrunkIMG3 = styled.img`
  width: 69%;
  height: 69%;
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
  width: 707px;
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
  width: 747px;
  height: 247px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 350px;
    height: 180px;
  }
`;
