import { useState } from "react";
import styled from "styled-components";
import { Typography } from "../typography";

interface IStyledButtonProps {
 $isActive?: boolean;
 $padding?: string;
}

const StyledButton = styled.button<IStyledButtonProps>`
 border-radius: var( --rounded-full);
 border: 1px solid transparent;
 padding: ${({ $padding }) => $padding || "var(--spacing100) var(--spacing250)"};
 cursor: pointer;

 &:focus {
  outline: 1px solid var(--red400);
 }

 /* Light theme button styling */
  body[data-theme="light"] & {
    background-color: ${({ $isActive }) => $isActive ? "var(--red700)" : "var(--neutral0)"};
    border-color: ${({ $isActive }) => !$isActive && "var(--neutral200)"};

    &:hover {
      background-color: ${({ $isActive }) => $isActive ? "var(--red500)" : "var(--neutral0)"};
    }

    &:focus {
      border-color: ${({ $isActive }) => $isActive 
        ? "var(--neutral0)" : "var(--neutral200)"};
    }
  }

 /* Dark theme button styling */
  body[data-theme="dark"] & {
    background-color: ${({ $isActive }) => $isActive ? "var(--red400)" : "var(--neutral700)"};
    border-color: ${({ $isActive }) => !$isActive && "var(--neutral600)"};

    &:hover {
      background-color: ${({ $isActive }) => $isActive ? "var(--red500)" : "var(--neutral600)"};
      outline: none;
    }

    &:focus {
      border-color: var(--neutral900);
    }
  }
`;

interface IButtonProps {
		theme: "light" | "dark";
		text: string;
		isButtonActive: boolean;
		handleClick: () => void;
}

export const Button = ({
	theme,
	text,
	isButtonActive,
	handleClick
}: IButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
		const isDarkTheme = theme === "dark";

		const getButtonTextColor = () => {
  if (isDarkTheme) {
    return isButtonActive ? "N900" : "N0";
  } else {
    if (isButtonActive) return "N0";
    return isHovered ? "N600" : "N900";
  }
};

  return (
    <StyledButton
					$isActive={isButtonActive}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
     onClick={handleClick}
				>
      <Typography
        fontWeight={isButtonActive ? "medium" : "regular"}
        color={getButtonTextColor()}
        $textAlign="center"
      >
        {text}
      </Typography>
    </StyledButton>
  )
};