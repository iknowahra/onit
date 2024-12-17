import styled from 'styled-components';
import Slider from 'react-slick';
import BranchDrop from '../../components/BranchDrop';

import photo1 from '../../assets/slide-welcome-01.webp';
import photo2 from '../../assets/slide-welcome-02.webp';
import photo3 from '../../assets/slide-welcome-03.webp';
import office from '../../assets/valueup.webp';

const SliderWrapper = styled.div`
  height: calc(100vh - 20vh) !important;
  overflow-y: hidden !important;
  img {
    height: 100vh !important;
    object-fit: cover;
  }

  @media (max-width: 1080px) {
    height: 80vh !important;
    img {
      height: 100vh !important;
      object-fit: cover;
    }
  }

  @media (max-width: 780px) {
    display: none;
  }
`;

const Intro = styled.div`
  text-align: center;
  position: absolute;
  top: 45%;
  left: 3rem;
  transform: translateY(-50%);
  width: 50%;

  @media (max-width: 780px) {
    position: relative;
    width: 100%;
    left: 0;
    margin-top: 4rem;
    height: 100vh !important; /* 높이 강제 적용 */
    padding: 20vh 1.5rem;
  }
`;
const MobileImg = styled.div`
  display: none;
  @media (max-width: 780px) {
    display: block;
    width: 100%;
    height: 20vh;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 1rem;

    > img {
      width: 100%;
      object-fit: fill;
    }
  }
`;

const MainSlogan = styled.h1`
  font-weight: 600;
  white-space: pre-line;
  line-height: 2.8rem;
  color: ${({ theme }) => theme.color.sub};
  @media (max-width: 380px) {
    /* 갤럭시 폴드 전용 */
    font-size: 1.5rem !important;
  }
`;

const TypeSlogan = styled.h1`
  font-weight: 600;
  color: ${({ theme }) => theme.color.main};
  margin-top: 0.3rem;
  margin-bottom: 1rem;

  @media (max-width: 380px) {
    /* 갤럭시 폴드 전용 */
    margin: 0.1rem 0;
    font-size: 1.5rem !important;
  }
`;

const Details = styled.p`
  font-size: 1rem;
  @media (max-width: 780px) {
    width: 85%;
    margin: auto;
    white-space: normal;
    margin-top: 2rem;
    font-size: 1.3rem !important;
    word-break: keep-all;
  }
`;

const WhyBanner = styled.a`
  position: absolute;
  width: 19rem;
  left: 50%;
  margin-left: calc(-19rem / 2); /* width의 50% */
  text-align: center;
  bottom: 1rem;
  padding: 3px;
  font-size: 0.8rem;
  background-color: rgba(255, 255, 255, 0.8); /* 80% 불투명한 흰색 */
  border-radius: 10rem;
  border: 1px dashed black;
  animation: scroll-down 1.5s infinite ease-in-out;
  cursor: pointer;

  @keyframes scroll-down {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px); /* 아래로 10px 이동 */
    }
  }

  @media (max-width: 780px) {
    bottom: 1.5rem;
  }
`;

function Welcome() {
  const photos = [photo1, photo2, photo3];

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const handleScroll = (id: string) => {
    const target = document.getElementById(id); // 대상 요소 찾기
    const scrollContainer = document.getElementById('homeScroll'); // 스크롤 가능한 요소
    if (target && scrollContainer) {
      const targetPosition = target.offsetTop;
      scrollContainer.scrollTo({
        top: targetPosition,
        behavior: 'smooth', // 부드러운 스크롤
      });
    }
  };

  return (
    <div id="home0">
      <SliderWrapper>
        <Slider speed={1000} {...settings}>
          {photos.map((photo, index) => (
            <img key={index} src={photo} alt="" />
          ))}
        </Slider>
      </SliderWrapper>
      <Intro>
        <MobileImg>
          <img src={office} alt="onit" />
        </MobileImg>
        <p>모든 대표님들의 멋진 앞날을 응원하는 ON!T</p>
        <MainSlogan>공유오피스 & 스터디카페</MainSlogan>
        <Slider speed={500} {...settings}>
          {['편리한 공유오피스', '가성비 상주|비상주오피스', '편안한 환경의 스터디카페'].map((type, index) => (
            <TypeSlogan key={index}>{type}</TypeSlogan>
          ))}
        </Slider>
        <Details>
          온잇 공유오피스는 다년간의 투자 경험과 노하우를 지닌 세무 실무사가 함께 합니다.<br />
          법인 설립, 사업자등록, 임대차 계약, 실사 대응, 우편물 관리 등 모든 방면에서 서포트가 가능합니다.
        </Details>
        <BranchDrop />
      </Intro>
      <WhyBanner onClick={() => handleScroll('home1')}>
        ✨비상주 사무실은 이런 분들에게 필요합니다✨
        <i className="fa fa-angle-double-down" aria-hidden="true"></i>
        <i className="fa fa-angle-double-down" aria-hidden="true"></i>
      </WhyBanner>
    </div>
  );
}

export default Welcome;
