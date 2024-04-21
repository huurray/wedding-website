import styled from "@emotion/styled";
// store
import { atom, useSetAtom } from "jotai";
// components
import Header from "./Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import ImageViewer from "@/components/ImageViewer";
import DetailWayModal from "@/components/DetailWayModal";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
// styles
import "swiper/css";
import "swiper/css/pagination";

export const mainIndexAtom = atom(0);
export default function InvitationPage() {
  const setMainIndex = useSetAtom(mainIndexAtom);

  return (
    <Container>
      <ImageViewer />
      <DetailWayModal />
      <Header />
      <Swiper
        mousewheel
        direction="vertical"
        slidesPerView={1}
        modules={[Pagination, Mousewheel]}
        pagination={{ clickable: true }}
        style={{ width: "100%", height: "100%" }}
        onSlideChange={(data) => setMainIndex(data.activeIndex)}
      >
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide2 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide3 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide4 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide5 />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  width: 100%;
  height: 100dvh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};

  .swiper-pagination {
    top: unset;
    bottom: 0;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .swiper-pagination-bullet {
    width: 14px;
    height: 2px;
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.gray700};
    opacity: 0.6;
    margin: 3px 0 !important;
    transition: all 0.3s ease-in-out;
  }

  .swiper-pagination-bullet-active {
    width: 24px;
    opacity: 1;
  }
`;
