import { useState } from "react";
import styled from "@emotion/styled";
// components
import Header from "./Header";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
// styles
import "swiper/css";
import "swiper/css/pagination";

export default function InvitationPage() {
  const [index, setIndex] = useState(0);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Header />
      <Swiper
        mousewheel
        direction="vertical"
        slidesPerView={1}
        modules={[Pagination, Mousewheel]}
        pagination={{ clickable: true }}
        style={{ width: "100%", height: "100%" }}
        onSlideChange={(data) => setIndex(data.activeIndex)}
      >
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide2 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide3 active={index === 2} />
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

const Container = styled(motion.div)`
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
