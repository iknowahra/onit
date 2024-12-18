import { useEffect, useState } from "react";
import styled from "styled-components";

import logo from "../../assets/logoWhite.webp";
import office_onedang from "../../assets/1/officeMain01.webp";
import office_pyeongtaek from "../../assets/2/pt_main01.webp";
import office_yeongdeungpo from "../../assets/3/officeMain01.webp";
import office_wonju from "../../assets/4/wj_main01.webp";
import office_daegu from "../../assets/5/officeLanding.webp";
import office_bugae1 from "../../assets/6/bugae3.webp";
import office_bugae2 from "../../assets/6/bugae4.webp";
import office_anyang from "../../assets/8/anyang_main.webp";

import { useBranch } from "../../contexts/BranchContext";
import info, { iIntroDetail } from "../../assets/text/landing";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.sub};
  @media (max-width: 780px) {
    height: 70vh;
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 65%;

  @media (max-width: 780px) {
    height: 75%;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 70%;
  }
`;

const Inner = styled.div`
  width: 80%;
  height: 35%;
  margin: auto;
  display: flex;

  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: 25%;
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 780px) {
    flex-direction: row;
    align-items: center;
    margin: auto;
  }
`;

const Logo = styled.div`
  width: 30%;
  img {
    width: 100%;
  }

`;
const Desc = styled.div`
  width: 90%;
  margin: 0 2rem;

  @media (max-width: 780px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
    margin: 0;
  }

  > h1 {
    color: ${({ theme }) => theme.color.grey};
    font-weight: bolder;

    @media (max-width: 780px) {
      font-size: 1.2rem !important;
      color: #ffffff;
      line-height: 1rem;
    }
  }

  > p {
    color: ${({ theme }) => theme.color.grey};
    font-size: 1.1rem;
    @media (max-width: 780px) {
      display: none;
    }
  }

  > div {
    color: ${({ theme }) => theme.color.lightGrey} !important;
    font-weight: bold;
    > a {
      margin-left: 3px;
      border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};
    }
    @media (max-width: 780px) {
      font-size: 1rem;
    }
  }
`;

const ScrollDown = styled.a`
  position: absolute;
  width: 19rem;
  left: 50%;
  margin-left: calc(-19rem / 2); /* width의 50% */
  text-align: center;
  bottom: 1rem;
  padding: 3px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.grey};
  border-radius: 10rem;
  animation: scroll-down 1.5s infinite ease-in-out;
  cursor: pointer;
  z-index: 999;

  @media (max-width: 780px) {
    display: none;
  }

  @keyframes scroll-down {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px); /* 아래로 10px 이동 */
    }
  }

  @media (max-width: 780px) {
    bottom: 1.5rem;
  }
`;

const BugaeImage = styled.img`
  width: 50%;
  height: 100%;
  
  &:nth-child(2) {
    @media (max-width: 780px) {
      display: none;
    }
  }
  
  @media (max-width: 780px) {
    width: 100%;
  }
`;

function Landing() {
  const [branch, _] = useBranch();
  const [currBranch, setBranch] = useState<iIntroDetail>();
  const branchImages: Record<string, string> = {
    onedang: office_onedang,
    pyeongtaek: office_pyeongtaek,
    yeongdeungpo: office_yeongdeungpo,
    wonju: office_wonju,
    daegu: office_daegu,
    bugae1: office_bugae1,
    bugae2: office_bugae2,
    anyang: office_anyang,
  };

  const getBranchImg = () => {
    if (branch === 'bugae') {
      return <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <BugaeImage src={branchImages['bugae1']} alt="onit branch bugae1" />
        <BugaeImage src={branchImages['bugae2']} alt="onit branch bugae2" />
      </div>
    }
    return branchImages[branch] ? <img src={branchImages[branch]} alt={`onit branch ${branch}`} /> : <></>
  };

  const handleScroll = (id: number) => {
    const target = document.getElementById("menu" + id); // 대상 요소 찾기
    if (target) {
      const targetPosition = target.offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth", // 부드러운 스크롤
      });
    }
  };

  useEffect(() => {
    console.log(branch);
    setBranch(info.intro[branch]);
  }, [branch]);


  return (
    <Wrapper id="menu0" key={branch}>
      <ImageWrapper>
        {getBranchImg()}
      </ImageWrapper>
      <Inner>
        <Contents>
          <Logo>
            <img src={logo} alt="onit logo" />
          </Logo>
          <Desc>
            <h1>{currBranch?.title}</h1>
            <p>
              {currBranch?.detail}
            </p>
            <div>
              <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
              상담문의전화 :<a href={`tel:${currBranch?.tel.replace(/\D/g, '')}`}>{currBranch?.tel}</a>
            </div>
          </Desc>
          <ScrollDown onClick={() => handleScroll(1)}>
            {currBranch?.scroll}
          </ScrollDown>
        </Contents>
      </Inner>
    </Wrapper>
  );
}

export default Landing;
