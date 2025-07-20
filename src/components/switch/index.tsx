import * as RadixSwitch from "@radix-ui/react-switch";
import styled from "styled-components";

const SwitchRoot = styled(RadixSwitch.Root)`
 all: unset;
 width: 36px;
	height: 20px;
	border-radius: var(--rounded-full);
	position: relative;
 transition: background-color 200ms;
 cursor: pointer;

 body[data-theme="light"] & {
  background-color: var(--neutral300);

  &[data-state="checked"] {
   background-color: var(--red700);
  }
 }

 body[data-theme="dark"] & {
  	background-color: var(--neutral600);

   &[data-state="checked"] {
   background-color: var(--red400);
  }
 }
`;

const SwitchThumb = styled(RadixSwitch.Thumb)`
 display: block;
 width: 16px;
 height: 16px;
 background-color: var(--neutral0);
 border-radius: var(--rounded-full);
 transition: transform 100ms;
 transform: translateX(2px);
 will-change: transform;
 
 &[data-state="checked"] {
   transform: translateX(19px);
 }
`;

interface ISwitchButtonProps {
  id: string,
  name: string;
  isChecked: boolean;
  toggleSwitch: (newState: boolean) => void;
};

export const SwitchButton = ({
  id,
  name,
  isChecked,
  toggleSwitch
}: ISwitchButtonProps) => {
 return (
  <SwitchRoot
    id={id}
    name={name}
    checked={isChecked}
    onCheckedChange={toggleSwitch}
  >
   <SwitchThumb />
  </SwitchRoot>
 )
};