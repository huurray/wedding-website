import styled from "@emotion/styled";
import toast from "react-hot-toast";
// utils
import { NAVIGATION } from "@/utils/constants";
import { navigateExternal } from "@/utils/tools";
// store
import { useSetAtom } from "jotai";
import { isDetailWayModalOpenAtom } from "@/components/DetailWayModal";
// assets
import NaverMapIcon from "@/assets/navigation/naver-map.png";
import KakaoMapIcon from "@/assets/navigation/kakao-map.png";
import TMapIcon from "@/assets/navigation/t-map.png";
import { useTheme } from "@emotion/react";

type NavigationType = "naverMap" | "kakaoMap" | "tmap";
interface Props {
  style?: React.CSSProperties;
}
export default function Navigation({ style }: Props) {
  const theme = useTheme();

  const setIsOpen = useSetAtom(isDetailWayModalOpenAtom);

  const MAX_WIDTH = Number(theme.sizes.maxWidth.split("px")[0]);
  const SCREEN_WIDTH =
    window.screen.width > MAX_WIDTH ? MAX_WIDTH : window.screen.width;
  const BUTTON_WIDTH = (SCREEN_WIDTH - 68) / 2;

  function navigateMap(type: NavigationType) {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.screen.width <= MAX_WIDTH;

    if (isMobile) {
      navigateExternal(NAVIGATION[type].app);
    } else {
      if (NAVIGATION[type].web) {
        navigateExternal(NAVIGATION[type].web);
      } else {
        toast("모바일 환경에서 이용가능합니다.");
      }
    }
  }

  function showDetail() {
    setIsOpen(true);
  }

  return (
    <Container style={style}>
      <Content>
        <Button
          type="button"
          onClick={showDetail}
          style={{ width: BUTTON_WIDTH }}
        >
          <p>자세한 설명 및 주차</p>
        </Button>
        <Button
          type="button"
          onClick={() => navigateMap("naverMap")}
          style={{ width: BUTTON_WIDTH }}
        >
          <img src={NaverMapIcon} alt="naver-map" />
          <span>네이버 지도</span>
        </Button>
        <Button
          type="button"
          onClick={() => navigateMap("kakaoMap")}
          style={{ width: BUTTON_WIDTH }}
        >
          <img src={KakaoMapIcon} alt="kakao-map" />
          <span>카카오 지도</span>
        </Button>
        <Button
          type="button"
          onClick={() => navigateMap("tmap")}
          style={{ width: BUTTON_WIDTH }}
        >
          <img src={TMapIcon} alt="t-map" />
          <span>티맵</span>
        </Button>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
`;

const Button = styled.button`
  height: 38px;
  display: flex;
  align-items: center;
  border: ${({ theme }) => `1px solid ${theme.colors.gray100}`};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.01), 0 1px 1px rgba(0, 0, 0, 0.01);

  & > img {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    margin-left: 20px;
    margin-right: 8px;
  }

  & > span {
    width: 100%;
    font-size: 13px;
    font-weight: 500;
    margin-right: 20px;
  }

  & > p {
    width: 100%;
    font-size: 13px;
    font-weight: 500;
    margin: 0 4px;
    font-weight: 600;
  }
`;
