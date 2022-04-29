import React from "react";
import styled from "styled-components";
import logoblack from "../../../images/banabologoblack.svg";
import logogrid from "../../../images/logogridnew.svg";
import gdpr from "../../../images/gdpr.svg";
import useMediaQuery from "../../../hooks/useMediaQuery";

export default function Footer() {
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  return (
    <Wrapper>
      <ContentWrapper>
        <Line />
        <BigHStack>
          <BelowWrapper>
            <LeftHStack>
              <TopParent>
                <SmallVStack>
                  <LogoHStack>
                    <img src={logoblack} />
                    <BanaboText>Banabo</BanaboText>
                  </LogoHStack>
                  <CopyrightText>
                    Copyright Banabo Labs Inc. 2022. All rights reserved
                  </CopyrightText>
                  <CopyrightText2
                    onClick={() =>
                      window.open(
                        "https://www.banabo.io/privacy-policy/",
                        "_self"
                      )
                    }
                  >
                    Privacy Policy
                  </CopyrightText2>
                  <CopyrightText2
                    onClick={() =>
                      window.open(
                        "https://www.banabo.io/terms-of-service/",
                        "_self"
                      )
                    }
                  >
                    Terms of Service
                  </CopyrightText2>
                </SmallVStack>
              </TopParent>
              <TopParent>
                <VStack>
                  <GrayText>Built by engineers from</GrayText>
                  <SmallIMG src={logogrid} />
                </VStack>
              </TopParent>
            </LeftHStack>
            <TopParent2>
              <BadgeHStack>
                {isDesktop ? <ShadowIMG src={gdpr} /> : null}
              </BadgeHStack>
            </TopParent2>
          </BelowWrapper>
        </BigHStack>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100%;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const Line = styled.div`
  background: #eaeaea;
  transform: matrix(1, 0, 0, -1, 0, 0);
  width: 80vw;
  height: 1px;
`;

const BelowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 82.5vw;
  margin-left: 40px;
  @media (max-width: 1200px) {
    flex-direction: column;
    margin-left: 0px;
    width: 80vw;
  }
`;

const SmallVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: left;
  align-items: left;
`;

const CopyrightText = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 16px;
  color: #252531;
  @media (max-width: 1200px) {
    padding-right: 100px;
    width: 400px;
    text-align: left;
  }
`;

const CopyrightText2 = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 16px;
  color: #252531;
  cursor: pointer;
  @media (max-width: 1200px) {
    padding-right: 100px;
    width: 400px;
    text-align: left;
  }
`;

const BigHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const LeftHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 70px;
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: left;
    align-items: left;
    gap: 10px;
  }
`;

const TopParent = styled.div`
  display: inline-block;
  vertical-align: top; /* here */
  padding-top: 30px;
`;

const TopParent2 = styled.div`
  display: inline-block;
  vertical-align: top;
  padding-left: 20px; /* here */
  margin-top: 8px;
`;

const LogoHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: row;
    justify-content: left;
    align-items: left;
  }
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: left;
  text-align: left;
`;

const BanaboText = styled.div`
  font-size: 26px;
  line-height: 32px;
  color: #252531;
  font-family: "ProximaNovaBold";
`;

const GrayText = styled.div`
  font-size: 20px;
  line-height: 27px;
  font-family: "ProximaNovaRegular";
  color: #7f7f7f;
  width: 340px;
`;

const BadgeHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px;
  justify-content: center;
  align-items: center;
`;

const SmallIMG = styled.img`
  width: 55%;
  height: auto;

  @media (max-width: 1500px) {
    width: 50%;
    height: 50%;
  }

  @media (max-width: 1200px) {
    width: 20%;
    height: 20%;
  }

  @media (max-width: 900px) {
    width: 35%;
    height: 35%;
  }
`;

const ShadowIMG = styled.img`
  width: 100%;
  height: 100%;
`;
