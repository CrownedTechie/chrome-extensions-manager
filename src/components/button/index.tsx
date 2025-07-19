import styled from "styled-components";

interface IButtonProps {
 $isActive?: boolean;
 $padding?: string;
}

export const Button = styled.button<IButtonProps>`
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