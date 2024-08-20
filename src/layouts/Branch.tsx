import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import BtnScrollUp from '../components/BtnScrollUp';
import Header from '../pages/branch/BranchHeader';
import Landing from '../pages/branch/Landing';
import Service from '../pages/branch/Service';
import Office from '../pages/branch/Office';
import Review from '../pages/branch/Review';
import Location from '../pages/branch/Location';
import PhotoZone from '../pages/branch/PhotoZone';
import Price from '../pages/branch/Price';
import EventModal from '../components/EventModal';
import Footer from '../components/Footer';

import { useBranch } from '../contexts/BranchContext';
import information from '../assets/text/information';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  position: relative;

  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`;

const Inner = styled.div`
  position: relative;
  overflow-y: auto;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

function Branch() {
  const POPUP_CLOSE_EXPIRE_TIME = 24 * 60 * 60 * 1000;

  const [isOpen, setOpen] = useState(true);
  const router = useHistory();
  const [branch, _] = useBranch();

  const handleModal = (open: boolean, desireClose: boolean) => {
    if (desireClose && !open) setStorage();
    setOpen(open);
  }

  const checkPopupOpen = () => {
    const now = new Date().getTime();
    const expiredTime = localStorage.getItem("" + branch) || "-1";
    return parseInt(expiredTime) < now;
  }

  const setStorage = () => {
    const expiredTime = new Date().getTime() + POPUP_CLOSE_EXPIRE_TIME;
    localStorage.setItem("" + branch, "" + expiredTime);

  }

  useEffect(() => {
    if (branch < 0) router.push("/")
    if (branch >= 0 && information[branch].event) setOpen(checkPopupOpen);

  }, [branch])

  const modalTitle = () => {
    const info = information[branch];
    if (branch >= 0) return (info ? info.name : "") + " 할인 이벤트"
    return "";
  }

  return (
    <Container id='branch'>
      <EventModal title={modalTitle()} isOpen={isOpen} handleModal={handleModal} />
      <Header />
      <Inner id='menuScroll'>
        <BtnScrollUp />
        <Landing />
        <Price />
        <Service />
        <Office />
        <PhotoZone />
        <Review />
        <Location />
        <Footer />
      </Inner>
    </Container>
  );
}

export default Branch;
