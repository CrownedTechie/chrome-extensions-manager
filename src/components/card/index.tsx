import styled from "styled-components";
import { TextPreset2, TextPreset5 } from "../textPreset";
import { Button } from "../button";
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
    <Button 
     theme={theme}
     text="Remove" 
     isButtonActive={false}
     handleClick={() => setOpenModal(true)}
    />

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