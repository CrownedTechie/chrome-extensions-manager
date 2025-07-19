import "./index.css";
import { Button, Header, TextPreset1, ThemeIcon, Typography } from "./components";
import { useState } from "react";
import { usePreferredTheme } from "./utils";
import { DarkThemeLogo, LightThemeLogo, MoonIcon, SunIcon } from "./assets";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const { theme, setTheme } = usePreferredTheme();
  const isDarkTheme = theme === "dark";

  const getButtonTextColor = () => {
    // Dark theme
    if (isDarkTheme) {
      return isButtonActive ? "N900" : "N0";
    }

    // Light theme
    if (isButtonActive) {
      return "N0";
    }
    return isHovered ? "N600" : "N900";
};

  return (
    <>
      <main>
        <Header>
           <img 
            src={isDarkTheme ? DarkThemeLogo :LightThemeLogo} 
            alt="Extensions logo" 
           />

          <ThemeIcon onClick={() => setTheme(prev => prev === "dark" ? "light" : "dark")}>
            <img src={isDarkTheme ? SunIcon : MoonIcon} alt={`${theme} icon`}/>
          </ThemeIcon>
        </Header>

        <section>
          <TextPreset1 text="Extensions" color={isDarkTheme ? "N0" : "N900"}/>

          <Button
            $isActive={isButtonActive}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsButtonActive(prev => !prev)}
          >
            <Typography
              fontWeight={isButtonActive ? "medium" : "regular"}
              color={getButtonTextColor()}
              textAlign="center"
            >
              Click me
            </Typography>
          </Button>
        </section>


      </main>
      
      
    </>
  )
}

export default App
