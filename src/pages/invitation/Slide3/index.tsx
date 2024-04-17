import styled from "@emotion/styled";
// utils
import { copyAddressToClipboard } from "@/utils/tools";
// components
import { LuCopy } from "react-icons/lu";
import Calendar from "./Calendar";
import Navigation from "./Navigation";

interface IProps {
  active: boolean;
}
export default function Slide3({ active }: IProps) {
  return (
    <Container>
      <h2>
        2024년 8월 25일 일요일, <strong>오전 11시</strong>
      </h2>
      <h1 style={{ marginBottom: 16 }} onClick={copyAddressToClipboard}>
        더컨벤션 영등포 웨딩홀 2층, 다이너스티홀
        <LuCopy size={16} style={{ marginLeft: 5 }} />
      </h1>
      <Calendar date="2024-08-25" active={active} />
      <Navigation />
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

  & > h1 {
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    font-weight: 700;
    display: flex;
    align-items: center;
  }

  & > h2 {
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    font-weight: 500;

    & > strong {
      font-weight: 700;
    }
  }
`;
