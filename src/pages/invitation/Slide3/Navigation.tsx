import styled from "@emotion/styled";
import toast from "react-hot-toast";
// utils
import { NAVIGATION } from "@/utils/constants";
// assets
import NaverMapIcon from "@/assets/navigation/naver-map.png";
import KakaoMapIcon from "@/assets/navigation/kakao-map.png";
import TMapIcon from "@/assets/navigation/t-map.png";

type NavigationType = "naverMap" | "kakaoMap" | "tmap";
interface Props {
  style?: React.CSSProperties;
}
export default function Navigation({ style }: Props) {
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
    toast("준비중입니다.");
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
          <span>자세한 오시는 길</span>
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
  width: 280px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray200}`};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  width: 139px;
  height: 38px;
  display: flex;
  align-items: center;
  padding: 0 22px;

  &:nth-of-type(1),
  &:nth-of-type(2) {
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray200}`};
  }

  &:nth-of-type(1),
  &:nth-of-type(3) {
    border-right: ${({ theme }) => `1px solid ${theme.colors.gray200}`};
  }

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
