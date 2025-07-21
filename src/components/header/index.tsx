import styled from "styled-components";
import { DarkThemeLogo, LightThemeLogo, MoonIcon, SunIcon } from "../../assets";
import type { SetStateAction } from "react";
import { ThemeIcon } from "../themeIcon";

const HeaderContainer = styled.header`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: var(--spacing200) var(--spacing150);
 border: 1px solid transparent;
 border-radius: var(--rounded20);

 body[data-theme="light"] & {
  background-color: var(--neutral0);
  border-color: var(--neutral200);
 }

 body[data-theme="dark"] & {
  background-color: var(--neutral800);
 }
`;

interface IHeaderProps {
  setTheme: (value: SetStateAction<"light" | "dark">) => void;
  theme: "light" | "dark";
};

export const Header = ({ 
 setTheme,
 theme
}: IHeaderProps) => {
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

 return (
  <HeaderContainer>
   <img 
    src={isDarkTheme ? DarkThemeLogo :LightThemeLogo} 
    alt="Extensions logo" 
   />

   <ThemeIcon type="button" onClick={toggleTheme}>
    <img 
     src={isDarkTheme ? SunIcon : MoonIcon} 
     alt={`${theme} icon`}
    />
   </ThemeIcon>
  </HeaderContainer>
 )
};