import React from 'react';
import styled from "styled-components";

interface IModalComponent {
    onClick: () => void;
    children: React.ReactNode;
}

const ModalComponent:React.FC<IModalComponent> = ({ onClick, children }) => {
    return (
        <Modal
            onClick={onClick}>
            <Backdrop onClick={(e) => e.stopPropagation()}>
                {children}
            </Backdrop>
        </Modal>
    );
}
export default ModalComponent;

const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Backdrop = styled.div`
  border-radius: 40px;
  padding: 0 20px;
  z-index: 20;
  position: relative;
`;
