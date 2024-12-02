import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useBranch } from "../../contexts/BranchContext";

import serviceInfo from "../../assets/text/service";
import information from "../../assets/text/information";

import photo11 from "../../assets/1/officeMain03.webp";
import photo12 from "../../assets/1/officeMain01.webp";
import photo13 from "../../assets/1/officeMain04.webp";

import photo21 from "../../assets/2/studyformen.webp";
import photo22 from "../../assets/2/pt_main01.webp";
import photo23 from "../../assets/2/officeMain02.webp";

import photo31 from '../../assets/3/office07.webp';
import photo32 from '../../assets/3/printer.webp';
import photo33 from '../../assets/3/share.webp';

import photo41 from '../../assets/4/office05.webp';
import photo42 from '../../assets/4/office11.webp';
import photo43 from '../../assets/4/office18.webp';

import photo51 from '../../assets/5/chilgok-op1.webp';
import photo52 from '../../assets/5/chilgok-op2.webp';
import photo53 from '../../assets/5/chilgok-op3.webp';

import photo71 from '../../assets/vision1.webp';
import photo72 from '../../assets/vision2.webp';
import photo73 from '../../assets/vision3.webp';



interface HeaderProps {
  main: string;
  sub: string;
}
interface ContentsProps {
  index: number;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 780px) {
    height: auto;

  }
`;

const Title = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    font-size: 2rem;
    margin-bottom: 0.4rem;
  }
  p {
    font-size: 1rem;
  }
  @media (max-width: 780px) {
    margin-bottom: 1rem;
    div {
      font-size: 1.7rem;
      margin-bottom: 0.4rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const Inner = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  background-color: ${({ theme }) => theme.color.lightGrey};

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

const Contents = styled.div<ContentsProps>`
  width: 33.33333%;
  display: flex;
  flex-direction: ${({ index }) =>
    !!(Number(index) % 2) ? "column" : "column-reverse"};
  & > img {
    height: 50%;
    width: 100%;
    object-fit: fit;
  }

  @media (max-width: 780px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

const HeaderWrapper = styled.div`
  height: 50%;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  h3 {
    position: relative;
    padding: 0.8rem 0;
    margin-bottom: 1rem;
    ::after {
      content: "";
      width: 3rem;
      height: 0.2rem;
      background-color: ${({ theme }) => theme.color.main};
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  p {
    font-size: 1rem;
  }

  @media (max-width: 780px) {
    width: 80%;
    height: 100%;
    padding: 3.5rem 0;

    h3 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.8rem;
    }
  }
`;

function Header({ main, sub }: HeaderProps) {
  return (
    <HeaderWrapper>
      <h3>{main}</h3>
      <p>{sub}</p>
    </HeaderWrapper>
  );
}

function Service() {
  const [branch, _] = useBranch();
  const [name, setName] = useState("");
  const photos: { [key: string]: string[] } = {
    "onedang": [photo11, photo12, photo13],
    "pyeongtaek": [photo21, photo22, photo23],
    "yeongdeungpo": [photo31, photo32, photo33],
    "wonju": [photo41, photo42, photo43],
    "daegu": [photo51, photo52, photo53],
    "anyang": [photo71, photo72, photo73]
  };

  useEffect(() => {
    const office = information[branch];
    office ? setName(office.name) : setName("");
  }, [branch]);

  return (
    <Container id="menu2">
      <Title>
        <div>{name} 프리미엄 서비스</div>
        <p>대면 | 비대면 계약 모두 가능하며 연중무휴 상담이 가능합니다</p>
      </Title>
      <Inner>
        {serviceInfo[branch as keyof typeof serviceInfo]?.map(({ main, sub }, index) => (
          <Contents key={index} index={index}>
            <Header main={main} sub={sub} />
            <img src={photos[branch][index]} alt={main} />
          </Contents>
        ))}
      </Inner>
    </Container>
  );
}

export default Service;
