import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import priceInfo, { iPriceDetail } from '../../assets/text/price';

import Subject from '../../components/Subject';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import officePhoto11 from '../../assets/1/officeMain03.webp';
import officePhoto12 from '../../assets/1/officeMain02.webp';
import officePhoto13 from '../../assets/1/officeMain01.webp';
import officePhoto14 from '../../assets/1/officeMain05.webp';

import officePhoto21 from '../../assets/2/officeMain02.webp';
import officePhoto22 from '../../assets/2/officeMain02.webp';
import officePhoto23 from '../../assets/2/officeMain02.webp';
import officePhoto24 from '../../assets/2/printer.webp';

import officePhoto31 from '../../assets/3/officeblock01.webp';
import officePhoto32 from '../../assets/3/office06.webp';
import officePhoto33 from '../../assets/3/officeblock02.webp';
import officePhoto34 from '../../assets/3/office08.webp';

// 비상주 사무실
import officePhoto41 from '../../assets/4/nonOffice1yr.webp'; // 6개월
import officePhoto42 from '../../assets/4/nonOffice1yr.webp'; // 1년
import officePhoto43 from '../../assets/4/nonOffice2yr.webp'; // 2년

import officePhoto51 from '../../assets/5/chilgok_price2.webp'; // 6개월
import officePhoto52 from '../../assets/5/chilgok_price3.webp'; // 1년
import officePhoto53 from '../../assets/5/chilgok_price4.webp'; // 2년

// bugae
import officePhoto61 from '../../assets/6/bugae1.webp'; // 6개월
import officePhoto62 from '../../assets/6/bugae2.webp'; // 1년
import officePhoto63 from '../../assets/6/bugae3.webp'; // 2년
import officePhoto64 from '../../assets/6/bugae4.webp'; // 스터디카페

import officePhoto81 from '../../assets/8/anyang_office.webp'; // 상주
import officePhoto82 from '../../assets/8/anyang_laptop.webp'; // 비상주
import officePhoto83 from '../../assets/8/anyang_meeting.webp'; // 회의실
import officePhoto84 from '../../assets/8/anyang_printer.webp'; // 프린터



import studyPhoto11 from '../../assets/1/studyMain01.webp';
import studyPhoto12 from '../../assets/1/studyMain02.webp';
import studyPhoto13 from '../../assets/1/studyMain03.webp';

import studyPhoto21 from '../../assets/2/multiroom.webp';
import studyPhoto22 from '../../assets/2/openroom.webp';
import studyPhoto23 from '../../assets/2/studyformen.webp';
import studyPhoto24 from '../../assets/2/womenforone.webp';
import studyPhoto25 from '../../assets/2/studyforwomen.webp';
import studyPhoto26 from '../../assets/2/study2people2.webp';
import studyPhoto27 from '../../assets/2/study2people4.webp';
import studyPhoto28 from '../../assets/2/womenforone2.webp';


import studyPhoto31 from '../../assets/3/office09.webp';


// 상주 사무실
import studyPhoto41 from '../../assets/4/officeForTwo.webp';   // 2인
import studyPhoto42 from '../../assets/4/officeForThree.webp'; // 3인
import studyPhoto43 from '../../assets/4/printer.webp';  // 프린터

// 칠곡 상주 사무실
import studyPhoto51 from '../../assets/5/chilgok_price1.webp'; // 준비중



import { useBranch } from '../../contexts/BranchContext';
import NaverLogo from '../../components/NaverLogo';

interface BadgeProps {
  content: string;
}

const Wrapper = styled.div`
  width: 100%;
  /* height: 120vh; */
  padding-bottom: 2rem;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.lightGrey};

  @media (max-width: 780px) {
    padding: 0rem;
    width: 100%;
    height: auto;
    min-height: none;
  }
`;

const Inner = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .tab-content {
    /* Tab이랑 tab-content랑 동일 레벨이라 부모레벨에서 정의 */
    width: 100% !important;
  }
  .nav-tabs {
    font-size: 1rem !important;
  }
  .nav-link:not(.active) {
    color: ${({ theme }) => theme.color.main};
  }
`;

const TabsWrapper = styled(Tabs)`
  width: 100%;
  margin-bottom: 2rem;
  @media (max-width: 720px) {
    margin-bottom: 0rem;
  }
`;

const TabWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  width: 100%;
  
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const RightInner = styled.div`
  width: 23%;
  height: 20rem !important;
  font-weight: 200;
  cursor: pointer;
  border: ${({ theme }) => theme.boxBorder};
  border-radius: 0.3rem;
  background-color: #ffffff;
  margin: 1rem 0.5rem;

  .title {
    margin: 0.3rem 0 0 1rem;
    font-size: 1.1rem;
  }
  .price {
    margin: 0 0 0 1rem;
    font-size: 1.1rem;
    font-weight: bolder !important;
  }

  @media (max-width: 1100px) {
   width: 31%;
  }

  @media (max-width: 890px) {
   width: 47%;
  }

  @media (max-width: 720px) {
    width: 100%;
    height: 30rem !important;

    .title {
      font-size: 1.2rem;
    }
  }
`;

const Detail = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.sub};
  display: block;
  margin: 0 0 0 1rem;

  @media (max-width: 720px) {
    font-size: 0.9rem;
  }
`;

const RightImage = styled.div`
  width: 100%;
  height: 60%;
  overflow: hidden;
  position: relative;
  border-radius: 0.3rem 0.3rem 0 0;
  margin-bottom: 1rem;

  > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: 0.5s;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 720px) {
    height: 65%;
  }
`;

const Badge = styled.span<BadgeProps>`
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  padding: 0 0.3rem;
  color: white;
  font-size: 0.7rem;
  border-radius: 0.1rem;
  background-color: ${({ content, theme }) =>
    content.toLowerCase() !== 'best' ? theme.color.charcoal : theme.color.main};

  @media (max-width: 720px) {
    font-size: 0.9rem;
    padding: 0.1rem 0.7rem;
  }
`;

const Reserve = styled.button`
  background-color: #03c75a;
  color: #ffffff;
  display: flex;
  align-items: center;

  border: none;
  margin: 3rem 0;
  padding-right: 1.5rem;
  border-radius: 0.2rem;

  @media (max-width: 720px) {
    height: 2.3rem;
    justify-content: center;
    font-size: 1rem;
    overflow: hidden;
  }
`;

function Price() {
  const [branch, _] = useBranch();
  const [currBranch, setBranch] = useState<iPriceDetail>();
  const [defaultKey, setKey] = useState('office');
  const officePhotos: { [key: string]: string[] } = {
    "onedang": [officePhoto11, officePhoto12, officePhoto13, officePhoto14],
    "pyeongtaek": [officePhoto21, officePhoto22, officePhoto23, officePhoto24],
    "yeongdeungpo": [officePhoto31, officePhoto32, officePhoto33, officePhoto34],
    "wonju": [officePhoto41, officePhoto42, officePhoto43],
    "daegu": [officePhoto51, officePhoto52, officePhoto53],
    "bugae": [officePhoto61, officePhoto62, officePhoto63, officePhoto64],
    "anyang": [officePhoto81, officePhoto82, officePhoto83, officePhoto84]
  };
  const studyPhotos: { [key: string]: string[] } = {
    "onedang": [studyPhoto11, studyPhoto12, studyPhoto13],
    "pyeongtaek": [studyPhoto21, studyPhoto21, studyPhoto22, studyPhoto22, studyPhoto22, studyPhoto22],
    "yeongdeungpo": [studyPhoto31, studyPhoto31, studyPhoto31, studyPhoto31],
    "wonju": [studyPhoto41, studyPhoto42, studyPhoto43],
    "daegu": [studyPhoto51]
  };


  const otherPhotos = [
    [studyPhoto23, studyPhoto24, studyPhoto25, studyPhoto25],
    [studyPhoto26, studyPhoto26, studyPhoto27, studyPhoto28],
  ]

  const handleOpenNewTab = (url: string | undefined) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  const handleSelect = (k: string | null) => {
    if (k !== null) {
      setKey(k); // `k`가 null이 아닐 때만 상태 업데이트
    }
  };

  useEffect(() => {
    setBranch(priceInfo[branch]);
    setKey("office")
  }, [branch]);

  return (
    <Wrapper id="menu1">
      <Inner>
        <Subject main={currBranch?.subject || ''} sub={currBranch?.detail || ''} />
        <TabsWrapper defaultActiveKey={"office"} activeKey={defaultKey}
          onSelect={handleSelect}>
          {branch !== "/" && currBranch?.tab?.map((tab, idx) => (
            <Tab key={tab.title} eventKey={tab.category} title={tab.title}>
              <TabWrapper>
                {tab.price.map((item, itemIdx) => (
                  <RightInner key={tab.title + itemIdx}>
                    <RightImage>
                      {tab?.category === 'office' && <img src={officePhotos[branch]?.[itemIdx]} alt={tab.category} />}
                      {tab?.category.includes('study') && <img src={studyPhotos[branch]?.[itemIdx]} alt={tab.category} />}
                      {tab?.category.includes('other') && <img src={otherPhotos[tab.category.length - 'other'.length][itemIdx]} alt={tab.category} />}

                      {item.badge && <Badge content={item.badge}>{item.badge.toUpperCase()}</Badge>}
                    </RightImage>
                    <div className="title">{item.title}</div>
                    <Detail>{item.detail}</Detail>
                    <div className="price" style={{ fontWeight: 'bolder', color: '#F2722D', }}>
                      {item.price}
                    </div>
                  </RightInner>
                ))}
              </TabWrapper>
            </Tab>
          ))}
        </TabsWrapper>
        {currBranch?.reservation && (
          <Reserve onClick={() => handleOpenNewTab(currBranch.reservation)}>
            <NaverLogo url={currBranch.reservation} />
            예약하기
          </Reserve>
        )}
      </Inner>
    </Wrapper>
  );
}

export default Price;
