import styled from "@emotion/styled";
// store
import { atom, useSetAtom } from "jotai";
// components
import Header from "./Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import ImageViewer from "@/components/ImageViewer";
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
      <ImageViewer />
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
    top: 95%;
    right: 18px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 2px;
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.gray700};
    opacity: 0.6;
    margin: 5px 0 !important;
    transition: all 0.3s ease-in-out;
  }

  .swiper-pagination-bullet-active {
    width: 40px;
    opacity: 1;
  }
`;
