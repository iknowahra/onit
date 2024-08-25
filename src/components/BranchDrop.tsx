import styled from "styled-components";
import { Dropdown } from "react-bootstrap";
import { useBranch } from "../contexts/BranchContext";


import landingInfo from "../assets/text/landing";

const Drop = styled(Dropdown)`
  @media (max-width: 780px) {
    /* display: none; */
  }
`;
const DropToggle = styled(Dropdown.Toggle)`
  margin-top: 1rem;
  width: 15rem;
  height: 3rem;
  font-size: 1rem;
`;

const DropMenu = styled(Dropdown.Menu)`
  width: 15rem;
  font-size: "0.8rem";
  text-align: "center";
`;


function BranchDrop() {
    const [branch, setBranch] = useBranch();
    return (
        <Drop>
            <DropToggle variant="secondary" id="dropdown-basic">
                {landingInfo.branches.find(({ value }) => value === branch)?.label}
            </DropToggle>
            <DropMenu>
                {landingInfo.branches.map(({ label, value }) => (
                    <Dropdown.Item
                        onClick={() => { setBranch(value) }}
                        key={value}
                        disabled={value < 0}
                        style={{
                            color: value === branch ? "#F2722D" : "inherit",
                            cursor: value < 0 ? "not-allowed" : "pointer",
                        }}
                    >
                        {label}
                    </Dropdown.Item>
                ))}
            </DropMenu>
        </Drop>
    );
}

export default BranchDrop;
