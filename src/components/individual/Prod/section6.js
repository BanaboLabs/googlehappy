import React from "react";
import styled from "styled-components";
import heart from "../../../images/heartprod.svg";
import gear from "../../../images/gearprod.svg";
import contact from "../../../images/contactprod.svg";
import buttonarrow from "../../../images/buttonarrow.svg";
import { Link } from "gatsby";
import useMediaQuery from "../../../hooks/useMediaQuery";
import cuterarrowright from "../../../images/cuterarrowright.svg";

export default function BottomSection() {
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return (
    <Wrapper>
      <ContentWrapper>
        <VerticalWrapper1>
          <VerticalWrapper>
            <Title>Try Banabo Today</Title>
            <SubTitle>Get started for free.</SubTitle>
          </VerticalWrapper>
          <HorizontalWrapper>
            <StyledLink to="/landing">
              <StyledButton>Try Banabo Free</StyledButton>
            </StyledLink>
            <StyledLink to="/contact">
              {isDesktop ? (
                <HorizontalWrapper2>
                  <SubText>Chat With Us</SubText>
                  <img src={cuterarrowright} />
                </HorizontalWrapper2>
              ) : null}
            </StyledLink>
          </HorizontalWrapper>
        </VerticalWrapper1>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 60vh;
  min-width: 100%;
  position: relative;
  background-color: #ffffff;
  @media (max-width: 1200px) {
    min-height: 40vh;
  }
`;

const HorizontalWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const ContentWrapper = styled.div`
  padding-top: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1200px) {
    padding-top: 80px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const VerticalWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  @media (max-width: 1200px) {
    gap: 20px;
  }
`;

const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    gap: 0px;
  }
`;

const Title = styled.div`
  font-size: 50px;
  text-align: center;
  color: #252531;
  font-family: "ProximaNovaBold";
  @media (max-width: 1200px) {
    font-size: 26px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  text-align: center;
  color: #252531;
  font-family: "ProximaNovaSemiBold";
`;

const SubText = styled.div`
  font-size: 17px;
  text-align: center;
  color: #252531;
  font-family: "ProximaNovaSemiBold";
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
