import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

import Subject from "../../components/Subject";
import reviewInfo, { iReview } from "../../assets/text/review";
import { useBranch } from "../../contexts/BranchContext";

const Wrapper = styled.div`
  width: 100%;
  height: 75 vh;
  background-color: ${({ theme }) => theme.color.lightGrey};

  @media (max-width: 768px) {
    height: auto;

    h3 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 2rem;
    }

    span {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const Inner = styled.div`
  width: 80%;
  margin: auto;
  padding: 3rem 0;

  > h3 {
    text-align: center;
    margin: -1rem 0 1rem 0;
  }

  @media (max-width: 768px) {
    width: 90%;

    > h3 {
      font-weight: 600;
      width: 90%;
      margin: auto;
      margin-bottom: 1rem;
      border-bottom: ${({ theme }) => theme.boxBorder};
      padding-bottom: 1rem;
    }
  }
`;

const SliderWrapper = styled.div`
  width: 90%;
  margin: auto;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const SliderSlap = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  div {
    display: flex;
    justify-content: center;
    img {
      border-radius: 10px;
      width: 200px;
      height: auto;
      max-height: 500px;
    }
  }

  p {
    width: 80%;
    margin: auto;
  }

  span {
    display: block;

    :nth-child(2) {
      font-weight: 600;
    }
  }

  div {
    display: flex;
    margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    width: 100%;

    p {
      font-size: 1rem !important;
      width: 95%;
      white-space: normal;
      text-align: center;
      line-height: 1.5rem;

    }

   > span {
      font-size: 0.9rem !important;
    }
  }
`;
const Tag = styled.span`
  background-color: #ffffff;
  padding: 0 0.3rem;
  border-radius: 5px;
  border: ${({ theme }) => theme.boxBorder};
  margin: 0 0.2rem;
  @media (max-width: 768px) {
    font-size: 1rem !important;
  }
`;

function Review() {
  const [branch, _] = useBranch();
  const [info, setInfo] = useState<iReview>();

  useEffect(() => {
    setInfo(reviewInfo[branch]);
  }, [branch]);

  return (
    <Wrapper id="menu6">
      <Inner>
        <Subject main={info?.main || ""} sub={info?.sub.toUpperCase()} />
        <h3>{info?.subTitle}</h3>
        <SliderWrapper>
          <Slider dots>
            {info?.contents.map((content, index) => (
              <SliderSlap key={index}>
                <p>{content.details}</p>
                <div>
                  {content.tags.length &&
                    content.tags.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}
                </div>
                <span>{content.user}</span>
                <span>{content.source}</span>
              </SliderSlap>
            ))}
          </Slider>
        </SliderWrapper>
      </Inner>
    </Wrapper>
  );
}

export default Review;
