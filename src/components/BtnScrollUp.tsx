import { useEffect, useState } from 'react';
import styled from 'styled-components';
import information from '../assets/text/information';
import { useBranch } from '../contexts/BranchContext';
import priceInfo from '../assets/text/price';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.a`
  z-index: 10;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;

  @media (max-width: 780px) {
    bottom: 1.5rem;
  }

  .hoverBtn {
    display: none;
  }

  &:hover {
    .hoverBtn {
      display: flex;
      background-color: ${({ theme }) => theme.color.lightGrey};
      border: 1px solid ${({ theme }) => theme.color.sub};
      i {
        color: ${({ theme }) => theme.color.sub};
        font-size: 1rem;
      }
    }
  }
`;

const Button = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  padding-bottom: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.color.sub};

  i {
    color: white;
    font-size: 1rem;
  }

  span {
    display: none;
  }

  :hover {
    background-color: ${({ theme }) => theme.color.grey};
    border: 1px solid ${({ theme }) => theme.color.sub};
    i {
      color: ${({ theme }) => theme.color.sub};
      margin-right: 0.4rem;
    }
  }

  :hover:not(.hoverTarget) {
    padding: 0 2rem;
    width: 6rem;
    span {
      display: inline;
    }
  }

  @media (max-width: 780px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

function BtnScrollUp() {
  const [isScroll, setScroll] = useState(true);
  const [branch, setBranch] = useBranch();
  const router = useNavigate();

  const handleScroll = (id: number | string) => {
    const target = document.getElementById('' + id); // 대상 요소 찾기
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenNewTab = (url: string | undefined) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  useEffect(() => {
    const effectFn = () => {
      window.scrollY === 0 ? setScroll(false) : setScroll(true);
    };
    window.addEventListener('scroll', effectFn);
    return () => {
      window.removeEventListener('scroll', effectFn);
    };
  }, []);

  return (
    <Wrapper style={isScroll ? { display: 'flex' } : { display: 'none' }}>
      {branch !== '/' && (
        <Button
          className="hoverBtn"
          onClick={() => {
            window.location.href = 'tel:' + information[branch].tel.replace(/\D/g, '');
          }}
        >
          <i className="fa fa-phone" aria-hidden="true" />
          <span>전화연결</span>
        </Button>
      )}
      <Button
        className="hoverBtn"
        onClick={() => {
          branch == '/' ? handleScroll('home2') : handleScroll('menu6');
        }}
      >
        <i className="fa fa-map-marker" aria-hidden="true" />
        <span>오시는길</span>
      </Button>
      {branch !== '/' && priceInfo[branch].reservation && (
        <Button className="hoverBtn" onClick={() => handleOpenNewTab(priceInfo[branch].reservation)}>
          <i className="fa fa-calendar-check-o" aria-hidden="true" />
          <span>예약하기</span>
        </Button>
      )}
      <Button
        className="hoverBtn"
        onClick={() => {
          router('/');
        }}
      >
        <i className="fa fa-home" aria-hidden="true" />
        <span>온잇소개</span>
      </Button>
      <Button className="hoverTarget">
        <i className="fa fa-cogs" aria-hidden="true" />
      </Button>
    </Wrapper>
  );
}

export default BtnScrollUp;
