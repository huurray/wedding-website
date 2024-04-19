import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Howl } from "howler";
import toast from "react-hot-toast";
// utils
import { SHARE_INFO } from "@/utils/constants";
// assets
import { TbMusic, TbMusicOff } from "react-icons/tb";
import { LuShare } from "react-icons/lu";

const sound = new Howl({
  src: ["/audio/back-sound.mp3"],
  volume: 0.7,
  html5: true,
});

export default function Header() {
  const theme = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);

  function toggleMusic() {
    if (isPlaying) {
      sound?.pause();
    } else {
      sound?.play();
    }
    setIsPlaying((prev) => !prev);
  }

  function handleVisibilityChange() {
    if (!isPlaying) return;
    if (document.visibilityState === "hidden") {
      sound?.pause();
    } else if (document.visibilityState === "visible") {
      sound?.play();
    }
  }

  async function share() {
    if (navigator?.share) {
      await navigator.share(SHARE_INFO);
    } else {
      toast("링크가 클립보드에 복사되었습니다.");
    }
  }

  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying]);

  const animationOptions = {
    type: "spring",
    stiffness: 260,
    damping: 20,
  };

  return (
    <Container>
      <Content>
        <MusicButton type="button" onClick={toggleMusic}>
          <AbsoluteDiv
            animate={{ y: isPlaying ? 0 : 24, opacity: isPlaying ? 1 : 0 }}
            transition={animationOptions}
            style={{ left: 36 }}
          >
            <span>음악 끄기</span>
          </AbsoluteDiv>
          <AbsoluteDiv
            animate={{ y: isPlaying ? -24 : 0, opacity: isPlaying ? 0 : 1 }}
            transition={animationOptions}
            style={{ left: 14 }}
          >
            <span>음악 켜기</span>
          </AbsoluteDiv>
          <motion.div
            style={{ left: 0 }}
            animate={{ x: isPlaying ? 4 : 66 }}
            transition={animationOptions}
            className="circle"
          >
            {isPlaying ? (
              <TbMusicOff size={15} color={theme.colors.gray400} />
            ) : (
              <TbMusic size={15} color={theme.colors.gray400} />
            )}
          </motion.div>
        </MusicButton>
        <ShareButton type="button" onClick={share}>
          <LuShare size={16} color={theme.colors.gray400} />
        </ShareButton>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
`;

const Content = styled.div`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  padding: 18px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
`;

const MusicButton = styled.button`
  width: 94px;
  height: 32px;
  border-radius: 99px;
  background-color: ${({ theme }) => theme.colors.gray50};
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.01), 0 1px 1px rgba(0, 0, 0, 0.03);

  & > .circle {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const AbsoluteDiv = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;

  span {
    white-space: nowrap;
    font-size: 12px;
  }
`;

const ShareButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02), 0 1px 1px rgba(0, 0, 0, 0.03);
`;
