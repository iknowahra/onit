import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useBranch } from "../contexts/BranchContext";
import event1 from "../assets/1/event.jpeg";
import event2 from "../assets/2/event.jpeg";
import event3 from "../assets/3/event.jpg";
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

  @media (max-width: 768px) {
    > img {
      width: 100%;
    }
  }
`;
const CheckStyle = styled(Form.Check)`
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7rem;
  }
`;

function EventModal({ title, isOpen, handleModal }: Props) {
  const [branch, _] = useBranch();
  const [close, setClose] = useState(0);
  const photos = [event1, event2, event3];
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
          <img src={photos[branch]} alt="event" />
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
