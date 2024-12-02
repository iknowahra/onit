import styled from 'styled-components';
import Fit from '../../assets/text/benefit';

import Card from 'react-bootstrap/Card';
import photo from '../../assets/vision2.webp';
import BranchDrop from '../../components/BranchDrop';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 110%;
  display: flex;
  flex-direction: column;

  @media (max-width: 780px) {

    span,
    p {
      font-size: 1.1rem;
      line-height: 1.8rem;
      white-space: normal;
    }
  }
`;

const Inner = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  padding-top: 3.5rem;

  h1,
  h3 {
    margin-bottom: 0.8rem;
  }

  @media (max-width: 780px) {
    padding-top: 6rem;
  }
`;

const BottomCard = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  height: 28vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.lightGrey};

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column-reverse;
    height: 80% !important;
    justify-content: start;
  }

  > div:first-child {
    padding-left: 1.5rem;
    font-size: 2rem;
    line-height: normal;
    @media (max-width: 780px) {
      margin-top: 2rem;
    }
    > div {
      font-size: 0.9rem;
      margin-bottom: 0.4rem;
    }
    > span {
      font-size: 1.8rem;
      font-weight: bolder;
      margin-right: 0.5rem;
      @media (max-width: 780px) {
        font-size: 1rem !important;
      }
    }
  }

  > div:last-child {
    width: 40%;
    height: 100%;
    border-radius: 0 10px 10px 0;
    overflow: hidden;

    > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    @media (max-width: 780px) {
      width: 100%;
      height: auto;
      border-radius: 4px;
      > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

function Benefit() {
  return (
    <Container id="home1">
      <Inner>
        <Card>
          <Card.Header style={{ fontWeight: 'bolder' }}>{Fit.why.title}</Card.Header>
          <Card.Body>
            {Fit.why.when.map((when, idx) => (
              <li key={idx}>{when}</li>
            ))}
          </Card.Body>
        </Card>
        <BottomCard>
          <div>
            <div>{Fit.valueUp.subTitle}</div>
            <span style={{ color: '#F2722D' }}>ON!T</span>
            <span>{Fit.valueUp.title}</span>
            <div>
              <BranchDrop />
            </div>
          </div>
          <div>
            <img src={photo} alt="value up customer" />
          </div>
        </BottomCard>
      </Inner>
    </Container>
  );
}

export default Benefit;
