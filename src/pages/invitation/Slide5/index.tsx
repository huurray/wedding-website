import { useState } from "react";
import styled from "@emotion/styled";
// utils
import { copyToClipboard } from "@/utils/tools";
import { GROOM, BRIDE } from "@/utils/constants";
// components
import { LuCopy } from "react-icons/lu";
import Accordion from "@/components/Accordion";
// assets
import kakaoPayLogo from "@/assets/kakao-pay-logo.png";

export default function Slide5() {
  const [accordionIndex, setAccordionIndex] = useState(-1);

  function toggleAccordion(index: number) {
    if (accordionIndex === index) {
      setAccordionIndex(-1);
    } else {
      setAccordionIndex(index);
    }
  }

  return (
    <Container>
      <h1 style={{ marginBottom: 16 }}>마음 전하실 곳</h1>
      <p style={{ marginBottom: 12 }}>
        직접 축하를 전하지 못하는 분들을 위해
        <br />
        계좌번호를 기재하였습니다.
        <br />
        넓은 마음으로 양해 부탁드립니다.
      </p>
      <p style={{ marginBottom: 20 }}>
        전해주시는 진심은 소중하게 간직하여
        <br />
        좋은 부부의 모습으로 보답하겠습니다.
      </p>
      <Accordion
        title="신랑측"
        isOpen={accordionIndex === 0}
        onClick={() => toggleAccordion(0)}
      >
        <AccordionContent>
          <div className="left">
            <p>
              <strong>신랑</strong> {GROOM.fullName}
            </p>
            <p>{GROOM.account}</p>
          </div>
          <div className="right">
            <a
              href={GROOM.kakaoAccountLink}
              className="kakao-pay"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={kakaoPayLogo} alt="kakao-pay-logo" />
            </a>
            <button
              type="button"
              className="copy"
              onClick={() => copyToClipboard(GROOM.account)}
            >
              <LuCopy size={12} />
              <span>복사</span>
            </button>
          </div>
        </AccordionContent>
        <AccordionContent>
          <div className="left">
            <p>
              <strong>아버지</strong> {GROOM.father.fullName}
            </p>
            <p>{GROOM.father.account}</p>
          </div>
          <div className="right">
            {GROOM.father.kakaoAccountLink && (
              <a
                href={GROOM.father.kakaoAccountLink}
                className="kakao-pay"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={kakaoPayLogo} alt="kakao-pay-logo" />
              </a>
            )}
            <button
              type="button"
              className="copy"
              onClick={() => copyToClipboard(GROOM.father.account)}
            >
              <LuCopy size={12} />
              <span>복사</span>
            </button>
          </div>
        </AccordionContent>
        <AccordionContent>
          <div className="left">
            <p>
              <strong>어머니</strong> {GROOM.mother.fullName}
            </p>
            <p>{GROOM.mother.account}</p>
          </div>
          <div className="right">
            {GROOM.mother.kakaoAccountLink && (
              <a
                href={GROOM.mother.kakaoAccountLink}
                className="kakao-pay"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={kakaoPayLogo} alt="kakao-pay-logo" />
              </a>
            )}
            <button
              type="button"
              className="copy"
              onClick={() => copyToClipboard(GROOM.mother.account)}
            >
              <LuCopy size={12} />
              <span>복사</span>
            </button>
          </div>
        </AccordionContent>
      </Accordion>
      <Accordion
        title="신부측"
        isOpen={accordionIndex === 1}
        onClick={() => toggleAccordion(1)}
      >
        <AccordionContent>
          <div className="left">
            <p>
              <strong>신부</strong> {BRIDE.fullName}
            </p>
            <p>{BRIDE.account}</p>
          </div>
          <div className="right">
            <a
              href={BRIDE.kakaoAccountLink}
              className="kakao-pay"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={kakaoPayLogo} alt="kakao-pay-logo" />
            </a>
            <button
              type="button"
              className="copy"
              onClick={() => copyToClipboard(BRIDE.account)}
            >
              <LuCopy size={12} />
              <span>복사</span>
            </button>
          </div>
        </AccordionContent>
        <AccordionContent>
          <div className="left">
            <p>
              <strong>아버지</strong> {BRIDE.father.fullName}
            </p>
            <p>{BRIDE.father.account}</p>
          </div>
          <div className="right">
            {BRIDE.father.kakaoAccountLink && (
              <a
                href={BRIDE.father.kakaoAccountLink}
                className="kakao-pay"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={kakaoPayLogo} alt="kakao-pay-logo" />
              </a>
            )}
            <button
              type="button"
              className="copy"
              onClick={() => copyToClipboard(BRIDE.father.account)}
            >
              <LuCopy size={12} />
              <span>복사</span>
            </button>
          </div>
        </AccordionContent>
        <AccordionContent>
          <div className="left">
            <p>
              <strong>어머니</strong> {BRIDE.mother.fullName}
            </p>
            <p>{BRIDE.mother.account}</p>
          </div>
          <div className="right">
            {BRIDE.mother.kakaoAccountLink && (
              <a
                href={BRIDE.mother.kakaoAccountLink}
                className="kakao-pay"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={kakaoPayLogo} alt="kakao-pay-logo" />
              </a>
            )}
            <button
              type="button"
              className="copy"
              onClick={() => copyToClipboard(BRIDE.mother.account)}
            >
              <LuCopy size={12} />
              <span>복사</span>
            </button>
          </div>
        </AccordionContent>
      </Accordion>
      <Copyright>© 2024. Huurray. All right reserved.</Copyright>
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
    line-height: 28px;
    text-align: center;
    font-weight: 700;
  }

  & > p {
    font-size: 15px;
    line-height: 26px;
    text-align: center;
  }
`;

const AccordionContent = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;

  & > .left {
    width: 100%;

    & > p {
      font-size: 15px;
      line-height: 26px;

      strong {
        font-weight: 700;
      }
    }
  }

  & > .right {
    & > .kakao-pay {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 62px;
      height: 25px;
      background-color: ${({ theme }) => theme.colors.yellow};
      border-radius: 4px;
      margin-bottom: 4px;

      & > img {
        width: 32px;
        margin-left: 2px;
        margin-top: 1px;
      }
    }

    & > .copy {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 62px;
      height: 25px;
      border: ${({ theme }) => `1px solid ${theme.colors.gray200}`};
      border-radius: 4px;

      & > svg {
        min-width: 12px;
      }

      & > span {
        font-size: 12px;
        margin-left: 3px;
        margin-top: 1px;
        white-space: nowrap;
      }
    }
  }

  &:last-of-type {
    margin-bottom: 8px;
  }
`;

const Copyright = styled.div`
  position: absolute;
  bottom: 12px;
  left: 20px;
  font-size: 12px;
  line-height: 28px;
`;
