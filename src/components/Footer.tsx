import React from "react";
import styled from "styled-components";

import OnitLogo from "../assets/logo.png";
import landingInfo from "../assets/text/landing";

import { useBranch } from "../contexts/BranchContext";
import about from "../assets/text/information";
import NaverLogo from "./NaverLogo";

const Wrapper = styled.div`
  width: 100%;
  height: 20vh;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.grey};
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 8vh;
  }
`;

const Inner = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;

  div,
  span {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;

    div,
    span {
      font-size: 1rem;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Logo = styled.div`
  width: 25%;
  img {
    width: 100%;
  }

  @media (max-width: 344px) {
    /* 갤럭시 폴드 */
    display: none;
  }
`;
const Copyright = styled.div`
  width: 90%;
  margin: 0 2rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const PolicySns = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.sub};

  @media (max-width: 768px) {
    align-items:center;
    justify-content: start;
    border-bottom : none;
  }
`;

const Policy = styled.div`
  span {
    display: block;
  }
`;

// NaverLogo 컴포넌트를 스타일링합니다.
const StyledNaverLogo = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Address = styled.div`
  padding: 0.8rem 0;
  width: 100%;
  span {
    display: flex;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Branch = styled.div`
  a {
    cursor: pointer;
  }

  a:not(:last-child) {
    margin-right: 5px;
    &::after {
      content: "|";
      margin-left: 5px;
    }
  }
  @media (max-width: 768px) {
    a {
      font-size: 0.8rem !important;
      margin: 0 !important;
    }
  }
`;

const BranchInfo = styled.span`
  a:not(:last-child) {
    margin-right: 5px;
    &::after {
      content: "|";
      margin: 0 5px !important;
    }
  }
  @media (max-width: 768px) {
    font-size: 0.7rem !important;
    a {
      font-size: 0.8rem !important;
    }
  }
`;

const DisplayFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 1.2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }
`;
const BranchLabel = styled.a`
  font-weight: bolder !important;
  @media (max-width: 768px) {
    display: none;
  }
`;

function Footer() {
  const [_, setBranch] = useBranch();

  return (
    <Wrapper>
      <Inner>
        <Contents>
          <Logo>
            <img src={OnitLogo} alt="onit logo" />
          </Logo>
          <Copyright>
            <PolicySns>
              <Policy>
                <span>{landingInfo.footer.copyright}</span>
              </Policy>
              <StyledNaverLogo>
                <NaverLogo url={landingInfo.footer.naver} />
              </StyledNaverLogo>
            </PolicySns>
            <Address>
              <Branch>
                {about.map(({ name, address, phone, tel, map }, branch) => {
                  if (branch < 0) {
                    return (
                      branch < 0 && (
                        <a key={branch} onClick={() => setBranch(branch)}>
                          {name}
                        </a>
                      )
                    );
                  }
                  return (
                    address &&
                    branch == branch && (
                      <DisplayFlex key={branch}>
                        <BranchLabel onClick={() => setBranch(branch)}>
                          {name}
                        </BranchLabel>
                        <a href={map} target="_blank">
                          {address}
                        </a>
                        <BranchInfo>
                          <a href={"tel:" + phone.replace(/\D/g, '')}>Tel : {phone}</a>
                          <a href={"tel:" + tel.replace(/\D/g, '')}>{tel}</a>
                        </BranchInfo>
                      </DisplayFlex>
                    )
                  );
                })}
              </Branch>
            </Address>
          </Copyright>
        </Contents>
      </Inner>
    </Wrapper>
  );
}

export default Footer;
