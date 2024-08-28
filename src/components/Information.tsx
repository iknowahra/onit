import styled from 'styled-components';
import { useEffect, useState } from 'react';

import information, { iBranchInfo } from '../assets/text/information';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';

import photo1 from '../assets/1/map.png';
import photo2 from '../assets/2/map.png';
import photo3 from '../assets/3/map.png';
import photo4 from '../assets/4/map.png';
import { useBranch } from '../contexts/BranchContext';

const ImgWrapper = styled.div`
  width: 100%;
  height: 25rem;
  margin: auto;
  overflow: hidden;
  cursor: pointer;
  border: ${({ theme }) => theme.boxBorder};

  @media (max-width: 1080px) {
    height: 50%;
  }

  > img {
    width: 100%;
    object-fit: fill;
    object-position: center !important;
  }
`;

const Contents = styled.div`
  width: 100%;
  div,span,a,p,article{
    font-size: 0.9rem !important;
  }

  > div:not(:last-child) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 5rem;
    border-bottom: ${({ theme }) => theme.boxBorder};
  }

  .header {
    width: 13rem;
    display: block;
    font-size: 0.9rem !important;
    font-weight: bold !important;

    @media (max-width: 1080px) {
      width: 5.5rem;
    }

    > i {
      color: #b8b8b8;
      margin-right: 1rem;
      @media (max-width: 1080px) {
        margin-right: 0.5rem;
      }
    }
  }
  .content {
    width: calc(100% - 13rem);
    font-size: 0.9rem !important;
    color: ${({ theme }) => theme.color.sub};

    @media (max-width: 1080px) {
      width: calc(100% - 7rem);
    }
  }

  .address > .content {
    display: flex;
    flex-direction: column;
  }

  .phone > .content {
    @media (max-width: 1080px) {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    a {
      margin-right: 1rem;
    }
  }

  .service {
    height: 9rem;
    > .content {
      display: flex;
      > span {
        margin-right: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        @media (max-width: 1080px) {
          margin-right: 1rem;
        }
        > span {
          font-size: 3.5rem !important;

          @media (max-width: 1080px) {
            font-size: 1.5rem !important;
          }
        }
        .caption {
          font-size: 0.7rem !important;
        }
      }

      i {
        font-size: 3rem;
        font-weight: lighter;
        @media (max-width: 1080px) {
          font-size: 1.5rem;
        }
      }
      .fa-car {
        font-size: 1.5rem;
      }
    }
  }

  .bizInfo {
    width: 100%;
    display: flex;
    align-items: start;
    @media (max-width: 1080px) {
      flex-direction: column;
      .business {
        border-bottom: ${({ theme }) => theme.boxBorder};
      }
    }
  }

  .business,
  .account {
    display: flex;
    justify-content: center;
    align-items: start;
    width: 50%;
    margin-top: 0;

    @media (max-width: 1080px) {
      width: 100%;
      justify-content: space-between;
    }

    .header {
      height: 100%;
      margin: auto;
      @media (max-width: 1080px) {
        width: 5.5rem !important;
        margin: auto 0;
      }
    }
    .content {
      height: 10rem;
      display: flex;
      flex-direction: column;
      padding-top: 1rem;

      @media (max-width: 1080px) {
        width: calc(100% - 7rem);
      }

      > span {
        display: flex;
        justify-content: space-between;
        .left {
          width: 5rem;
        }
        .right {
          width: calc(100% - 5rem);
        }
      }
    }
  }

  .further {
    @media (max-width: 1080px) {
      display: none;
    }
  }
`;

type Props = {
  info?: iBranchInfo;
};

const icons = {
  park: () => (
    <span>
      <span>
        <i className="fa fa-car" aria-hidden="true"></i>P
      </span>
      <span className="caption">주차가능</span>
    </span>
  ),
  separateToilet: () => (
    <span>
      <span>
        <i className="fa fa-male" aria-hidden="true"></i>|<i className="fa fa-female" aria-hidden="true"></i>
      </span>
      <span className="caption">남녀화장실구분</span>
    </span>
  ),
  wifi: () => (
    <span>
      <i className="fa fa-wifi" aria-hidden="true"></i>
      <span className="caption">와이파이제공</span>
    </span>
  ),
};

function Information({ info }: Props) {
  const photos = [photo1, photo2, photo3, photo4];
  const [currPhoto, setPhoto] = useState(photos[0]);
  const [branch, _] = useBranch();

  const handleOpenNewTab = (url: string | undefined) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  const zoomInTooMuch = (e: ReactZoomPanPinchRef, url: string | undefined) => {
    if (e?.state?.scale > 2 && e?.state?.scale > e.state.previousScale) {
      if (window.confirm('네이버 지도로 확인하시겠습니까?')) {
        handleOpenNewTab(url);
      }
    }
  };

  useEffect(() => {
    const idx = information.findIndex((branch) => branch.path == info?.path);
    idx >= 0 ? setPhoto(photos[idx]) : setPhoto(photos[0]);
  }, [info?.path]);

  return (
    <>
      <TransformWrapper initialScale={1} minScale={1} maxScale={10} onZoom={(e) => zoomInTooMuch(e, info?.map)}>
        <TransformComponent>
          <ImgWrapper
            onClick={() => {
              handleOpenNewTab(info?.map);
            }}
          >
            <img src={currPhoto} alt="location" />
          </ImgWrapper>
        </TransformComponent>
      </TransformWrapper>
      <Contents>
        <div className="address">
          <span className="header">
            <i className="fa fa-location-arrow" aria-hidden="true"></i>
            오시는길
          </span>
          <span className="content">
            <span>{info?.address}</span>
            {info?.oldAddress && <span>(지번 : {info.oldAddress})</span>}
          </span>
        </div>
        <div>
          <span className="header">
            <i className="fa fa-clock-o" aria-hidden="true"></i>이용시간
          </span>
          <span className="content">{info?.time}</span>
        </div>
        <div className="phone">
          <span className="header">
            <i className="fa fa-phone" aria-hidden="true"></i>전화번호
          </span>
          <span className="content">
            {info?.phone && <a href={'tel:' + info?.phone.replace(/\D/g, '')}>{info?.phone}</a>}
            {info?.tel && <a href={'tel:' + info?.tel.replace(/\D/g, '')}>{info?.tel}</a>}
          </span>
        </div>
        <div className="service">
          <span className="header">
            <i className="fa fa-info-circle" aria-hidden="true"></i>이용안내
          </span>
          <span className="content">
            {info?.service?.park && icons.park()}
            {info?.service?.wifi && icons.wifi()}
            {info?.service?.genderSeparateToilet && icons.separateToilet()}
          </span>
        </div>
        <div className="bizInfo">
          <div className="business">
            <span className="header">
              <i className="fa fa-briefcase" aria-hidden="true"></i>사업자정보
            </span>
            <span className="content ">
              <span>
                <span className="left">상호명</span>
                <span className="right">{info?.business?.name}</span>
              </span>
              <span>
                <span className="left">대표자</span>
                <span className="right">{info?.business?.owner}</span>
              </span>
              <span>
                <span className="left">사업자번호</span>
                <span className="right">{info?.business?.businessNo}</span>
              </span>
              <span>
                <span className="left">이메일</span>
                <a className="right">{info?.business?.email}</a>
              </span>
            </span>
          </div>
          <div className="account">
            <span className="header">
              <i className="fa fa-credit-card" aria-hidden="true"></i>입금계좌
            </span>
            <span className="content">
              <span>
                <span className="left">예금주</span>
                <span className="right">{info?.account?.owner}</span>
              </span>
              <span>
                <span className="left">입금은행</span>
                <span className="right">{info?.account?.bank}</span>
              </span>
              <span>
                <span className="left">계좌번호</span>
                <span className="right">{info?.account?.accountNo}</span>
              </span>
              <span>
                <span className="left"></span>
                <span className="right further">※입금하실 때 정보를 잘 입력해주세요</span>
              </span>
            </span>
          </div>
        </div>
      </Contents>
    </>
  );
}

export default Information;
