import styled from "styled-components";
import { Typography } from "../typography";

interface IStyledButtonProps {
 $isActive?: boolean;
 $padding?: string;
};

const StyledButton = styled.button<IStyledButtonProps>`
 border-radius: var( --rounded-full);
 border: 1px solid transparent;
 padding: ${({ $padding }) => $padding || "var(--spacing100) var(--spacing250)"};
 cursor: pointer;

 &:focus {
  outline: 1px solid var(--red400);
 }

	body[data-theme="light"] & {
		background-color: ${({ $isActive }) => $isActive ? "var(--red700)" : "var(--neutral0)"};
		border-color: ${({ $isActive }) => !$isActive && "var(--neutral200)"};
		color: ${({ $isActive }) => $isActive ? "var(--neutral0)" : "var(--neutral900)"};

		&:hover {
				background-color: ${({ $isActive }) => $isActive ? "var(--red500)" : "var(--neutral0)"};
				color: ${({ $isActive }) => $isActive ? "var(--neutral0)" : "var(--neutral600)"};
		}

		&:focus {
				border-color: ${({ $isActive }) => $isActive ? "var(--neutral0)" : "var(--neutral200)"};
		}
	}

	body[data-theme="dark"] & {
		background-color: ${({ $isActive }) => $isActive ? "var(--red400)" : "var(--neutral700)"};
		border-color: ${({ $isActive }) => !$isActive && "var(--neutral600)"};
		color: ${({ $isActive }) => $isActive ? "var(--neutral900)" : "var(--neutral0)"};

		&:hover {
				background-color: ${({ $isActive }) => $isActive ? "var(--red500)" : "var(--neutral600)"};
		}

		&:focus {
				border-color: var(--neutral900);
		}
	}
`;

interface IButtonProps {
		text: string;
		isActive: boolean;
		onClick: () => void;
};

export const Button = ({
	text,
	isActive,
	onClick
}: IButtonProps) => {
	return (
			<StyledButton
				type="button"
				$isActive={isActive}
				onClick={onClick}
			>
					<Typography
							as="span"
							fontWeight={isActive ? "medium" : "regular"}
							$textAlign="center"
					>
							{text}
					</Typography>
			</StyledButton>
	)
};