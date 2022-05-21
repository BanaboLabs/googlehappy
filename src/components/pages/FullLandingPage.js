import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useInput from "../customhooks/useInput";
import LeftSide from "../../images/leftside.svg";
import SmallBanabo from "../../images/smallbanabo.svg";
import left from "../../images/leftlandingpage.svg";
import emailjs from "emailjs-com";
import blackleft from "../../images/blackleft.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import Cookies from "universal-cookie";
import MicrosoftAPISignUp from "./signup/oauth/microsoftAPI";
import GoogleAPISignUp from "./signup/oauth/googleAPI";
import signinwithgoogleprod from "../../images/signinwithgoogleprod.svg";
import signinwithmicrosoftprod from "../../images/signinwithmicrosoftprod.svg";
import banaboLogo from "../../images/banabologo.svg";
import { Link } from "gatsby";
var moment = require("moment");

export default function FullLandingPage() {
  const [getStartedButtonActive, setGetStartedButtonActive] = useState(false);
  const [arrowOpacity, setArrowOpacity] = useState("0.7");
  const [navigation, setNavigation] = useState(1);
  const [spinnerActivated, setSpinnerActivated] = useState(false);
  const cookies = new Cookies();
  const [render, setRender] = useState(1);

  // Google Variables
  const google_client_id =
    "914021793896-2hmcu558rif86gri6n8sl43g28177n6r.apps.googleusercontent.com"; // Banabo - API APP ID
  const google_redirect_uri = "https://www.banabo.org/landing/";
  const google_state = "foobargoogle";
  const google_response_type = "code";
  const google_scope = "email profile adwords";
  const google_access_type = "offline";
  //
  //
  // Microsoft Variables
  const microsoft_client_id = "8daf51ab-2933-47e1-b8ef-13b1e7091b4f"; // Banabo - API APP ID
  const microsoft_redirect_uri = "https://app.banabo.io/signup/";
  const microsoft_state = "foobarmicrosoft";
  const microsoft_response_type = "code";
  const microsoft_scope = ["user.read"];
  //
  //

  //=============================================================================
  // GOOGLE
  //=============================================================================

  useEffect(() => {
    //Google
    if (window.location.href.includes("code")) {
      const params = new Proxy(new URLSearchParams(window.location.search), {
        // @ts-ignore
        get: (searchParams, prop) => searchParams.get(prop),
      });
      // @ts-ignore
      let authCode = params.code;
      // @ts-ignore
      let stateValue = params.state;
      if (stateValue == "foobargoogle") {
        console.log("ran1");
        GoogleAPISignUp(authCode);
      }
    } else {
      console.log("No Code");
    }

    if (window.location.href.includes("code")) {
      const params = new Proxy(new URLSearchParams(window.location.search), {
        // @ts-ignore
        get: (searchParams, prop) => searchParams.get(prop),
      });
      // @ts-ignore
      let authCode = params.code;
      // @ts-ignore
      let stateValue = params.state;
      if (stateValue == "foobargoogle") {
        console.log("ran2");
        setRender(2);
      }
    } else {
      console.log("No Code");
    }
  }, []);

  //=============================================================================
  //  MICROSOFT
  //=============================================================================
  useEffect(() => {
    //Microsoft
    if (window.location.href.includes("code")) {
      const params = new Proxy(new URLSearchParams(window.location.search), {
        // @ts-ignore
        get: (searchParams, prop) => searchParams.get(prop),
      });
      // @ts-ignore
      let authCode = params.code;
      // @ts-ignore
      let stateValue = params.state;
      if (stateValue == "foobarmicrosoft") {
        MicrosoftAPISignUp(authCode);
      }
    } else {
      console.log("No Code");
    }
  }, []);

  //=============================================================================
  // AUTH0
  //=============================================================================

  //# Function to save inputs w/o refresh
  const noRefresh = (event) => {
    event.preventDefault();
  };

  //=============================================================================
  // React Hook
  //=============================================================================

  const isDesktop = useMediaQuery("(max-width: 800px)");

  // Information Captured
  const yourName = useInput("New Customer");
  const emailAddress = useInput("");
  const yourMessage = useInput("Landing Page Conversion");
  // Tells us whether the user has submitted or not
  const [submitted, setSubmitted] = useState(false);

  // Notion Api w/ SheetMonkey to save a users signup information
  useEffect(() => {
    if (submitted == true) {
      function postSignUp() {
        var templateParams = {
          Email: emailAddress.value,
          Time: moment().format("YYYY-MM-DD HH:mm:ss"),
        };

        fetch("https://api.sheetmonkey.io/form/vpjvvZhxWdj891qo5GDgvc", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(templateParams),
        }).then((result) => {
          // Handle the result
        });
      }

      postSignUp();
    }
  }, [submitted]);

  // UI Code
  return (
    <ParentWrapper>
      {isDesktop ? (
        <Wrapper>
          <ContentWrapper>
            <Background2>
              {submitted == false ? (
                <ParentVStack>
                  {render == 2 ? (
                    <Rectangle2>
                      <WhiteText>
                        Our team will send an email once your account is setup
                        in the next 24 hours
                      </WhiteText>
                    </Rectangle2>
                  ) : (
                    <div>
                      <H1Text>Lets Get Started</H1Text>
                      <InsideVStack>
                        <AuthVStack>
                          <ButtonIMG
                            src={signinwithgoogleprod}
                            onClick={() =>
                              window.open(
                                `https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?nonce=12345&access_type=${google_access_type}&client_id=${google_client_id}&scope=${google_scope}&redirect_uri=${google_redirect_uri}&state=${google_state}&response_type=${google_response_type}`,
                                "_self"
                              )
                            }
                          />
                          <ButtonIMG
                            src={signinwithmicrosoftprod}
                            onClick={() =>
                              window.open(
                                `https://login.microsoftonline.com/common/oauth2/v2.0/authorize/?client_id=${microsoft_client_id}&response_type=${microsoft_response_type}&redirect_uri=${microsoft_redirect_uri}&scope=${microsoft_scope}&state=${microsoft_state}`,
                                "_self"
                              )
                            }
                          />
                        </AuthVStack>
                        <HStackOr>
                          <OrRectangle />
                          <MainText>Or</MainText>
                          <OrRectangle />
                        </HStackOr>
                        <SmallVStack>
                          <TextInputVStack>
                            <TextInputRegularText>
                              Email Address
                            </TextInputRegularText>
                            <form onSubmit={noRefresh}>
                              <InputRectangle>
                                <Input placeholder="" />
                              </InputRectangle>
                            </form>
                          </TextInputVStack>
                          <TextInputVStack>
                            <TextInputRegularText>
                              Password
                            </TextInputRegularText>
                            <form onSubmit={noRefresh}>
                              <InputRectangle>
                                <Input placeholder="" type="password" />
                              </InputRectangle>
                            </form>
                          </TextInputVStack>
                        </SmallVStack>
                        <SubmitButton
                          getStartedButtonActive={getStartedButtonActive}
                        >
                          {spinnerActivated ? (
                            <div></div>
                          ) : (
                            <ButtonHStack>
                              <ButtonText
                                getStartedButtonActive={getStartedButtonActive}
                              >
                                Get Started
                              </ButtonText>
                              <ButtonWhiteArrowWrapper></ButtonWhiteArrowWrapper>
                            </ButtonHStack>
                          )}
                        </SubmitButton>
                      </InsideVStack>{" "}
                    </div>
                  )}
                </ParentVStack>
              ) : (
                <ParentVStack>
                  {render == 2 ? (
                    <Rectangle2>
                      <WhiteText>
                        Our team will send an email once your account is setup
                        in the next 24 hours
                      </WhiteText>
                    </Rectangle2>
                  ) : (
                    <div>
                      <H1Text>Lets Get Started</H1Text>
                      <InsideVStack>
                        <AuthVStack>
                          <ButtonIMG
                            src={signinwithgoogleprod}
                            onClick={() =>
                              window.open(
                                `https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?nonce=12345&access_type=${google_access_type}&client_id=${google_client_id}&scope=${google_scope}&redirect_uri=${google_redirect_uri}&state=${google_state}&response_type=${google_response_type}`,
                                "_self"
                              )
                            }
                          />
                          <ButtonIMG
                            src={signinwithmicrosoftprod}
                            onClick={() =>
                              window.open(
                                `https://login.microsoftonline.com/common/oauth2/v2.0/authorize/?client_id=${microsoft_client_id}&response_type=${microsoft_response_type}&redirect_uri=${microsoft_redirect_uri}&scope=${microsoft_scope}&state=${microsoft_state}`,
                                "_self"
                              )
                            }
                          />
                        </AuthVStack>
                        <HStackOr>
                          <OrRectangle />
                          <MainText>Or</MainText>
                          <OrRectangle />
                        </HStackOr>
                        <SmallVStack>
                          <TextInputVStack>
                            <TextInputRegularText>
                              Email Address
                            </TextInputRegularText>
                            <form onSubmit={noRefresh}>
                              <InputRectangle>
                                <Input placeholder="" />
                              </InputRectangle>
                            </form>
                          </TextInputVStack>
                          <TextInputVStack>
                            <TextInputRegularText>
                              Password
                            </TextInputRegularText>
                            <form onSubmit={noRefresh}>
                              <InputRectangle>
                                <Input placeholder="" type="password" />
                              </InputRectangle>
                            </form>
                          </TextInputVStack>
                        </SmallVStack>
                        <SubmitButton
                          getStartedButtonActive={getStartedButtonActive}
                        >
                          {spinnerActivated ? (
                            <div></div>
                          ) : (
                            <ButtonHStack>
                              <ButtonText
                                getStartedButtonActive={getStartedButtonActive}
                              >
                                Get Started
                              </ButtonText>
                              <ButtonWhiteArrowWrapper></ButtonWhiteArrowWrapper>
                            </ButtonHStack>
                          )}
                        </SubmitButton>
                      </InsideVStack>
                    </div>
                  )}
                </ParentVStack>
              )}
            </Background2>
          </ContentWrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <ContentWrapper>
            <Background1>
              <StyledIMG1
                src={left}
                alt="Discover the true impact of traffic channels of website conversions"
              />
            </Background1>
            <Background2>
              <SmallVVStack>
                <LogoHStack></LogoHStack>
                <CopyrightText>
                  Copyright Banabo Labs Inc. 2022. All rights reserved
                </CopyrightText>
                <CopyrightText2>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </CopyrightText2>
              </SmallVVStack>
              {submitted == false ? (
                <ParentVStack>
                  {render == 2 ? (
                    <Rectangle2>
                      <WhiteText>
                        Our team will send an email once your account is setup
                        in the next 24 hours
                      </WhiteText>
                    </Rectangle2>
                  ) : (
                    <div>
                      <H1Text>Lets Get Started</H1Text>
                      <InsideVStack>
                        <AuthVStack>
                          <ButtonIMG
                            src={signinwithgoogleprod}
                            onClick={() =>
                              window.open(
                                `https://accounts.google.com/o/oauth2/auth?approval_prompt=force&nonce=12345&access_type=${google_access_type}&client_id=${google_client_id}&scope=${google_scope}&redirect_uri=${google_redirect_uri}&state=${google_state}&response_type=${google_response_type}`,
                                "_self"
                              )
                            }
                          />
                          <ButtonIMG
                            src={signinwithmicrosoftprod}
                            onClick={() =>
                              window.open(
                                `https://login.microsoftonline.com/common/oauth2/v2.0/authorize/?client_id=${microsoft_client_id}&response_type=${microsoft_response_type}&redirect_uri=${microsoft_redirect_uri}&scope=${microsoft_scope}&state=${microsoft_state}`,
                                "_self"
                              )
                            }
                          />
                        </AuthVStack>
                        <HStackOr>
                          <OrRectangle />
                          <MainText>Or</MainText>
                          <OrRectangle />
                        </HStackOr>
                        <SmallVStack>
                          <TextInputVStack>
                            <TextInputRegularText>
                              Email Address
                            </TextInputRegularText>
                            <form onSubmit={noRefresh}>
                              <InputRectangle>
                                <Input placeholder="" />
                              </InputRectangle>
                            </form>
                          </TextInputVStack>
                          <TextInputVStack>
                            <TextInputRegularText>
                              Password
                            </TextInputRegularText>
                            <form onSubmit={noRefresh}>
                              <InputRectangle>
                                <Input placeholder="" type="password" />
                              </InputRectangle>
                            </form>
                          </TextInputVStack>
                        </SmallVStack>
                        <SubmitButton
                          getStartedButtonActive={getStartedButtonActive}
                        >
                          {spinnerActivated ? (
                            <div></div>
                          ) : (
                            <ButtonHStack>
                              <ButtonText
                                getStartedButtonActive={getStartedButtonActive}
                              >
                                Get Started
                              </ButtonText>
                              <ButtonWhiteArrowWrapper></ButtonWhiteArrowWrapper>
                            </ButtonHStack>
                          )}
                        </SubmitButton>
                      </InsideVStack>
                    </div>
                  )}
                </ParentVStack>
              ) : (
                <VStack>
                  <Text>Sign up for free</Text>
                  <SubVStack>
                    <SmallTextGray>
                      Turn website traffic into sales
                    </SmallTextGray>
                    <SmallTextBlack>
                      We're slightly backed up at the moment.
                    </SmallTextBlack>
                    <SmallTextBlack>
                      So you've been added to a short waitlist
                    </SmallTextBlack>
                  </SubVStack>
                  <Form onSubmit={noRefresh}>
                    <StyledButton>We'll get you setup soon!</StyledButton>
                  </Form>
                </VStack>
              )}
            </Background2>
          </ContentWrapper>
        </Wrapper>
      )}
    </ParentWrapper>
  );
}

const CopyrightText = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 16px;
  color: #ffffff;
  @media (max-width: 1200px) {
    padding-right: 100px;
    width: 400px;
    text-align: left;
  }
`;

const BanaboText = styled.div`
  font-size: 26px;
  line-height: 32px;
  color: #252531;
  font-family: "ProximaNovaBold";
`;

const CopyrightText2 = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  @media (max-width: 1200px) {
    padding-right: 100px;
    width: 400px;
    text-align: left;
  }
`;

const Wrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  min-height: 100%;
  min-width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: #21212b;
`;

const Fixedimg = styled.img``;

const ContentWrapper = styled.div`
  text-align: center;
  display: flex;
  @media (max-width: 900px) {
    display: grid;
  }
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

const SmallVVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: left;
  align-items: left;
  padding-top: 800px;
  padding-left: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: left;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: left;
  align-items: left;
  text-align: left;
`;

const VStack2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: left;
  align-items: left;
  text-align: left;
`;

const SubVStack = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 6px;
`;

const Text = styled.div`
  font-family: "ProximaNovaBold";
  font-size: 40px;
  color: #000000;
`;

const SmallTextGray = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 16px;
  color: #8d8c8f;
`;

const StyledButton = styled.button`
  font-family: "ProximaNovaSemibold";
  font-size: 16px;
  color: #ffffff;
  border: none;
  background: linear-gradient(88.63deg, #1bcdf4 6.03%, #1b8cf4 93.77%);
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  width: 281px;
  height: 45px;
  @media (max-width: 900px) {
    width: 70vw;
  }

  :hover {
    background: linear-gradient(88.63deg, #17b9dd 6.03%, #1980de 93.77%);
  }
`;

const SmallTextBlack = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 16px;
  color: #000000;
`;

const Background1 = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: linear-gradient(39.83deg, #1bcdf4 6.97%, #1b8cf4 94.52%);
  @media (max-width: 900px) {
    display: none;
  }
`;

const Background2 = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  background: #5790ff;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Input1 = styled.input`
  border: none;
  color: #7f848d;
  width: 258px;
  height: 30px;
  font-size: 18px;
  font-family: "ProximaNovaRegular";
  background: #ffffff;
  border-radius: 5px;

  transition: all 0.2s ease 0s;
  padding: 6px 10px;
  outline: 2px solid #8d8c8f;
  @media (max-width: 900px) {
    width: 65.5vw;
  }

  :focus {
    box-shadow: 0 0 1pt 1pt #40a3ff;
  }
`;

const Input11 = styled.input`
  border: none;
  color: #7f848d;
  width: 258px;
  height: 30px;
  font-size: 18px;
  font-family: "ProximaNovaRegular";
  background: #ffffff;
  border-radius: 5px;

  transition: all 0.2s ease 0s;
  padding: 6px 10px;
  outline: 2px solid #8d8c8f;
  @media (max-width: 900px) {
    width: 64.5vw;
  }

  :focus {
    box-shadow: 0 0 1pt 1pt #40a3ff;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTextWrapper = styled.div`
  display: grid;
  grid-gap: 5px;
  text-align: center;
`;

const AbsoluteIMG = styled.img`
  position: absolute;
  top: -10px;
  left: 0px;
`;

const StyledIMG1 = styled.img``;

const StyledIMG2 = styled.img`
  padding-top: 40px;
  width: 80%;
  height: 80%;
  display: none;

  @media (max-width: 700px) {
    display: block;
  }
`;

const RenderWrapper = styled.div``;

const Rectangle2 = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3vh;
  padding-right: 4vh;
`;

const WhiteText = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 30.5px;
  color: #ffffff;
  width: 600px;
  line-height: 40px;
`;

const DumbStuffHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 74vh;
  margin-left: 2vw;
  margin-right: 7vw;
  @media (min-width: 900px) and (max-width: 1600px) and (min-height: 720px) {
    margin-top: 70vh;
    margin-left: 2vw;
    margin-right: 7vw;
  }

  @media (min-width: 900px) and (max-width: 1600px) and (max-height: 700px) {
    margin-top: 70vh;
  }

  @media (min-width: 1700px) {
    margin-top: 77vh;
    margin-left: 2vw;
    margin-right: 15vw;
  }
  @media (min-width: 2300px) {
    margin-top: 77vh;
    margin-left: 2vw;
    margin-right: 23vw;
    gap: 80px;
  }
`;

const DumbStuffText1 = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 14.5px;
  color: #ffffff;
`;

const DumbStuffText = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 14.5px;
  color: #ffffff;
  cursor: pointer;
`;

const ButtonIMG = styled.img`
  height: 58px;
  width: auto;
  cursor: pointer;
`;

const AlterIMG = styled.img`
  padding-top: 30px;
  padding-left: 40px;
  height: 70px;
  width: auto;
`;

const SpinnerIMG = styled.img`
  animation: spin 2s linear infinite;
  width: 25px;
  height: 25px;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ButtonWrapper = styled.div`
  opacity: 0;
`;

const SmallVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ParentWrapper = styled.div`
  position: relative;
  background-color: #5790ff;
  height: 100vh;
  width: 100vw;
`;

const InsideVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Rectangle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 12vh;
  padding-right: 14vh;
`;

const ParentVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: left;
  text-align: left;
  padding-top: 30px;
  padding-left: 110px;
  position: absolute;
`;

const AuthVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const H1Text = styled.div`
  font-size: 26px;
  color: #ffffff;
  font-family: "ProximaNovaBold";
  padding-bottom: 30px;
`;

const BorderBoxWhite = styled.button`
  width: 280px;
  height: 62px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.001);
  :hover {
    background: #5790ff;
  }
`;

const HStackBorderBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: left;
  align-items: center;
  text-align: center;
  padding-left: 15px;
`;

const HStackBorderBox2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: left;
  align-items: center;
  text-align: center;
  padding-left: 15px;

  pointer-events: none;
`;

const MainText = styled.div`
  font-size: 20px;
  font-family: "ProximaNovaSemiBold";
  color: #ffffff;
`;

const HStackOr = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const OrRectangle = styled.div`
  width: 114px;
  height: 2px;
  background: #ffffff;
`;

const TextInputVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const TextInputRegularText = styled.div`
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  font-family: "ProximaNovaRegular";
`;

const Input = styled.input`
  border: none;
  width: 300px;
  font-size: 16px;
  line-height: 19px;
  font-family: "ProximaNovaRegular";
  background-color: transparent;
  color: #ffffff;
  :focus {
    outline: none;
  }
  padding-left: 10px;
`;

const InputRectangle = styled.div`
  width: 283px;
  height: 41px;
  background: #5790ff;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SubmitButton = styled.div`
  width: 283px;
  height: 39px;
  left: 578px;
  top: 734px;
  background: ${(props) =>
    props.getStartedButtonActive ? "#3979F3" : "rgba(57, 121, 243, 0.7)"};
  cursor: ${(props) => (props.getStartedButtonActive ? "pointer" : "auto")};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const ButtonHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

const ButtonText = styled.div`
  font-size: 18px;
  color: ${(props) =>
    props.getStartedButtonActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.7)"};
  font-family: "ProximaNovaBold";
`;

const ButtonWhiteArrowWrapper = styled.div`
  padding-top: 1.2px;
`;
