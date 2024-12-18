import { useState } from "react";
import styled from "styled-components";

import Subject from "../../components/Subject";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import info, { iBranchInfoDetail } from "../../assets/text/information";
import Information from '../../components/Information'

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 2rem;
  background-color: ${({ theme }) => theme.color.lightGrey};

  @media (max-width: 780px) {
    padding: 0rem;
    width: 100%;
    height: auto;
  }
`;

const Inner = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .tab-content {
    /* Tab이랑 tab-content랑 동일 레벨이라 부모레벨에서 정의 */
    width: 100% !important;
  }
  .nav-tabs {
    font-size: 1rem !important;
  }
  .nav-link:not(.active) {
    color: ${({ theme }) => theme.color.main};
  }
`;

const TabsWrapper = styled(Tabs)`
width: 100%;
margin-bottom: 2rem;
@media (max-width: 780px) {
    margin-bottom: 0rem;
  }
`;
const TabWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  @media (max-width: 780px) {
  }
`;

function Location() {
  const [currBranch, setBranch] = useState<iBranchInfoDetail>(info['onedang']);

  return (
    <Wrapper id="home3">
      <Inner>
        <Subject
          main="지점안내"
          sub={`온잇 공유오피스는 현재 ${Object.keys(info).length}개의 지점이 있습니다.`}
        />
        <TabsWrapper
          defaultActiveKey={'onedang'}
        >
          {Object.entries(info).map(([path, { alias }]) => (
            <Tab key={path} eventKey={path} title={alias}>
              <TabWrapper>
                <Information info={info[path]} />
              </TabWrapper>
            </Tab>
          ))}
        </TabsWrapper>
      </Inner>
    </Wrapper>
  );
}

export default Location;
