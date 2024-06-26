import styled from "@emotion/styled";
import { useEffect, useState } from "react";
// store
import { useAtom, useAtomValue } from "jotai";
import { ImageViewerAtom } from "@/components/ImageViewer";
import { mainIndexAtom } from "../index";
// components
import { motion, useAnimationControls } from "framer-motion";
// assets
import Image1 from "@/assets/gallery/1.jpg";
import Image3 from "@/assets/gallery/3.jpg";
import Image4 from "@/assets/gallery/4.jpg";
import Image5 from "@/assets/gallery/5.jpg";
import Image6 from "@/assets/gallery/6.jpg";
import Image7 from "@/assets/gallery/7.jpg";
import Image8 from "@/assets/gallery/8.jpg";
import Image9 from "@/assets/gallery/9.jpg";
import Image10 from "@/assets/gallery/10.jpg";
import Image11 from "@/assets/gallery/11.jpg";
import Image12 from "@/assets/gallery/12.jpg";
import Image13 from "@/assets/gallery/13.jpg";
import Image14 from "@/assets/gallery/14.jpg";
import Image15 from "@/assets/gallery/15.jpg";

const imageFiles = [
  Image1,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
];
const horizontalIndexes = [2, 4, 9, 11];
export default function Slide4() {
  const controls = useAnimationControls();
  const mainIndex = useAtomValue(mainIndexAtom);
  const [imageViewer, setImageViewer] = useAtom(ImageViewerAtom);

  const [init, setInit] = useState(false);
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);

  const active = mainIndex === 3;

  function handleClick(index: number) {
    setImageViewer({ index, show: !imageViewer.show });
  }

  useEffect(() => {
    if (init) return;
    if (active) {
      controls.start({ x: [50, 0], opacity: [0, 1] });
      setInit(true);
    }
  }, [active, init]);

  // 이미지 프리패칭
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    imageFiles.forEach((src) => {
      const img = new Image();
      img.src = src;
      images.push(img);
    });
    setLoadedImages(images);
  }, []);

  return (
    <Container>
      <Grid>
        {loadedImages.map((image, i) => {
          const isHorizontal = horizontalIndexes.includes(i);
          return (
            <motion.div
              key={i}
              animate={controls}
              onClick={() => handleClick(i)}
              transition={{ duration: 0.1 * (i + 1) }}
            >
              <img
                src={image.src}
                alt={`image-${i + 1}`}
                style={{ width: 90, height: isHorizontal ? 58 : 125 }}
              />
            </motion.div>
          );
        })}
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  column-count: 3;
  column-gap: 8px;
  margin-bottom: -8px;

  & > div {
    break-inside: avoid;
    margin-bottom: 8px;

    & > img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      object-fit: cover;
    }
  }
`;
