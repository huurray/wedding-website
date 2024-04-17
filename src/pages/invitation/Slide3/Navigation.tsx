import styled from "@emotion/styled";
import toast from "react-hot-toast";
// assets
import NaverMapIcon from "@/assets/navigation/naver-map.png";
import KakaoMapIcon from "@/assets/navigation/kakao-map.png";
import TMapIcon from "@/assets/navigation/t-map.png";

type NavigationType = "naverMap" | "kakaoMap" | "tmap";
interface Props {
  style?: React.CSSProperties;
}
export default function Navigation({ style }: Props) {
  const links = {
    naverMap: {
      app: "nmap://place?id=1241035074&appname=com.example.app",
      web: "https://map.naver.com/p/entry/place/1241035074?placePath=%2Fhome&c=15.00,0,0,0,dh",
    },
    kakaoMap: {
      app: "kakaomap://place?id=871883439",
      web: "https://map.kakao.com/?map_type=TYPE_MAP&itemId=871883439&urlLevel=3&urlX=477623&urlY=1118680",
    },
    tmap: {
      app: `tmap://route?rGoX=126.89877421551711&rGoY=37.5266837935539&rGoName=더컨벤션 영등포`,
      web: "",
    },
  };

  function navigateMap(type: NavigationType) {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      window.location.href = links[type].app;
    } else {
      if (links[type].web) {
        window.open(links[type].web, undefined, "noopener, noreferrer");
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
          <p>자세한 오시는 길</p>
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
  width: 322px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray200}`};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  width: 160px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 32px;

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
  }

  & > p {
    width: 100%;
    font-size: 12px;
  }
`;
