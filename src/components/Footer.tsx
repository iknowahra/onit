import styled from 'styled-components';

import OnitLogo from '../assets/logo.webp';

import { useBranch } from '../contexts/BranchContext';
import information from '../assets/text/information';
import NaverLogo from './NaverLogo';

const Wrapper = styled.div`
  width: 100%;
  height: 20vh;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.grey};
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 780px) {
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

  @media (max-width: 1080px) {
    width: 90%;
    height: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div,
    span {
      font-size: 0.8rem !important;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 780px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Logo = styled.div`
  width: 25%;
  img {
    width: 100%;
  }
  @media (max-width: 780px) {
    img {
      width: auto;
      height: 4rem;
    }
  }
  @media (max-width: 344px) {
    /* 갤럭시 폴드 */
    display: none;
  }
`;
const Copyright = styled.div`
  width: 90%;
  margin: 0 2rem;

  @media (max-width: 780px) {
    margin: 0;
  }
`;

const PolicySns = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.sub};

  @media (max-width: 780px) {
    align-items: center;
    justify-content: start;
    border-bottom: none;
  }
`;

const Policy = styled.div`
  span {
    display: block;
  }
  @media (max-width: 780px) {
    span{
      font-size: 1.1rem !important;
    }
  }
`;

// NaverLogo 컴포넌트를 스타일링합니다.
const StyledNaverLogo = styled.span`
  @media (max-width: 780px) {
    display: none;
  }
`;

const Address = styled.div`
  padding: 0.8rem 0;
  width: 100%;
  span {
    display: flex;
  }
  @media (max-width: 780px) {
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
      content: '|';
      margin-left: 5px;
    }
  }
  @media (max-width: 780px) {
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
      content: '|';
      margin: 0 5px !important;
    }
  }
  @media (max-width: 1080px) {
    /* display: none; */
    a {
      display: none;
    }
  }
`;

const DisplayFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 1.2rem;

  @media (max-width: 780px) {
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }
`;
const BranchLabel = styled.a`
  font-weight: bolder !important;
  @media (max-width: 780px) {
    display: none;
  }
`;

function Footer() {
  const [_, setBranch] = useBranch();
  const choose = {
    "/": {
      label: "지점을 선택하세요",
      path: "",
    },
  }

  const branches = Object.keys(information);
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
                <span>온잇 공유오피스 All right reserved.</span>
              </Policy>
              <StyledNaverLogo>
                <NaverLogo url="https://naver.me/GXAEbpo8" />
              </StyledNaverLogo>
            </PolicySns>
            <Address>
              <Branch>
                {branches.map((branch) => {
                  if (branch !== '/') {
                    return (
                      branch !== '/' && (
                        <a key={branch} onClick={() => setBranch(branch)}>
                          {information[branch].name}
                        </a>
                      )
                    );
                  }
                  return (
                    information[branch].address &&
                    branch == branch && (
                      <BranchLabel key={branch} onClick={() => setBranch(branch)}>
                        {information[branch].name}
                      </BranchLabel>
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
