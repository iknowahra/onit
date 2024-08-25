import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import priceInfo, { iPrice } from '../../assets/text/price';

import Subject from '../../components/Subject';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import officePhoto11 from '../../assets/1/officeMain03.jpg';
import officePhoto12 from '../../assets/1/officeMain02.jpg';
import officePhoto13 from '../../assets/1/officeMain01.jpg';
import officePhoto14 from '../../assets/1/officeMain05.jpg';

import officePhoto21 from '../../assets/2/officeMain02.jpg';
import officePhoto22 from '../../assets/2/officeMain02.jpg';
import officePhoto23 from '../../assets/2/officeMain02.jpg';
import officePhoto24 from '../../assets/2/printer.jpg';

import officePhoto31 from '../../assets/3/officeblock01.jpeg';
import officePhoto32 from '../../assets/3/office06.jpg';
import officePhoto33 from '../../assets/3/officeblock02.jpg';
import officePhoto34 from '../../assets/3/office08.jpg';


import studyPhoto11 from '../../assets/1/studyMain01.jpg';
import studyPhoto12 from '../../assets/1/studyMain02.jpg';
import studyPhoto13 from '../../assets/1/studyMain03.jpg';

import studyPhoto21 from '../../assets/2/multiroom.jpeg';
import studyPhoto22 from '../../assets/2/openroom.jpeg';
import studyPhoto23 from '../../assets/2/studyformen.jpeg';
import studyPhoto24 from '../../assets/2/womenforone.jpg';
import studyPhoto25 from '../../assets/2/studyforwomen.jpg';
import studyPhoto26 from '../../assets/2/study2people2.jpg';
import studyPhoto27 from '../../assets/2/study2people4.jpg';
import studyPhoto28 from '../../assets/2/womenforone2.jpg';


import studyPhoto31 from '../../assets/3/office09.jpg';





import { useBranch } from '../../contexts/BranchContext';
import NaverLogo from '../../components/NaverLogo';

interface BadgeProps {
  content: string;
}

const Wrapper = styled.div`
  width: 100%;
  /* height: 120vh; */
  padding-bottom: 2rem;
  background-color: ${({ theme }) => theme.color.lightGrey};

  @media (max-width: 780px) {
    padding: 0rem;
    width: 100%;
    height: auto;
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

    &:nth-child(1),
    :nth-child(3) {
      margin: 1rem 0;
    }
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
  const [currBranch, setBranch] = useState<iPrice>();
  const [defaultKey, setKey] = useState('office');
  const officePhotos = [
    [officePhoto11, officePhoto12, officePhoto13, officePhoto14],
    [officePhoto21, officePhoto22, officePhoto23, officePhoto24],
    [officePhoto31, officePhoto32, officePhoto33, officePhoto34],
  ];
  const studyPhotos = [
    [studyPhoto11, studyPhoto12, studyPhoto13],
    [studyPhoto21, studyPhoto21, studyPhoto22, studyPhoto22, studyPhoto22, studyPhoto22,],
    [studyPhoto31, studyPhoto31, studyPhoto31, studyPhoto31],
  ];

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
          {branch >= 0 && currBranch?.tab?.map((tab, idx) => (
            <Tab key={idx} eventKey={tab.category} title={tab.title}>
              <TabWrapper>
                {tab.price.map((item, itemIdx) => (
                  <RightInner key={itemIdx}>
                    <RightImage>
                      {tab?.category === 'office' && <img src={officePhotos[branch][itemIdx]} alt={tab.category} />}
                      {tab?.category.includes('study') && <img src={studyPhotos[branch][itemIdx]} alt={tab.category} />}
                      {tab?.category.includes('other') && <img src={otherPhotos[tab.category.length - 'other'.length][itemIdx]} alt={tab.category} />}

                      {item.badge && <Badge content={item.badge}>{item.badge.toUpperCase()}</Badge>}
                    </RightImage>
                    <div className="title">{item.title}</div>
                    <Detail>{item.detail}</Detail>
                    {item.discount ? (
                      <>
                        <div className="price" style={{ fontWeight: 'bolder' }}>
                          {item.discount}
                        </div>
                        <div
                          style={{
                            fontSize: '0.7rem',
                            color: '#F2722D',
                            lineHeight: '1rem',
                            margin: '0 1rem',
                          }}
                        >
                          (정가 : {item.price})
                        </div>
                      </>
                    ) : (
                      <div className="price" style={{ fontWeight: 'bolder' }}>
                        {item.price}
                      </div>
                    )}
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
