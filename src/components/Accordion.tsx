import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
// components
import { FiChevronDown } from "react-icons/fi";

interface Props {
  title: string;
  isOpen: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
}
export default function Accordion({
  title,
  isOpen,
  onClick,
  children,
  style,
  headerStyle,
}: Props) {
  return (
    <Container style={style}>
      <div className="header" onClick={onClick} style={headerStyle}>
        <p>{title}</p>
        <AbsoluteDiv animate={{ rotate: isOpen ? 180 : 0, y: isOpen ? -2 : 0 }}>
          <FiChevronDown />
        </AbsoluteDiv>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.section
            className="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;

  & > .header {
    height: 36px;
    padding: 0 12px;
    border: ${({ theme }) => `1px solid ${theme.colors.gray200}`};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    cursor: pointer;
    position: relative;

    & > p {
      width: 100%;
      font-size: 15px;
      text-align: center;
      font-weight: 500;
    }
  }

  & > .content {
    overflow: hidden;
  }
`;

const AbsoluteDiv = styled(motion.div)`
  position: absolute;
  top: 12px;
  right: 10px;
`;
