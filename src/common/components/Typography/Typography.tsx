import { ReactNode } from "react";

import { createTheme, Typography as TypographyBase } from "@mui/material";
import { TypographyVariant } from "./typography.types";
import { ThemeProvider } from "@mui/material/styles";

type Props = {
  children: ReactNode;
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

export const Typography = ({ children, variant }: Props) => (
  <ThemeProvider theme={theme}>
    <TypographyBase variant={variant}>{children}</TypographyBase>
  </ThemeProvider>
);
