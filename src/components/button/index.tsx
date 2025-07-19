import styled from "styled-components";

interface IButtonProps {
 $isActive?: boolean;
 $padding?: string;
}

export const Button = styled.button<IButtonProps>`
 border-radius: var( --rounded-full);
 padding: ${({ $padding }) => $padding || "var(--spacing100) var(--spacing250)"};
 cursor: pointer;

 &:focus {
  outline: 2px solid var(--red400);
 }

 /* Light theme button styling */
  body[data-theme="dark"] & {
    background-color: ${({ $isActive }) => $isActive ? "var(--red700)" : "var(--neutral0)"};
    border: ${({ $isActive }) => $isActive ? "2px solid transparent" : "2px solid var(--neutral200)"};

    &:hover {
      background-color: ${({ $isActive }) => $isActive ? "var(--red500)" : "var(--neutral0)"};
    }

    &:focus {
      border: ${({ $isActive }) => $isActive 
        ? "2px solid var(--neutral0)" : "2px solid var(--neutral200)"};
    }
  }

 /* Dark theme button styling */
  body[data-theme="dark"] & {
    background-color: ${({ $isActive }) => $isActive ? "var(--red400)" : "var(--neutral700)"};
    border: ${({ $isActive }) => $isActive ? "2px solid transparent" : "2px solid var(--neutral600)"};

    &:hover {
      background-color: ${({ $isActive }) => $isActive ? "var(--red500)" : "var(--neutral600)"};
      outline: none;
    }

    &:focus {
      border: 2px solid var(--neutral900);
    }
  }
`;