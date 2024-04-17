import "@emotion/react";
import { SizesTypes, ColorsTypes } from "./theme";

declare module "@emotion/react" {
  export interface Theme {
    sizes: SizesTypes;
    colors: ColorsTypes;
  }
}
