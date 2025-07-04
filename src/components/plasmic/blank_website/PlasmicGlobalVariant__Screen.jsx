/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export const ScreenContext = React.createContext(
  "PLEASE_RENDER_INSIDE_PROVIDER"
);

export const useScreenVariants = createUseScreenVariants(true, {
  mobileOnly: "(min-width:0px) and (max-width:768px)",
  midsize: "(max-width:1200px)",
});

export default ScreenContext;
/* prettier-ignore-end */
