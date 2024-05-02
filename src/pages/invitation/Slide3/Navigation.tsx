import styled from "@emotion/styled";
import toast from "react-hot-toast";
// utils
import { NAVIGATION } from "@/utils/constants";
// store
import { useSetAtom } from "jotai";
import { isDetailWayModalOpenAtom } from "@/components/DetailWayModal";
// assets
import NaverMapIcon from "@/assets/navigation/naver-map.png";
import KakaoMapIcon from "@/assets/navigation/kakao-map.png";
import TMapIcon from "@/assets/navigation/t-map.png";

type NavigationType = "naverMap" | "kakaoMap" | "tmap";
interface Props {
  style?: React.CSSProperties;
}
export default function Navigation({ style }: Props) {
  const setIsOpen = useSetAtom(isDetailWayModalOpenAtom);

  function navigateMap(type: NavigationType) {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      window.location.href = NAVIGATION[type].app;
    } else {
      if (NAVIGATION[type].web) {
        window.open(NAVIGATION[type].web, undefined, "noopener, noreferrer");
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
        <Button type="button" onClick={() => navigateMap("naverMap")}>
          <img src={NaverMapIcon} alt="naver-map" />
          <span>네이버 지도</span>
        </Button>
        <Button type="button" onClick={() => navigateMap("kakaoMap")}>
          <img src={KakaoMapIcon} alt="kakao-map" />
          <span>카카오 지도</span>
        </Button>
        <Button type="button" onClick={() => navigateMap("tmap")}>
          <img src={TMapIcon} alt="t-map" />
          <span>티맵</span>
        </Button>
        <Button type="button" onClick={showDetail}>
          <span>자세한 설명 및 주차</span>
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
  width: 300px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
`;

const Button = styled.button`
  width: 142px;
  height: 38px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray100}`};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.01), 0 1px 1px rgba(0, 0, 0, 0.01);

  & > img {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    margin-right: 8px;
  }

  & > span {
    width: 100%;
    font-size: 12px;
    font-weight: 500;
  }
`;
