import "./index.css";
import { Button, TextPreset1, Typography } from "./components";
import { useState } from "react";
import { usePreferredTheme } from "./utils";

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
      <div>
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
          >
            Click me
          </Typography>
        </Button>
      </div>
    </>
  )
}

export default App
