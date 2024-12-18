import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.webp";
import { Dropdown } from "react-bootstrap";
import landingInfo from "../../assets/text/landing";
import { useBranch } from "../../contexts/BranchContext";

interface ContainerProps {
  isScroll: boolean;
}

interface ModalProps {
  isOpenModal?: boolean;
}

const Container = styled.div<ContainerProps>`
  position: fixed;
  width: 100%;
  z-index: 10;
  height: 3rem;
  ${({ isScroll, theme }) =>
    isScroll
      ? `background-color: white;
         box-shadow: 0 1px 2px ${theme.color.lightGrey}`
      : 'background-color: rgba(255,255,255,0.7)'};
  @media (max-width: 780px) {
    height: 4rem;
    background-color: ${({ theme }) => theme.color.lightGrey};
  }
`;

const Wrapper = styled.div`
  margin: auto;
  width: 
  85%;
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 0 1rem;

  > img {
    width: 4rem;
    cursor: pointer;
    object-fit: contain;
  }

  @media (max-width: 780px) {
    width: 100%;
    position: relative;
    padding-top: 1rem;
    flex-direction: row-reverse;
    > img {
    }
  }
`;

const Categories = styled.div<ModalProps>`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: 780px) {
    z-index: 10;
    position: fixed;
    background-color: white;
    box-shadow: 0.8px 0 0.8px ${({ theme }) => theme.color.lightGrey};
    height: 100vh;
    width: 55%;
    top: 0;
    left: ${({ isOpenModal }) => (isOpenModal ? "0" : "-50rem")};
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 6rem;
    transition: 0.8s;
  }
`;

const Menu = styled.a`
  margin: 0 0.4rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.charcoal};
  @media (max-width: 780px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

const Trigger = styled.button`
  display: none;

  @media (max-width: 780px) {
    z-index: 11;
    display: inline;
    position: absolute;
    top: 1.2rem;
    left: 1.3rem;
    border: none;
    font-size: 1.8rem;
    background-color: transparent;
  }
`;
const Drop = styled(Dropdown)`
  @media (max-width: 780px) {
    display: inline;
  }
`;
const DropToggle = styled(Dropdown.Toggle)`
  width: 10rem;
  height: 2.2rem;
  font-size: 0.8rem;
`;

const DropMenu = styled(Dropdown.Menu)`
  width: 10rem;
  font-size: 0.8rem;
`;

const ModalHelper = styled.div<ModalProps>`
  display: none;

  @media (max-width: 780px) {
    display: ${({ isOpenModal }) => (isOpenModal ? "block" : "none")};
    z-index: 5;
    position: fixed;
    height: 100vh;
    width: 45%;
    top: 0;
    right: ${({ isOpenModal }) => (isOpenModal ? "0" : "30rem")};
    flex-direction: column;
  }
`;

function Header() {
  const menues = [
    { name: "비상주사무실이란?" },
    { name: "자주묻는질문" },
    { name: "지점안내" },
  ];

  const router = useNavigate();
  const [isOpenModal, setOpenModal] = useState(false);
  const [branch, setBranch] = useBranch();
  const [isScroll, setScroll] = useState(false);

  const handleScroll = (id: number | string) => {
    const target = document.getElementById("home" + id); // 대상 요소 찾기
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };


  useEffect(() => {
    const effectFn = () => {
      window.scrollY === 0 ? setScroll(false) : setScroll(true);
    }

    window.addEventListener('scroll', effectFn);
    return () => {
      window.removeEventListener('scroll', effectFn);
    };
  }, []);


  return (
    <Container isScroll={isScroll}>
      <Wrapper>
        <img src={logo} alt="ON!T Logo" onClick={() => handleScroll(0)} />
        <Drop>
          <DropToggle variant="secondary" id="dropdown-basic">
            지점을 선택하세요.
          </DropToggle>
          <DropMenu>
            {Object.entries(landingInfo.intro).map(([value, { label }]) => (
              <Dropdown.Item
                onClick={() => setBranch(value)}
                key={value}
                style={{ color: value === branch ? "#F2722D" : "inherit" }}
              >
                {label}
              </Dropdown.Item>
            ))}
          </DropMenu>
        </Drop>
        <Trigger onClick={() => setOpenModal((p) => !p)}>
          <i className={isOpenModal ? "xi-close" : "xi-bars"} />
        </Trigger>
        <Categories isOpenModal={isOpenModal}>
          {menues.map((menu, index) => (
            <Menu
              key={menu.name}
              onClick={() => { setOpenModal(false); handleScroll(index + 1) }}
            >
              {menu.name}
            </Menu>
          ))}
          <ModalHelper
            isOpenModal={isOpenModal}
            onClick={() => { setOpenModal(false); }}
          ></ModalHelper>
        </Categories>
      </Wrapper>
    </Container>
  );
}

export default Header;
