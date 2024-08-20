import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Subject from '../../components/Subject';
import branchInfo, { iBranchInfo } from '../../assets/text/information';
import { useBranch } from '../../contexts/BranchContext';
import Branch from '../../components/Information';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0;
  padding-bottom: 20vh;

  @media (max-width: 768px) {
    padding: 1rem 0 6rem 0;
  }
`;

const Inner = styled.div`
  width: 70%;
  height: 100%;
  margin: auto;
  padding-bottom: 4rem;

  @media (max-width: 768px) {
    width: 90%;
    padding: 0;
  }
`;



function Information() {
  const [branch, _] = useBranch();
  const [info, setInfo] = useState<iBranchInfo>();


  useEffect(() => {
    setInfo(branchInfo[branch]);
  }, [branch]);

  return (
    <Wrapper id="menu7">
      <Inner>
        <Subject main="찾아오시는 길" sub={info?.name} />
        <Branch info={info} />
      </Inner>
    </Wrapper>
  );
}

export default Information;
