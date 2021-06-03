// Styling
import { GlobalStyle, ThemeButton } from "./styles";
import { useState } from "react";

// Components
import CookieList from "./components/ProductList";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const ToggleCurrentTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <ThemeButton onClick={ToggleCurrentTheme}>
        {currentTheme === "light" ? "Dark Theme" : "Light Theme"}
      </ThemeButton>
      <GlobalStyle />

      <Home />
      <CookieList />
    </ThemeProvider>
  );
}

export default App;
