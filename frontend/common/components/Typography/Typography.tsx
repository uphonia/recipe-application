import { ReactNode } from "react";

import {
  createTheme,
  SxProps,
  Typography as TypographyBase,
} from "@mui/material";
import { TypographyVariant } from "./typography.types";
import { ThemeProvider } from "@mui/material/styles";

type Props = {
  children: ReactNode;
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

export const Typography = ({ children, styles, variant }: Props) => (
  <ThemeProvider theme={theme}>
    <TypographyBase sx={styles} variant={variant}>
      {children}
    </TypographyBase>
  </ThemeProvider>
);
