import styled from "styled-components";


export const ThemeIcon = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 width: 50px;
 height: 50px;
 cursor: pointer;
 border-radius: var(--rounded12);
 border: 1px solid transparent;

 /* Light theme styling */
 body[data-theme="light"] & {
  background-color: var(--neutral100);

  &:hover {
   background-color: var(--neutral300);
  }

  &:focus {
   background-color: var(--neutral300);
   border-color: var(--neutral0);
   outline: 1px solid var(--red400);
  }
 }

 /* Dark theme styling */
 body[data-theme="dark"] & {
  background-color: var(--neutral700);

  &:hover {
   background-color: var(--neutral600);
  }

  &:focus {
   background-color: var(--neutral600);
   border-color: var(--neutral800);
   outline: 1px solid var(--red400);
  }
 }


`;