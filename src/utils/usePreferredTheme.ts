import { useEffect, useState } from "react";

export const usePreferredTheme = () => {
 const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
 const [theme, setTheme] = useState<"light" | "dark">(systemTheme);

 useEffect(() => {
  document.body.setAttribute("data-theme", theme);
 }, [theme]);

 return { theme, setTheme };
};