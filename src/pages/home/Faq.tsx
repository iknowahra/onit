import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Subject from "../../components/Subject";
import photo from "../../assets/faq.png";
import fagInfo, { iFaqItem } from "../../assets/text/faq";
import { useBranch } from "../../contexts/BranchContext";

interface AcordianProps {
  no: string;
  selected: string;
}

const Wrapper = styled.div`
  width: 100%;
`;

const Inner = styled.div`
  width: 80%;
  margin: auto;
  padding: 2rem 0;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

const Contents = styled.div`
  width: 45%;
  min-height: 75vh;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  :first-child {
    margin-right: 1rem;
    width: 55%;
  }

  @media (max-width: 780px) {
    width: 90%;
    margin: auto;
    min-height: 0 !important;
    height: 50% !important;
    :first-child {
      width: 90%;
      /* height: auto; */
      margin: auto;
    }
  }
`;

const Acordian = styled.div<AcordianProps>`
  border: 1px solid
    ${({ no, selected, theme }) =>
    no === selected ? theme.color.lightMain : theme.color.grey};
  border-radius: 0.4rem;
  padding: 0.5rem 1.2rem;
  margin-bottom: 0.7rem;
  width: 100%;
`;

const Title = styled.div<AcordianProps>`
  font-size: 0.9rem;
  color: ${({ no, selected, theme }) =>
    no === selected ? theme.color.main : theme.color.charcoal};
  ::after {
    font-family: "FontAwesome";
    content: " ${({ no, selected }) => (no === selected ? "\f105" : "\f107")}";
    float: right;
  }

  @media (max-width: 780px) {
    font-size: 1.1rem;
  }
`;

const Details = styled.p<AcordianProps>`
  margin-top: 1rem;
  display: ${({ no, selected }) => (no === selected ? "show" : "none")};

  @media (max-width: 780px) {
    font-size: 1rem;
    line-height: 1.9rem;
  }
`;

const AwardImage = styled.div`
  position: relative;

  img {
    width: 25rem;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 780px) {
    display: none;
  }
`;

const AwardTitle = styled.div`
  margin: 2rem 0 1rem 0;
  font-size: 1.5rem;
  font-weight: bolder;
  color: ${({ theme }) => theme.color.main};
  @media (max-width: 780px) {
    display: none;
  }
`;

const AwardDetails = styled.p`
  text-align: center;
  margin-bottom: 1.5rem;
  width: 25rem;
  max-width: 100%;
  @media (max-width: 780px) {
    display: none;
  }
`;

const AwardButton = styled.a`
  border: 2px solid ${({ theme }) => theme.color.sub};
  padding: 0.5rem 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.charcoal};
  text-transform: uppercase;
  background-color: white;
  border-radius: 4px;
  @media (max-width: 780px) {
    font-size: 1rem;
    padding: 0.2rem 0.5rem;
  }

  :hover {
    background-color: ${({ theme }) => theme.color.main};
    color: white;
    border: transparent;
  }
`;

function Fnq() {
  const [selected, setSelected] = useState("fnq1");
  const [branch, _] = useBranch();

  const handleScroll = (id: number | string) => {
    const target = document.getElementById("home" + id); // 대상 요소 찾기
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Wrapper id="home2">
      <Inner>
        <Subject
          main="서비스 이용이 궁금하신가요?"
        />
        <Container>
          <Contents>
            {fagInfo?.map((fnq, index) => (
              <Acordian
                key={index}
                onClick={() => setSelected(fnq.no)}
                no={fnq.no}
                selected={selected}
              >
                <Title no={fnq.no} selected={selected}>
                  {fnq.title}
                </Title>
                <Details no={fnq.no} selected={selected}>
                  {fnq.details}
                </Details>
              </Acordian>
            ))}
          </Contents>
          <Contents>
            <AwardImage>
              <img src={photo} alt="award" />
            </AwardImage>
            <AwardTitle>ON!T이 대표님들을 응원합니다</AwardTitle>
            <AwardDetails>{`법인 설립을 통해 새로운 목표를 세우고자 계획하시는 대표님들!
새 사업을 시작하기 위해 합리적인 가격의 상주사무실을 구하시는 대표님들!
온잇은 모든 대표님들의 힘찬 날개짓에 작은 바람이 되어 드리겠습니다!
`}</AwardDetails>
            <AwardButton onClick={() => handleScroll(3)}>찾아오시는 길</AwardButton>
          </Contents>
        </Container>
      </Inner>
    </Wrapper>
  );
}

export default Fnq;
