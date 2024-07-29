import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
// store
import { useAtomValue } from "jotai";
import { mainIndexAtom } from "../index";
// utils
import { MOVIE } from "@/utils/constants";
// components
import { motion, useAnimationControls } from "framer-motion";
// assets
import LeafImg from "@/assets/leaf.jpg";

export default function Slide5() {
  const controls = useAnimationControls();
  const mainIndex = useAtomValue(mainIndexAtom);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [init, setInit] = useState(false);

  const active = mainIndex === 4;

  useEffect(() => {
    if (!init && active) {
      controls.start({ opacity: [0, 1] });
      setInit(true);
    }

    if (init && !active) {
      if (iframeRef.current) {
        const iframe = iframeRef.current;
        const iframeWindow = iframe.contentWindow;
        if (iframeWindow) {
          iframeWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        }
      }
    }
  }, [active, init]);

  return (
    <Container>
      <motion.div
        className="header"
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <img src={LeafImg} alt="이파리 이미지" />
        <span>저희의 영상을 소개합니다.</span>
      </motion.div>
      <motion.div
        className="video"
        animate={controls}
        transition={{ duration: 1 }}
      >
        <div className="video-responsive">
          <iframe
            ref={iframeRef}
            title={MOVIE.title}
            width="640"
            height="360"
            frameBorder="0"
            src={MOVIE.url}
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <div className="white-board" />
        </div>
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

  & > .header {
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    & > img {
      width: 20px;
      margin-right: 4px;
      filter: contrast(0.4);
    }

    & > span {
      font-size: 14px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.gray400};
    }
  }

  .video {
    width: calc(100% - 40px);

    .video-responsive {
      width: 100%;
      max-width: 100%;
      aspect-ratio: 16 / 9;
      position: relative;
      overflow: hidden;

      iframe {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        border: 0;
      }

      .white-board {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.background};
      }
    }
  }
`;
