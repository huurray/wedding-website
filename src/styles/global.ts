import { css } from "@emotion/react";

export default css`
  * {
    font-family: "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #17171c;
  }

  body {
    background-color: #f2f3ed;
  }

  &::-webkit-scrollbar {
    width: 3px;
    height: 3px;
    @media (max-width: 480px) {
      display: none;
    }
  }

  &::-webkit-scrollbar-thumb {
    background: #999;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }
`;
