import type { Theme } from "@emotion/react";

const sizes = {
  sidePadding: "24px",
  maxWidth: "460px",
  headerHeight: "68px",
};

const colors = {
  gray50: "#f5f5f5",
  gray100: "#f0f0f5",
  gray200: "#cecedd",
  gray300: "#9f9fb0",
  gray400: "#7f7f8d",
  gray500: "#6a6a7b",
  gray600: "#4f4f5e",
  gray700: "#3a3a44",
  gray800: "#25252c",
  gray900: "#17171c",
  background: "#FAFAFA",
  white: "#FFFFFF",
  black: "#22262B",
  green: "#09D159",
  red: "#FF3737",
  beige: "#b59274",
  blue: "#799fd1",
  orange: "#FF7A1A",
  yellow: "#FFC",
  purple: "#7000FF",
};

const theme: Theme = {
  sizes,
  colors,
};

export type ColorsTypes = typeof colors;
export type SizesTypes = typeof sizes;

export default theme;
