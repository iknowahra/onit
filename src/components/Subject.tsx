import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.5rem 0;
`;

const Main = styled.h2`
  padding-bottom: 2rem;
  position: relative;

  ::after {
    content: '';
    width: 5rem;
    height: 0.4rem;
    background: linear-gradient(to right, #f2722d, orange, grey);
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media (max-width: 780px) {
    text-align: center;
    line-height: 2.4rem;
  }
`;
const Sub = styled.p`
  font-size: 0.9em;
  margin-top: 1rem;

  @media (max-width: 780px) {
    text-align: center;
  }
`;

function Subject({ main, sub }: SubjectProps) {
  return (
    <Container>
      <Main>{main}</Main>
      {sub && <Sub>{sub}</Sub>}
    </Container>
  );
}

type SubjectProps = {
  main: string;
  sub?: string;
};

export default Subject;
