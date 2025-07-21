import styled from "styled-components";
import { TextPreset2, TextPreset5 } from "../textPreset";

const EmptyStateContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: var(--spacing200);
	padding: var(--spacing500) 0;
`;

const EmptyStateImg = styled.img`
	width: 18.75rem;
	height: 18.75rem;
`;

const EmptyStateDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
	gap: var(--spacing100);
	padding: 0 var(--spacing200);
`;


interface IEmptyStateProps {
 icon: string;
 title: string;
 subtitle: string;
 theme: "dark" | "light";
}

export const EmptyState = ({
 icon,
 title,
 subtitle,
 theme
}: IEmptyStateProps) => {
 const isDarkTheme = theme === "dark";
 return (
  <EmptyStateContainer>
   <EmptyStateImg src={icon} alt="An empty state icon that tells a story into the night" />

   <EmptyStateDetails>
    <TextPreset2 text={title} color={isDarkTheme ? "N100" : "N700"}/>
    <TextPreset5 text={subtitle} color={isDarkTheme ? "N200" : "N600"} />
   </EmptyStateDetails>
  </EmptyStateContainer>
 )
};
