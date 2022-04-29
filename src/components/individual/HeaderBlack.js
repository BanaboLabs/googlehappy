import React from "react";
import styled from "styled-components";
import logoblack from "../../images/banabologoblack.svg";
import { Link } from "gatsby";

export default function HeaderBlack() {
  return (
    <Wrapper>
      <SubWrapper>
        <NavWrapper>
          <ParentGroup>
            <SubGroup1>
              <StyledLink to="/">
                <img src={logoblack} alt="growth" />
              </StyledLink>
              <StyledLink to="/">
                <Title>Banabo</Title>
              </StyledLink>
            </SubGroup1>
            <SubGroup2>
              <MobileHidden>
                <StyledLink to="/docs">
                  <TabItem>Docs</TabItem>
                </StyledLink>
              </MobileHidden>
              <MobileHidden>
                <StyledLink to="/pricing">
                  <TabItem>Pricing</TabItem>
                </StyledLink>
              </MobileHidden>
              <MobileHidden>
                <StyledLink to="/contact">
                  <TabItem>Contact</TabItem>
                </StyledLink>
              </MobileHidden>
            </SubGroup2>
          </ParentGroup>
          <SubGroup2>
            <MobileHidden>
              <StyledLink to="https://app.banabo.io/login">
                <TabItem>Login</TabItem>
              </StyledLink>
            </MobileHidden>
            <StyledLink to="/landing">
              <Button>Sign Up</Button>
            </StyledLink>
          </SubGroup2>
        </NavWrapper>
      </SubWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 10vh;
  min-width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: transparent;
`;

const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 1500px) {
    padding-right: 100px;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 620px;

  @media (max-width: 1500px) {
    gap: 340px;
  }
`;

const Title = styled.div`
  font-family: "ProximaNovaBold";
  color: #252531;
  font-size: 30px;
`;

const TabItem = styled.div`
  font-family: "ProximaNovaSemiBold";
  color: #252531;
  font-size: 19px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Button = styled.button`
  font-family: "ProximaNovaBold";
  font-size: 19px;
  color: #ffffff;
  border: none;
  width: 180px;
  height: 50px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  background: #252531;
  border-radius: 300px;

  transition: 0.2s ease-in-out;

  @media (max-width: 700px) {
    display: none;
  }

  :hover {
    background-color: #000000;
  }
`;

const ParentGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 50px;
`;

const SubGroup1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

const SubGroup2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 50px;
`;

const MobileHidden = styled.div``;

/* 

const Wrapper = styled.div`
  background-size: cover;
  background-position: center;
  position: relative;
  background-image: url(${Blur});
  min-width: 100vh;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: 90vh;
  gap: 35px;
`;

*/
