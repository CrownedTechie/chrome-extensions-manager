import styled from "styled-components";
import { TextPreset1 } from "../textPreset";
import type { JSX } from "react";

const SectionHeaderContainer = styled.header`
 display: flex;
 align-items: center;
 justify-content: space-between;

 @media (max-width: 649px) { 
  flex-direction: column;
  gap: var(--spacing300);
 }
`;

	const ButtonGroup = styled.div`
			display: flex;
			align-items: center;
			justify-content: center;
			gap: var(--spacing150);
		`;

interface ISectionHeaderProps {
 title: string;
 buttonGroup: JSX.Element;
};

export const SectionHeader = ({
 title,
 buttonGroup
}: ISectionHeaderProps) => {

 return(
  <SectionHeaderContainer>
   <TextPreset1 text={title} />

   <ButtonGroup>
    {buttonGroup && buttonGroup}
   </ButtonGroup>
  </SectionHeaderContainer>
 )
};