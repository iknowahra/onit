import React, { useEffect, createContext } from 'react';
import styled from 'styled-components';
import { HashRouter as Router } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Main from './layouts/Router';
import { BranchProvider } from './contexts/BranchContext';
import ScrollToTop from './components/ScrollToTop';

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`;

// ***************************************************************************************************************************
const BranchContext = createContext(0);

function App() {
  useEffect(() => {
    AOS.init({
      delay: 50,
      offset: 80,
      duration: 2000,
      animatedClassName: 'aos-animate',
      once: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <BranchProvider>
      <Router>
        <ScrollToTop />
        <Wrapper>
          <Main />
        </Wrapper>
      </Router>
    </BranchProvider>
  );

}

export default App;
