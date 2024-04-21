import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface Props {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
}
export default function Modal({ isOpen, close, children }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <Content onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={close}>
              <IoClose size={14} />
            </CloseButton>
            {children}
          </Content>
        </Overlay>
      )}
    </AnimatePresence>
  );
}

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 6px 6px 20px 20px;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: calc(100vw - 48px);
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  margin-left: auto;
  padding: 10px 10px 6px;
`;
