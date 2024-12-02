import styled from "styled-components";
import { Dropdown } from "react-bootstrap";
import { useBranch } from "../contexts/BranchContext";
import { useNavigate } from "react-router-dom";

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
    const router = useNavigate();
    const [branch, setBranch] = useBranch();
    const branches = Object.keys(landingInfo.intro);
    return (
        <Drop>
            <DropToggle variant="secondary" id="dropdown-basic">
                {landingInfo.intro[branch].label}
            </DropToggle>
            <DropMenu>
                {branches.map((path) => (
                    <Dropdown.Item
                        onClick={() => setBranch(path)}
                        key={path}
                        disabled={path == '/'}
                        style={{
                            color: path === branch ? "#F2722D" : "inherit",
                            cursor: path == '/' ? "not-allowed" : "pointer",
                        }}
                    >
                        {landingInfo.intro[path].label}
                    </Dropdown.Item>
                ))}
            </DropMenu>
        </Drop>
    );
}

export default BranchDrop;
