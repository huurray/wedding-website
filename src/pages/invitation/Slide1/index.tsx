import styled from "@emotion/styled";
// assets
import heroImg from "@/assets/hero.jpg";

export default function Slide1() {
  return (
    <Container>
      <img src={heroImg} alt="hero" />
      <h1>
        준혁과 승아의
        <br />
        결혼식에 초대합니다.
      </h1>
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
    border-radius: 8px;
  }

  & > h1 {
    font-size: 16px;
    line-height: 28px;
    padding: 24px;
    text-align: center;
    background-color: #fcfcfc;
  }
`;
