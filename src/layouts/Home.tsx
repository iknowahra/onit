import styled from "styled-components";
import HomeHeader from "../pages/home/HomeHeader";
import Welcome from "../pages/home/Welcome";
import Benefit from '../pages/home/Benefit'
import Faq from '../pages/home/Faq'
import Location from '../pages/home/Location'
import Footer from "../components/Footer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  position: relative;

  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`;

const Inner = styled.div`
  position: relative;
  height: calc(100vh - 20vh);
  overflow-y: auto;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 8vh);
    background-color: ${({ theme }) => theme.color.lightGrey};

    h1 {
      font-size: 2rem;
      line-height: 2.5rem;
    }

    div,
    span,
    p,
    button {
      font-size: 1rem !important;
      line-height: 1.5rem;
    }
  }
  @media (max-width: 380px) {
    div,
    span,
    p,
    button {
      font-size: 0.9rem !important;
      line-height: 1.2rem;
    }
  }
`;

function Home() {
  return (
    <Container >
      <HomeHeader />
      <Inner id="homeScroll">
        <Welcome />
        <Benefit />
        <Faq />
        <Location />
      </Inner>
      <Footer />
    </Container>
  );
}

export default Home;
