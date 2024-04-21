import { useState } from "react";
import styled from "@emotion/styled";
import queryString from "query-string";
// utils
import { BRIDE, GROOM } from "@/utils/constants";
// components
import Skeleton from "react-loading-skeleton";
import { motion } from "framer-motion";
// assets
import Image2 from "@/assets/gallery/2.jpg";

export default function Slide1() {
  const { name } = queryString.parse(window.location.search);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <ImageContainer>
        {isLoading && (
          <Skeleton
            width={262}
            height={393}
            borderRadius={8}
            style={{ position: "absolute" }}
          />
        )}
        <img src={Image2} alt="hero" onLoad={() => setIsLoading(false)} />
      </ImageContainer>
      {name ? (
        <h1>
          {GROOM.name}과 {BRIDE.name}의
          <br />
          결혼식에 {name}님을
          <br />
          초대합니다.
          <br />
        </h1>
      ) : (
        <h1>
          {GROOM.name}과 {BRIDE.name}의
          <br />
          결혼식에 초대합니다.
          <br />
        </h1>
      )}
    </Container>
  );
}

const Container = styled(motion.div)`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-size: 16px;
    line-height: 28px;
    padding: 24px 24px 0;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  width: 262px;
  height: 393px;
  position: relative;

  & > div {
    position: absolute;
  }

  & > img {
    width: 262px;
    height: 393px;
    border-radius: 8px;
  }
`;
