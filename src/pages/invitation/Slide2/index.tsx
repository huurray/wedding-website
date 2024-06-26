import { useEffect, useState } from "react";
import styled from "@emotion/styled";
// store
import { useAtomValue } from "jotai";
import { mainIndexAtom } from "../index";
// utils
import { BRIDE, GROOM } from "@/utils/constants";
// components
import { motion, useAnimationControls } from "framer-motion";
import { IoMdHeart } from "react-icons/io";
// assets
import ImageGroom from "@/assets/groom.jpg";
import ImageBride from "@/assets/bride.jpg";

export default function Slide2() {
  const controls = useAnimationControls();
  const mainIndex = useAtomValue(mainIndexAtom);

  const [init, setInit] = useState(false);

  const active = mainIndex === 1;

  useEffect(() => {
    if (init) return;
    if (active) {
      controls.start({ y: [100, 0], opacity: [0, 1] });
      setInit(true);
    }
  }, [active, init]);

  return (
    <Container>
      <motion.div animate={controls} transition={{ duration: 0.3 }}>
        <h1 style={{ marginBottom: 16 }}>
          저희 두 사람이
          <br />
          평생을 함께할
          <br />
          반려자가 되려 합니다.
        </h1>
      </motion.div>
      <motion.div animate={controls} transition={{ duration: 0.5 }}>
        <h1 style={{ marginBottom: 16 }}>
          그 서약의 자리에
          <br />
          소중한 분들을 모십니다.
        </h1>
      </motion.div>
      <motion.div animate={controls} transition={{ duration: 0.7 }}>
        <h1 style={{ marginBottom: 24 }}>
          자리하시어 축복해주시면
          <br />
          대단히 감사하겠습니다.
        </h1>
      </motion.div>
      <motion.div animate={controls} transition={{ duration: 0.9 }}>
        <Parents style={{ marginBottom: 12 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 2.5px",
            }}
          >
            <span>{GROOM.father.fullName[0]}</span>
            <span>{GROOM.father.fullName[1]}</span>
          </div>
          <div>·</div>
          <div>{GROOM.mother.fullName}</div>
          <div>의</div>
          <div>아들</div>
          <div>{GROOM.name}</div>
        </Parents>
        <Parents style={{ marginBottom: 32 }}>
          <div>{BRIDE.father.fullName}</div>
          <div>·</div>
          <div>{BRIDE.mother.fullName}</div>
          <div>의</div>
          <div>딸</div>
          <div>{BRIDE.name}</div>
        </Parents>
      </motion.div>
      <motion.div animate={controls} transition={{ duration: 1.1 }}>
        <Picture>
          <img src={ImageGroom} alt="image" />
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <IoMdHeart size={13} />
          </motion.div>
          <img src={ImageBride} alt="image" />
        </Picture>
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

  & > img {
    width: 70%;
  }

  & > div {
    & > h1 {
      font-size: 16px;
      line-height: 26px;
      text-align: center;
      color: ${({ theme }) => theme.colors.gray600};
    }
  }
`;

const Parents = styled.div`
  display: flex;
  align-items: center;
  margin-left: -4px;

  & > div {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray600};
    &:nth-of-type(1) {
      width: 46px;
      text-align: center;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.gray900};
    }
    &:nth-of-type(3) {
      width: 46px;
      text-align: center;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.gray900};
    }
    &:nth-of-type(5) {
      width: 46px;
      text-align: center;
    }
    &:nth-of-type(6) {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.gray900};
    }
  }
`;

const Picture = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > img {
    width: 130px;
    height: 168px;
    object-fit: cover;
    border-radius: 12px;
  }
`;
