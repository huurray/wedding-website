import styled from "@emotion/styled";
import { useEffect, useState } from "react";
// store
import { useAtomValue } from "jotai";
import { mainIndexAtom } from "../index";
// utils
import { copyToClipboard } from "@/utils/tools";
import { WEDDING } from "@/utils/constants";
// components
import { LuCopy } from "react-icons/lu";
import Calendar from "./Calendar";
import Navigation from "./Navigation";
import { motion, useAnimationControls } from "framer-motion";

export default function Slide3() {
  const controls = useAnimationControls();
  const mainIndex = useAtomValue(mainIndexAtom);

  const [init, setInit] = useState(false);

  const active = mainIndex === 2;

  useEffect(() => {
    if (init) return;
    if (active) {
      controls.start({ y: [70, 0], opacity: [0, 1] });
      setInit(true);
    }
  }, [active, init]);

  return (
    <Container>
      <motion.div animate={controls} transition={{ duration: 0.3 }}>
        <h2>
          {WEDDING.fullDate}, <strong>{WEDDING.time}</strong>
        </h2>
        <h1 onClick={() => copyToClipboard(WEDDING.fullAddress)}>
          {WEDDING.address}
          <LuCopy size={14} style={{ marginLeft: 4, marginTop: 1 }} />
        </h1>
      </motion.div>
      <motion.div
        animate={controls}
        transition={{ duration: 0.5 }}
        style={{ width: "100%" }}
      >
        <Calendar date={WEDDING.date} />
      </motion.div>
      <motion.div animate={controls} transition={{ duration: 0.7 }}>
        <Navigation />
      </motion.div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    & > h1 {
      font-size: 16px;
      line-height: 32px;
      text-align: center;
      font-weight: 700;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    & > h2 {
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      font-weight: 500;

      & > strong {
        font-weight: 700;
      }
    }
  }
`;
