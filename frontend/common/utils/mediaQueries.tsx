import { ComponentProps } from "react";
import { css, SerializedStyles } from "@emotion/react";

import Responsive from "react-responsive";
import { Breakpoint } from "../types/breakpoint";

type MediaQueries = Record<
  Breakpoint,
  (cssHelper: SerializedStyles) => SerializedStyles
>;

type MediaQueryProps = ComponentProps<typeof Responsive>;

export const breakpoints: Record<Breakpoint, number> = {
  large: 992,
  lg: 1024,
  medium: 768,
  mobileMax: 991,
  small: 576,
  xLarge: 1200,
  xxLarge: 1280,
  xxxLarge: 1400,
  xxxxLarge: 1512,
};

export const mq = Object.keys(breakpoints).reduce<MediaQueries>(
  (acc, _label) => {
    const prefix = "min-width:";
    const suffix = "px";
    const label = _label as Breakpoint;

    acc[label] = (cls: any) => css`
      @media (${prefix + breakpoints[label] + suffix}) {
        ${cls};
      }
    `;

    return acc;
  },
  {} as MediaQueries,
);

export const Mobile = (props: MediaQueryProps) => (
  <Responsive {...props} maxWidth={breakpoints.small} />
);

export const MobileMax = (props: MediaQueryProps) => (
  <Responsive {...props} maxWidth={breakpoints.mobileMax} />
);

export const Tablet = (props: MediaQueryProps) => (
  <Responsive {...props} minWidth={breakpoints.medium} />
);

export const Desktop = (props: MediaQueryProps) => (
  <Responsive {...props} minWidth={breakpoints.large} />
);

export const DesktopLarge = (props: MediaQueryProps) => (
  <Responsive {...props} minWidth={breakpoints.xLarge} />
);
