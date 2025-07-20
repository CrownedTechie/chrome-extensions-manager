import styled from "styled-components";
import { TextPreset4 } from "../textPreset";
import { Button } from "../button";
import { useEffect, useRef } from "react";

const ModalContainer = styled.dialog`
 position: fixed;
 top: 50%; 
 left: 50%;
 transform: translate(-50%, -50%);
 border: none;
 border-radius: var(--rounded20);
 padding: var(--spacing300) var(--spacing250);
 display: flex;
 flex-direction: column;
 gap: var(--spacing250);
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 width: 90%;
 min-height: fit-content;

 @media (min-width: 768px) { 
  padding: var(--spacing400); 
  width: 35rem;
 }

 body[data-theme="light"] & {
   background-color: var(--neutral0);
 }

 body[data-theme="dark"] & {
   background-color: var(--neutral800);
 }

 &::backdrop {
   background-color: rgba(0, 0, 0, 0.5);
   backdrop-filter: blur(3px);
 }
`;

const ModalHeader = styled.header`
 display: flex;
 align-items: center;
 gap: var(--spacing200);
`;

const ModalActions = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 gap: var(--spacing300);
`;

interface IRemoveModalProps {
 name: string;
 logo: string;
 theme: "light" | "dark";
 isModalOpen: boolean;
 handleCloseModal: () => void;
 handleRemove: () => void;
}

interface EscapeKeyEvent extends React.KeyboardEvent<HTMLDialogElement> {};

export const RemoveModal = ({
 name,
 logo,
 theme,
 isModalOpen,
 handleCloseModal,
 handleRemove
}: IRemoveModalProps) => {
 const isDarkTheme = theme === "dark";
 const dialogRef = useRef<HTMLDialogElement>(null);

 useEffect(() => {
  if (isModalOpen) {
    dialogRef.current?.showModal();
  } else {
    dialogRef.current?.close();
  }
}, [isModalOpen]);

const handleEscapeClick = (e: EscapeKeyEvent): void => {
  if (isModalOpen && e.key === "Escape") {
    handleCloseModal();
  }
};

 return (
  <ModalContainer 
    ref={dialogRef}
    aria-modal="true"
    role="dialog"
    aria-labelledby="remove-modal"
    onKeyDown={handleEscapeClick}
  >
   <ModalHeader>
    <img src={logo} alt={`${name} logo`}/>
    <TextPreset4 
     text={`Are you sure you want to remove ${name}?`} 
     color={isDarkTheme ? "N0" : "N900"}
    />
   </ModalHeader>

   <ModalActions>
    <Button 
     text="Remove" 
     isActive={false}
     onClick={handleRemove}
    />
    <Button 
     text="Cancel" 
     isActive={false}
     onClick={handleCloseModal}
    />
   </ModalActions>
  </ModalContainer>
 )
};