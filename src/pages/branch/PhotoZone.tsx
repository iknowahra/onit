import React, { useState } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import Modal from "../../components/Modal";

import officePhoto11 from "../../assets/1/officeMain01.jpg";
import officePhoto12 from "../../assets/1/officeMain03.jpg";
import officePhoto13 from "../../assets/1/officeMain04.jpg";
import officePhoto14 from "../../assets/1/officeMain05.jpg";
import officePhoto15 from "../../assets/1/officeMain06.jpg";
import officePhoto16 from "../../assets/1/officeMain07.jpg";
import officePhoto17 from "../../assets/1/officeMain08.jpg";
import officePhoto18 from "../../assets/1/officeMain10.jpg";
import officePhoto19 from "../../assets/1/officeMain12.jpg";

import officePhoto21 from "../../assets/2/officeMain01.jpg";
import officePhoto22 from "../../assets/2/entrance.jpg";
import officePhoto23 from "../../assets/2/study2people2.jpg";
import officePhoto24 from "../../assets/2/officeMain02.jpg";
import officePhoto25 from "../../assets/2/kiosk.jpg";
import officePhoto26 from "../../assets/2/printer.jpg";
import officePhoto27 from "../../assets/2/cafeteria.jpg";
import officePhoto28 from "../../assets/2/study2people1.jpg";
import officePhoto29 from "../../assets/2/womenforone.jpg";

import officePhoto31 from "../../assets/3/office11.jpg";
import officePhoto32 from "../../assets/3/office02.jpg";
import officePhoto33 from "../../assets/3/office03.jpg";
import officePhoto34 from "../../assets/3/office05.jpg";
import officePhoto35 from "../../assets/3/office06.jpg";
import officePhoto36 from "../../assets/3/office07.jpg";
import officePhoto37 from "../../assets/3/office08.jpg";
import officePhoto38 from "../../assets/3/officeblock01.jpeg";
import officePhoto39 from "../../assets/3/cctv.jpg";

import officePhoto41 from "../../assets/4/officeMain01.png";
import officePhoto42 from "../../assets/4/officeMain02.jpeg";
import officePhoto43 from "../../assets/4/officeMain03.jpeg";
import officePhoto44 from "../../assets/4/logo.png";
import officePhoto45 from "../../assets/4/logo.png";
import officePhoto46 from "../../assets/4/logo.png";
import officePhoto47 from "../../assets/4/logo.png";
import officePhoto48 from "../../assets/4/logo.png";
import officePhoto49 from "../../assets/4/logo.png";


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
  const photos = [[
    officePhoto11,
    officePhoto12,
    officePhoto13,
    officePhoto14,
    officePhoto15,
    officePhoto16,
    officePhoto17,
    officePhoto18,
    officePhoto19,
  ],
  [
    officePhoto21,
    officePhoto22,
    officePhoto23,
    officePhoto24,
    officePhoto25,
    officePhoto26,
    officePhoto27,
    officePhoto28,
    officePhoto29,
  ],
  [
    officePhoto31,
    officePhoto32,
    officePhoto33,
    officePhoto34,
    officePhoto35,
    officePhoto36,
    officePhoto37,
    officePhoto38,
    officePhoto39,
  ],
  [
    officePhoto41,
    officePhoto42,
    officePhoto43,
    officePhoto44,
    officePhoto45,
    officePhoto46,
    officePhoto47,
    officePhoto48,
    officePhoto49,
  ]];
  const handleModal = (open: boolean) => {
    setOpen(open);
  };

  const settings = {
    arrows: true,
  };
  return (
    <Wrapper id="menu4">
      {branch >= 0 && <Inner>
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
      {branch >= 0 && isOpen ? (
        <Modal title={""} handleModal={handleModal} img={photos[branch][current]} />
      ) : null}
    </Wrapper>
  );
}
export default PhotoZone;
