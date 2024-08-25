import React, { ReactChild } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  handleModal: (handle: boolean) => void;
  img: string
}

const Container = styled.div`
z-index: 11;
width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  overflow: hidden;
   > i {
    color: ${({ theme }) => theme.color.lightGrey};
    font-size: 1.5rem;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    z-index: 12;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: black;
  opacity: 0.8;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  overflow: hidden;

 
`;

const Inner = styled.div`
  width: 80%;
  height: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  iframe {
    width: 800px;
    height: 450px;
  }

  @media (max-width: 780px) {
    width: 100%;

    iframe {
      width: 100%;
      height: 50%;
    }
  }
`;

const Title = styled.h3`
  text-align: left;
  color: ${({ theme }) => theme.color.lightGrey};
  margin-bottom: 1rem;
`;

const ImgWrapper = styled.div`
  width: 50%;
  height: auto;
  overflow: hidden;
  border-radius: 0.5rem;

@media (max-width: 1300px) {
  width: 80%;
}

  >img {
    width: 100%;
  }
`;

function Modal({ title, handleModal, img }: Props) {
  return (
    <>
      <Wrapper />
      <Container onClick={() => { handleModal(false) }}>
        <i className="xi-close" onClick={() => { handleModal(false) }} />
        <Inner>
          <Title>{title}</Title>
          <ImgWrapper>
            <img src={img} alt="office mag" />
          </ImgWrapper>
        </Inner>
      </Container>
    </>
  );
}

export default Modal;
