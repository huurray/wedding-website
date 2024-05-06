import { atom, useAtom } from "jotai";
import styled from "@emotion/styled";
// components
import Modal from "./Modal";
// assets
import { IoSubwayOutline } from "react-icons/io5";
import { IoBusOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { LuParkingCircle } from "react-icons/lu";
import ImagePoint from "@/assets/point.png";

export const isDetailWayModalOpenAtom = atom(false);
export default function DetailWayModal() {
  const [isOpen, setIsOpen] = useAtom(isDetailWayModalOpenAtom);

  return (
    <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
      <Container>
        <div className="title">
          <IoSubwayOutline size={16} />
          <h2>지하철</h2>
        </div>
        <p>2,5호선 영등포구청역 4번출구(영등포경찰서 방면)</p>
        <div className="divider-line" />
        <div className="title">
          <IoBusOutline size={16} />
          <h2>버스</h2>
        </div>
        <p>
          영등포경찰서, 영등포구청역 하차 후 도보 이용
          <br />
          일반 : 5, 70-3
          <br />
          지선 : 5620, 6631, 6637, 7612
          <br />
          마을 : 영등포02, 12
        </p>
        <div className="divider-line" />
        <div className="title">
          <IoCarSportOutline size={16} />
          <h2>승용차</h2>
        </div>
        <p style={{ marginBottom: 6 }}>
          네비게이션 [서울 영등포구 당산동 3가 93-2] 검색
        </p>
        <div className="divider-line" />
        <div className="title">
          <LuParkingCircle size={16} />
          <h2>주차</h2>
        </div>
        <h3 style={{ marginBottom: 6 }}>
          <span className="highlight">웨딩홀 지하 주차장 1,2층</span>
          <br />
          <span className="highlight">웨딩홀 맞은편 공영주차장</span> 이용가능
          <div className="park-ticket">
            <p>
              <img src={ImagePoint} alt="point" />
              주차권 수령: 3층 연회장 입구<span>(2시간 무료)</span>
            </p>
          </div>
        </h3>
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  padding: 8px 0 12px;

  & > .title {
    display: flex;
    align-items: center;
    margin-bottom: 7px;

    & > svg {
      margin-top: -1px;
      margin-right: 4px;

      circle,
      rect,
      path {
        color: ${({ theme }) => theme.colors.beige};
      }
    }

    & > h2 {
      font-size: 16px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.beige};
    }
  }

  & > h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.gray600};

    & > .highlight {
      display: inline;
      box-shadow: inset 0 -10px 0 #fff8b2;
    }

    & > .park-ticket {
      display: flex;
      align-items: center;
      margin-top: 4px;

      & > p {
        font-size: 17px;
        font-weight: 600;
        line-height: 24px;
        position: relative;

        & > img {
          position: absolute;
          top: -8px;
          right: -32px;
          width: 32px;
          margin-right: 4px;
        }

        & > span {
          font-size: 14px;
        }
      }
    }
  }

  & > p {
    color: ${({ theme }) => theme.colors.gray500};
    font-size: 14px;
    line-height: 22px;
  }

  & > .divider-line {
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray50};
    margin: 14px 8px 14px 0;
  }
`;
