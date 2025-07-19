import styled from "styled-components";

export const Header = styled.header`
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