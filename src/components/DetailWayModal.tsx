import { atom, useAtom } from "jotai";
import styled from "@emotion/styled";
// components
import Modal from "./Modal";

export const isDetailWayModalOpenAtom = atom(false);
export default function DetailWayModal() {
  const [isOpen, setIsOpen] = useAtom(isDetailWayModalOpenAtom);

  return (
    <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
      <Container>
        <h2>지하철</h2>
        <p style={{ marginBottom: 12 }}>
          2, 5호선 영등포구청역 하차 4번 출구 도보 3분
        </p>
        <h2>버스</h2>
        <p style={{ marginBottom: 12 }}>
          영등포경찰서, 영등포구청역 하차 후 도보 이용
          <br />
          일반 : 5, 70-3
          <br />
          지선 : 5620, 6631, 6637
          <br />
          마을 : 영등포02, 12
        </p>
        <h2>승용차</h2>
        <p style={{ marginBottom: 4 }}>
          네비게이션 [서울 영등포구 당산동 3가 93-2] 검색
        </p>
        <h3>주차 2시간 무료</h3>
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  padding: 10px 0;

  & > h2 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 6px;
  }

  & > h3 {
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray600};
  }

  & > p {
    color: ${({ theme }) => theme.colors.gray500};
    font-size: 14px;
    line-height: 24px;
  }
`;
