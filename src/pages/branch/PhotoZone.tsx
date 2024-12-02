import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from "lodash";

import Slider from "react-slick";
import Modal from "../../components/Modal";

import officePhoto11 from "../../assets/1/officeMain01.webp";
import officePhoto12 from "../../assets/1/officeMain03.webp";
import officePhoto13 from "../../assets/1/officeMain04.webp";
import officePhoto14 from "../../assets/1/officeMain05.webp";
import officePhoto15 from "../../assets/1/officeMain06.webp";
import officePhoto16 from "../../assets/1/officeMain07.webp";
import officePhoto17 from "../../assets/1/officeMain08.webp";
import officePhoto18 from "../../assets/1/officeMain10.webp";
import officePhoto19 from "../../assets/1/officeMain12.webp";

import officePhoto21 from "../../assets/2/pt_main01.webp";
import officePhoto22 from "../../assets/2/entrance.webp";
import officePhoto23 from "../../assets/2/study2people2.webp";
import officePhoto24 from "../../assets/2/officeMain02.webp";
import officePhoto25 from "../../assets/2/kiosk.webp";
import officePhoto26 from "../../assets/2/printer.webp";
import officePhoto27 from "../../assets/2/cafeteria.webp";
import officePhoto28 from "../../assets/2/study2people1.webp";
import officePhoto29 from "../../assets/2/womenforone.webp";

import officePhoto31 from "../../assets/3/office11.webp";
import officePhoto32 from "../../assets/3/office02.webp";
import officePhoto33 from "../../assets/3/office03.webp";
import officePhoto34 from "../../assets/3/office05.webp";
import officePhoto35 from "../../assets/3/office06.webp";
import officePhoto36 from "../../assets/3/office07.webp";
import officePhoto37 from "../../assets/3/office08.webp";
import officePhoto38 from "../../assets/3/officeblock01.webp";
import officePhoto39 from "../../assets/3/cctv.webp";

import officePhoto41 from "../../assets/4/office01.webp";
import officePhoto42 from "../../assets/4/office02.webp";
import officePhoto43 from "../../assets/4/office03.webp";
import officePhoto44 from "../../assets/4/office04.webp";
import officePhoto45 from "../../assets/4/office05.webp";
import officePhoto46 from "../../assets/4/office06.webp";
import officePhoto47 from "../../assets/4/office07.webp";
import officePhoto48 from "../../assets/4/office08.webp";
import officePhoto49 from "../../assets/4/office09.webp";
import officePhoto411 from "../../assets/4/office11.webp";
import officePhoto421 from "../../assets/4/office12.webp";
import officePhoto431 from "../../assets/4/office13.webp";
import officePhoto451 from "../../assets/4/office15.webp";
import officePhoto461 from "../../assets/4/office16.webp";
import officePhoto471 from "../../assets/4/office17.webp";
import officePhoto481 from "../../assets/4/office18.webp";
import officePhoto491 from "../../assets/4/office19.webp";
import officePhoto412 from "../../assets/4/common01.webp";
import officePhoto422 from "../../assets/4/common02.webp";
import officePhoto432 from "../../assets/4/common03.webp";
import officePhoto442 from "../../assets/4/common04.webp";

import officePhoto71 from "../../assets/7/anyang_main01.webp";

import { useBranch } from "../../contexts/BranchContext";
import Subject from "../../components/Subject";

const Wrapper = styled.div`
  width: 100%;
  height: auto;

  @media (max-width: 1250px) {
    height: auto;
    padding-top: 2rem;
  }
`;

const Inner = styled.div`
  width: 70%;
  height: 100%;
  margin: auto;
  padding: 4rem 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: ${({ theme }) => theme.boxBorder};

  @media (max-width: 1250px) {
    flex-direction: column;
    width: 80%;
    height: auto;
  }

  .webPhoto{
    width: 32.1%;
    height: 13rem;
    position: relative;
    margin: calc(100% - 33.2%*3) 0;
    border-radius: 0.5rem;
    cursor: pointer;
    overflow: hidden;

    :nth-child(3),
    :nth-child(6),
    :nth-child(9) {
      margin-left: 1rem;
      margin-right:1rem;
    }

    ::before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      opacity: 0.2;
      position: absolute;
      transition: 0.5s;
    }

    :hover {
      ::before {
        opacity: 0;
      }
    }

    @media (max-width: 1250px) {
        border : 1px solid red;
        display: none;
    }

    > img {
      width: 100%;
      height: 100%;

      object-fit: cover;
      transition: 0.5s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
  
`;

const SliderWrapper = styled.div`
  display: none;
  @media (max-width: 1250px) {
    display: block;
    width: 100%;
    /* overflow: hidden; */
    
    .sliderImg{
      width: 100%;
      height: 70vh !important;
      overflow: hidden;

      img{
        width: 100%;
        height: 100% !important;
        object-fit: cover !important;
      }
    }
  }
`;


function PhotoZone() {
  const [isOpen, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [branch, _] = useBranch();
  const photos: { [key: string]: string[] } = {
    "onedang": [
      officePhoto11,
      officePhoto12,
      officePhoto13,
      officePhoto14,
      officePhoto15,
      officePhoto16,
      officePhoto17,
      officePhoto18,
      officePhoto19,
    ], "pyeongtaek": [
      officePhoto21,
      officePhoto22,
      officePhoto23,
      officePhoto24,
      officePhoto25,
      officePhoto26,
      officePhoto27,
      officePhoto28,
      officePhoto29,
    ], "yeongdeungpo": [
      officePhoto31,
      officePhoto32,
      officePhoto33,
      officePhoto34,
      officePhoto35,
      officePhoto36,
      officePhoto37,
      officePhoto38,
      officePhoto39,
    ], "wonju": [
      officePhoto41,
      officePhoto42,
      officePhoto43,
      officePhoto44,
      officePhoto45,
      officePhoto46,
      officePhoto47,
      officePhoto48,
      officePhoto49,
      officePhoto411,
      officePhoto421,
      officePhoto431,
      officePhoto451,
      officePhoto461,
      officePhoto471,
      officePhoto481,
      officePhoto491,
      officePhoto412,
      officePhoto422,
      officePhoto432,
      officePhoto442,
    ], "daegu": [

    ], "anyang": [
      officePhoto71,
    ]
  };
  const handleModal = (open: boolean) => {
    setOpen(open);
  };

  const settings = {
    arrows: true,
  };

  useEffect(() => {
    console.log('Current branch:', branch);
    console.log('Available photos:', Object.keys(photos));
  }, [branch]);

  if (!photos[branch]) {
    return <div>해당 지점의 사진이 준비중입니다.</div>;
  }

  return (
    <Wrapper id="menu4">
      {branch !== "/" && <Inner>
        <Subject main="매장 사진" />
        {photos[branch]?.map((_, idx) => (
          <div
            className="webPhoto"
            key={idx}
            onClick={() => {
              handleModal(true);
              setCurrent(idx);
            }}
          >
            <img src={photos[branch][idx]} alt="office" />
          </div>
        ))}
        <SliderWrapper>
          <Slider dots {...settings}>
            {photos[branch]?.map((photo, index) => (
              <div className="sliderImg" key={index} onClick={() => {
                handleModal(true);
                setCurrent(index);
              }}>
                <img src={photo} alt="" />
              </div>
            ))}
          </Slider>
        </SliderWrapper>
      </Inner>
      }
      {branch !== "/" && isOpen ? (
        <Modal title={""} handleModal={handleModal} img={photos[branch][current]} />
      ) : null}
    </Wrapper>
  );
}
export default PhotoZone;
