import { ReactNode } from "react";

import {
  createTheme,
  SxProps,
  Typography as TypographyBase,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { TypographyVariant } from "./typography.types";

type Props = {
  children: ReactNode;
  className?: string;
  styles?: SxProps;
  variant: TypographyVariant;
};

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h6: {
      fontWeight: 400,
    },
  },
});

export const Typography = ({ children, className, styles, variant }: Props) => (
  <ThemeProvider theme={theme}>
    <TypographyBase className={className} sx={styles} variant={variant}>
      {children}
    </TypographyBase>
  </ThemeProvider>
);
