import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Subject from '../../components/Subject';
import officeInfo, { iOfficeInfo } from '../../assets/text/office';

import photo1 from '../../assets/1/service01.png';
import photo2 from '../../assets/1/service02.png';
import photo3 from '../../assets/1/service03.png';
import photo4 from '../../assets/3/5min.png'
import { useBranch } from '../../contexts/BranchContext';

interface iCard {
  title: string;
  details: string;
}


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Inner = styled.div`
  width: 80%;
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
@media (max-width: 780px) {
  display:none;
}
`
const Mobile = styled.div`
  @media (max-width: 780px) {
    /* display:none; */
  }
`;
const CardStyle = styled(Card)`
 width: 30%;
 @media (max-width: 780px) {
    width: 100%;
    display: flex !important;
  }
`;

const SliderWrapper = styled.div`
  display: none;
  @media (max-width: 780px) {
    display:block;
    width: 100%;
  }
`;

const SliderSlap = styled.div`
  text-align: center;

  p {
    width: 80%;
    margin: auto;
    margin-bottom: 1rem;
  }

  span {
    display: block;

    :nth-child(2) {
      font-weight: 600;
    }
  }

  @media (max-width: 780px) {
    width: 100%;

    p {
      width: 95%;
      white-space: normal;
      text-align: start;
      margin-bottom: 1rem;
    }

    span {
    }
  }
`;

function PhotoCard(content: iCard, branch: number, index: number) {
  const photos = [[photo1, photo2, photo3], [photo1, photo2, photo3], [photo1, photo2, photo4], [photo1, photo2, photo3]];

  return (
    < CardStyle key={index} >
      <Card.Img variant="top" src={photos[branch][index]}
        alt={`${'content' + Number(index + 1)}`} />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title style={{ fontSize: "1.3rem", fontWeight: "bolder", paddingBottom: "0.3rem", borderBottom: "1px solid grey" }}>{content.title}</Card.Title>
        <Card.Text style={{ fontSize: "1rem" }}>
          {content.details}
        </Card.Text>
      </Card.Body>
    </CardStyle>
  )
}

function Office() {
  const [branch, _] = useBranch();
  const [info, setInfo] = useState<iOfficeInfo>();

  useEffect(() => {
    setInfo(officeInfo[branch]);
  }, [branch]);

  return (
    <Container id="menu3">
      <Inner>
        <Mobile>
          <Subject main={info?.main || ""} sub={info?.sub} />
        </Mobile>
        <Wrapper>
          {
            branch >= 0 &&
            info?.contents?.map((product, index) => PhotoCard(product, branch, index))
          }
        </Wrapper>
        <SliderWrapper>
          <Slider dots>
            {
              branch >= 0 &&
              info?.contents?.map((product, index) => (
                <SliderSlap key={index}>
                  {PhotoCard(product, branch, index)}
                </SliderSlap>
              ))}
          </Slider>
        </SliderWrapper>

      </Inner>
    </Container >
  );
}

export default Office;
