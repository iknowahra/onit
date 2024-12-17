import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useBranch } from "../contexts/BranchContext";
import eventOnedang from "../assets/1/event.webp";
import eventPyeongtaek from "../assets/2/event.webp";
import eventYeongdeungpo from "../assets/3/event.webp";
import eventWonju from "../assets/4/logo.webp";
import eventDaegu from "../assets/5/chilgok_event.webp";
import eventBugae from "../assets/6/bugae_event.webp";
import eventAnyang from "../assets/8/anyang_event.webp";
import styled from "styled-components";

interface Props {
  title: string;
  isOpen: boolean;
  handleModal: (handle: boolean, desireClose: boolean) => void;
}

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
>img {
  width: 100%;
}

  @media (max-width: 780px) {
    > img {
      width: 100%;
    }
  }
`;
const CheckStyle = styled(Form.Check)`
  @media (max-width: 780px) {
    font-size: 1rem;
    line-height: 1.7rem;
  }
`;

function EventModal({ title, isOpen, handleModal }: Props) {
  const [branch, _] = useBranch();
  const [close, setClose] = useState(0);
  const photos = {
    onedang: eventOnedang,
    pyeongtaek: eventPyeongtaek,
    yeongdeungpo: eventYeongdeungpo,
    wonju: eventWonju,
    daegu: eventDaegu,
    bugae: eventBugae,
    anyang: eventAnyang
  };
  const closeModal = (open: boolean, close24: boolean) => {
    handleModal(open, close24);
  };

  return (
    <Modal
      show={isOpen}
      onHide={() => closeModal(false, false)}
      dialogClassName="modal-auto"
      centered={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="event-modal-title">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ImgWrapper>
          <img src={photos[branch as keyof typeof photos]} alt="event" />
        </ImgWrapper>
        <CheckStyle
          type="checkbox"
          value={close}
          onChange={() => closeModal(false, true)}
          label="오늘 하루 이벤트 팝업 보지 않기"
        />
      </Modal.Body>
    </Modal>
  );
}

export default EventModal;
