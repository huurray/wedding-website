import styled from "@emotion/styled";
// components
import { motion } from "framer-motion";
import { IoMdHeart } from "react-icons/io";
// assets
import heroImg from "@/assets/hero.jpg";

export default function Slide2() {
  return (
    <Container>
      <h1 style={{ marginBottom: 16 }}>
        저희 두 사람이
        <br />
        평생을 함께할
        <br />
        반려자가 되려 합니다.
      </h1>
      <h1 style={{ marginBottom: 16 }}>
        그 서약의 자리에
        <br />
        소중한 분들을 모십니다.
      </h1>
      <h1 style={{ marginBottom: 32 }}>
        자리하시어 축복해주시면
        <br />
        대단히 감사하겠습니다.
      </h1>
      <Parents style={{ marginBottom: 16 }}>
        <div>허 환</div>
        <div>·</div>
        <div>김인숙</div>
        <div>의</div>
        <div>아들</div>
        <div>준혁</div>
      </Parents>
      <Parents style={{ marginBottom: 40 }}>
        <div>신우균</div>
        <div>·</div>
        <div>양명은</div>
        <div>의</div>
        <div>딸</div>
        <div>승아</div>
      </Parents>
      <Picture>
        <img src={heroImg} alt="image" />
        <IoMdHeart size={13} />
        <img src={heroImg} alt="image" />
      </Picture>
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

  & > h1 {
    font-size: 16px;
    line-height: 32px;
    text-align: center;
  }
`;

const Parents = styled(motion.div)`
  display: flex;
  align-items: center;

  & > div {
    &:nth-of-type(1) {
      width: 46px;
      text-align: center;
      font-weight: 700;
    }
    &:nth-of-type(3) {
      width: 46px;
      text-align: center;
      font-weight: 700;
    }
    &:nth-of-type(5) {
      width: 46px;
      text-align: center;
    }
    &:nth-of-type(6) {
      font-weight: 700;
    }
  }
`;

const Picture = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > img {
    width: 152px;
    border-radius: 12px;
  }
`;
