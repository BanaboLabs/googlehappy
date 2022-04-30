import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function FullV2TermsPage() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 5vw;
  margin-right: 5vw;
`;

const BoldText = styled.div`
  font-family: "ProximaNovaBold";
  font-size: 32px;
  color: #000000;
  text-align: left;
`;

const RegularText = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 14px;
  color: #808080;
  line-height: 20px;
  text-align: left;
`;
