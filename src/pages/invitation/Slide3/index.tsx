import styled from "@emotion/styled";
// utils
import { copyToClipboard } from "@/utils/tools";
import { WEDDING } from "@/utils/constants";
// components
import { LuCopy } from "react-icons/lu";
import Calendar from "./Calendar";
import Navigation from "./Navigation";

export default function Slide3() {
  return (
    <Container>
      <h2>
        {WEDDING.fullDate}, <strong>{WEDDING.time}</strong>
      </h2>
      <h1
        style={{ marginBottom: 16 }}
        onClick={() => copyToClipboard(WEDDING.fullAddress)}
      >
        {WEDDING.address}
        <LuCopy size={16} style={{ marginLeft: 5, marginTop: -1.5 }} />
      </h1>
      <Calendar date={WEDDING.date} />
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
    cursor: pointer;
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
