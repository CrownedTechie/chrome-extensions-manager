import styled from "styled-components";
import { TextPreset2, TextPreset5, TextPreset6 } from "../textPreset";
import { SwitchButton } from "../switch";
import { RemoveModal } from "../removeModal";
import { useState } from "react";

const CardContainer = styled.article`
 width: 382px;
 height: 200px;
 padding: var(--spacing250);
 border-radius: var(--rounded20);
 border: 1px solid transparent;
 display: flex;
 flex-direction: column;
 justify-content: space-between;

 body[data-theme="light"] & {
  background-color: var(--neutral0);
  border-color: var(--neutral200);
 }

 body[data-theme="dark"] & {
  background-color: var(--neutral800);
  border-color: var(--neutral600);
 }
`;

const CardHeader = styled.header`
 display: flex;
 gap: var(--spacing200);
`;

const ExtensionDetails = styled.div`
 display: flex;
 flex-direction: column;
 gap: var(--spacing100);
`;

const CardActions = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
`;

const CardButton = styled.button`
 border-radius: var( --rounded-full);
 border: 1px solid transparent;
 padding: var(--spacing100) var(--spacing200);
 cursor: pointer;
 background: transparent;

 &:focus {
  outline: 1px solid transparent;
 }

 body[data-theme="light"] & {
  color: var(--neutral900);
  border-color: var(--neutral200);

  &:hover {
   background-color: var(--red700);
   color: var(--neutral0)
  }

  &:focus {
   border-color: var(--neutral0);
   outline-color: var(--red700);
  }
 }

 body[data-theme="dark"] & {
  color: var(--neutral0);
  border-color: var(--neutral600);

  &:hover {
   background-color: var(--red400);
   color: var(--neutral900);
  }

  &:focus {
   border-color: var(--neutral900);
   outline-color: var(--red400);
  }
 }
`;

interface ICardProps {
 theme: "light" | "dark";
 title: string;
 description: string;
 logo: string;
};

export const Card = ({
 theme,
 title,
 description,
 logo
}: ICardProps) => {
 const [openModal, setOpenModal] = useState<boolean>(false);
 const isDarkTheme = theme === "dark";

 const handleRemoveItem = () => {
  setOpenModal(false);
 };

 return (
  <>
   <CardContainer>
   <CardHeader>
    <img 
     src={logo}
     alt={`${title} Logo`}
    />

    <ExtensionDetails>
     <TextPreset2 
      text={title}
      color={isDarkTheme ? "N0" : "N900"}
     />
     <TextPreset5 
      text={description}
      color={isDarkTheme ? "N300" : "N600"}
     />
    </ExtensionDetails>
   </CardHeader>

   <CardActions>
    <CardButton
     onClick={() => setOpenModal(true)}
    >
     <TextPreset6 text="Remove" />
    </CardButton>

    <SwitchButton />
   </CardActions>
  </CardContainer>

  {openModal && (
   <RemoveModal 
    name={title}
    logo={logo}
    theme={theme}
    isModalOpen={openModal}
    handleCloseModal={() => setOpenModal(false)}
    handleRemove={handleRemoveItem}
   />
  )}
  </>
 )
}