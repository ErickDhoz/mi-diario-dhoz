import { CssBaseline } from "@mui/material";
import { colorTheme } from "./colorTheme";
import { ThemeProvider } from "@emotion/react";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={colorTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
