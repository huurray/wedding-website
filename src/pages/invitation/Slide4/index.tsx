import styled from "@emotion/styled";
// store
import { useAtom } from "jotai";
import { ImageViewerAtom } from "@/components/ImageViewer";
// assets
import Image1 from "@/assets/gallery/1.jpg";
// import Image2 from "@/assets/gallery/2.jpg";
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

export default function Slide4() {
  const images = [
    Image1,
    // Image2, 히어로로 사용하여 제외.
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

  const [imageViewer, setImageViewer] = useAtom(ImageViewerAtom);

  function handleClick(index: number) {
    setImageViewer({ index, show: !imageViewer.show });
  }

  return (
    <Container>
      <Grid>
        {images.map((image, i) => (
          <div key={i} onClick={() => handleClick(i)}>
            <img src={image} alt={`image-${i + 1}`} />
          </div>
        ))}
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
  padding: 20px;
`;

const Grid = styled.div`
  column-count: 3;
  column-gap: 8px;

  & > div {
    break-inside: avoid;
    margin-bottom: 8px;

    & > img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
  }
`;
