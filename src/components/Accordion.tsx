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
}
export default function Accordion({
  title,
  isOpen,
  onClick,
  children,
  style,
}: Props) {
  return (
    <Container style={style}>
      <div className="header" onClick={onClick}>
        <p>{title}</p>
        <motion.div
          style={{ display: "inline-block" }}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          <FiChevronDown />
        </motion.div>
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
  width: 320px;

  & > .header {
    height: 40px;
    padding: 0 8px;
    border: ${({ theme }) => `1px solid ${theme.colors.gray200}`};
    border-radius: 4px;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    cursor: pointer;

    & > p {
      width: 100%;
      font-size: 15px;
      text-align: center;
    }
  }

  & > .content {
    overflow: hidden;
  }
`;
