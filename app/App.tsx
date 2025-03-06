import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppRoutes from "app/routes"; // Import routing component

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#13629F" },
    secondary: { main: "#F3DB41" },
    background: { default: "#121212", paper: "#1E1E1E" },
    text: { primary: "#ffffff", secondary: "rgba(255, 255, 255, 0.7)" },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
  },
});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes /> {/* This will handle the routing */}
    </ThemeProvider>
  );
}
