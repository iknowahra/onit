import styled from "styled-components";
import Naver from "../assets/naver.svg";

type Props = {
  url?: string;
};

const Sns = styled.div<Props>`
  display: flex;
  a {
    width: calc(1rem * 2.4);
    height: calc(1rem * 2.4);
    background-color: #03c75a;
    border-radius: 0.2rem;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      i {
        color: ${({ theme }) => theme.color.lightGrey};
      }

      svg {
        fill: ${({ theme }) => theme.color.lightGrey};
      }
    }

    i {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.color.sub};
    }

    img {
      width: 1rem;
      height: 1rem;
      fill: ${({ theme }) => theme.color.sub};
    }
  }

`;

function NaverLogo({ url }: Props) {
  return (
    <Sns>
      <a href={url} target="_blank">
        <img src={Naver} alt="naverLogo" />
      </a>
    </Sns>
  );
}

export default NaverLogo;
