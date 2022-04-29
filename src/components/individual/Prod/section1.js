import React, { useState } from "react";
import styled from "styled-components";
import HeaderBlack from "../HeaderBlack";
import lightbulb from "../../../images/lightbulb.gif";
import { Link } from "gatsby";
import product from "../../../images/product.svg";
import background1 from "../../../images/background.png";
import background2 from "../../../images/background2.png";
import productsmall from "../../../images/productsmall.svg";
import logostrip from "../../../images/logostrip.svg";
import logostripsmall from "../../../images/logostripsmall.svg";
import useMediaQuery from "../../../hooks/useMediaQuery";
import HeaderDropDownBlack from "../HeaderDropDownBlack";
import { motion } from "framer-motion";
import withbanabo from "../../../images/withbanabo.svg";
import withoutbanabo from "../../../images/withoutbanabo.svg";
import withbanabosmall from "../../../images/withbanabosmall.svg";
import withoutbanabosmall from "../../../images/withoutbanabosmall.svg";
import ToggleSwitch from "./toggleswitch";

export default function Section1() {
  const [isParentData, setIsParentData] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Wrapper>
      <TheAnimation
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.5 }}
      >
        {isDesktop ? <HeaderBlack /> : <HeaderDropDownBlack />}
      </TheAnimation>
      <ContentWrapper>
        <VerticalWrapper11>
          <HorizontalWrapper1>
            {isDesktop ? null : <Product src={product} />}
            <VerticalStack>
              <VerticalWrapper1>
                <Title
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{ delay: 0.5 }}
                >
                  Convert more website visitors
                </Title>
                <SubHead
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{ delay: 0.6 }}
                >
                  Know the exact impact of each traffic channel on a website
                  conversion with Banabo
                </SubHead>
                <TransitionDiv1
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{ delay: 0.7 }}
                >
                  <StyledLink to="/landing">
                    <StyledButton>Try Banabo Free</StyledButton>
                  </StyledLink>
                </TransitionDiv1>
              </VerticalWrapper1>
              <MiniVStack
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ delay: 0.8 }}
              >
                <GrayTitle>CONNECT TO EVERY CHANNEL</GrayTitle>
                {isDesktop ? (
                  <Logos src={logostrip} />
                ) : (
                  <Logos src={logostripsmall} />
                )}
              </MiniVStack>
            </VerticalStack>
            {isDesktop ? (
              <Product
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ delay: 0.6 }}
                src={product}
              />
            ) : null}
          </HorizontalWrapper1>
        </VerticalWrapper11>
        <Spacer />
        <VerticalWrapper12>
          <VerticalWrapper22>
            <HorizontalWrapper222>
              <BigBlackText2>
                Uncover every channel that contributes to a purchase
              </BigBlackText2>
              {isDesktop ? (
                <ToggleSwitch
                  toChild={isParentData}
                  sendToParent={setIsParentData}
                />
              ) : null}{" "}
            </HorizontalWrapper222>
            {isParentData == true && isDesktop == true ? (
              <EditIMG2 src={withbanabo} />
            ) : isParentData == false && isDesktop == true ? (
              <EditIMG2 src={withoutbanabo} />
            ) : isParentData == true && isDesktop == false ? (
              <img src={withbanabosmall} />
            ) : (
              <img src={withoutbanabosmall} />
            )}
          </VerticalWrapper22>
          {isDesktop ? null : (
            <ToggleSwitch
              toChild={isParentData}
              sendToParent={setIsParentData}
            />
          )}
        </VerticalWrapper12>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100%;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${background1});
  @media (max-width: 1500px) {
    background-image: url(${background2});
  }
`;

const TheAnimation = styled(motion.div)`
  @media (max-width: 1500px) {
    padding-left: 80px;
  }
  @media (max-width: 1200px) {
    padding-left: 0px;
  }
`;

const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    padding-bottom: 60px;
  }
`;

const Spacer = styled.div`
  padding-top: 280px;
  @media (max-width: 1500px) {
    padding-top: 180px;
  }
  @media (max-width: 1200px) {
    padding-top: 0px;
  }
`;

const EditIMG2 = styled.img`
  width: 180%;
  height: 180%;

  @media (max-width: 1500px) {
    width: 160%;
    height: 160%;
  }
`;

const BigBlackText2 = styled.div`
  font-size: 44px;
  line-height: 54px;
  text-align: center;
  width: 600px;
  font-family: "ProximaNovaSemiBold";
  color: #252531;
  @media (max-width: 1500px) {
    text-align: center;
  }

  @media (max-width: 1200px) {
    padding-top: 40px;
    text-align: center;
    font-size: 22px;
    width: 70vw;
    line-height: 27px;
  }
`;

const VerticalWrapper12 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 1200px) {
    gap: 30px;
  }
`;

const VerticalWrapper22 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  @media (max-width: 1200px) {
    gap: 30px;
  }
`;

const HorizontalWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    width: 300px;
  }
`;

const HorizontalWrapper222 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

const TransitionDiv1 = styled(motion.div)``;

const HorizontalWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 120px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1500px) {
    gap: 80px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;

const VerticalWrapper11 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  align-items: center;
  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 60px;
  }
`;

const Logos = styled.img`
  width: 70%;
  height: 70%;
`;

const VerticalStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding-bottom: 90px;
  @media (max-width: 1200px) {
    gap: 50px;
  }
`;

const MiniVStack = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const GrayTitle = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #9695a8;
  font-family: "ProximaNovaSemibold";
`;

const VerticalWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  justify-items: left;
  align-content: left;
  gap: 30px;

  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled(motion.div)`
  font-family: "ProximaNovaBold";
  font-size: 74px;
  color: #252531;
  width: 600px;
  line-height: 70px;

  @media (max-width: 1500px) {
    font-size: 50px;
    width: 400px;
    line-height: 50px;
  }

  @media (max-width: 1200px) {
    font-size: 38px;
    width: 300px;
    line-height: 45px;
  }
`;

const SubHead = styled(motion.div)`
  font-size: 20px;
  line-height: 24px;
  font-family: "ProximaNovaSemibold";
  color: #252531;
  width: 430px;
  @media (max-width: 1200px) {
    width: 80vw;
  }
`;

const Product = styled(motion.img)`
  width: 63%;
  height: 63%;

  @media (max-width: 1500px) {
    width: 70%;
    height: 70%;
  }

  @media (max-width: 1200px) {
    width: 90%;
    height: 90%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled.button`
  font-family: "ProximaNovaSemiBold";
  font-size: 17px;
  color: #ffffff;
  border: none;
  height: 45px;
  width: 193px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 300px;
  background: linear-gradient(90deg, #265de3, #af71ff);

  :hover {
    background: linear-gradient(90deg, #104fe8 -10.37%, #9a4bff 108.53%);
  }
`;
