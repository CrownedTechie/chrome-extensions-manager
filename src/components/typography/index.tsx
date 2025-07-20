import type { ITypographyProps } from "./types"
import styled from 'styled-components';

const fontWeightMap = {
	regular: 400,
	medium: 500,
	bold: 700
};

const colorMap = {
 N900: "var(--neutral900)",
 N800: "var(--neutral800)",
 N700: "var(--neutral700)",
 N600: "var(--neutral600)",
 N300: "var(--neutral300)",
 N200: "var(--neutral200)",
 N100: "var(--neutral100)",
 N0: "var(--neutral0)",
 R400: "var(--red400)",
 R500: "var(--red500)",
 R700: "var(--red700)"
};

const fontSizeMap = {
 lg: "2.125rem", // 34px
 md: "1.25rem", // 20px
 sm: "1rem" // 16px
};

const StyledTypography = styled(
  ({ 
    as: Tag = "p", 
    ...rest 
  }) => <Tag { ...rest }/>
)<ITypographyProps>`
  font-weight: ${({ fontWeight = "regular" }) => fontWeightMap[fontWeight]};
  color: ${({ color }) => color ? colorMap[color] : "inherit" };
  font-size: ${({ fontSize = "sm" }) => fontSizeMap[fontSize]};
  line-height: ${({ $lineHeight }) => $lineHeight || "normal"};
  text-align: ${({ $textAlign }) => $textAlign || "left"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "normal"};
`;

export const Typography = ({
 as,
 fontWeight,
 color,
 fontSize,
 children,
 $lineHeight,
 letterSpacing,
 $textAlign
}: ITypographyProps) => {
  return (
    <StyledTypography
      as={as}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      $lineHeight={$lineHeight}
      letterSpacing={letterSpacing}
      $textAlign={$textAlign}
    >
      {children}
    </StyledTypography>
  )
};