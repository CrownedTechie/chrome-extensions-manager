import type { ReactNode } from "react";

export type TypographyElements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "pre" | "em" | "strong"
 | "mark" | "del" | "ins" | "sub" | "sup";

export type TypographyFontWeights = "regular" | "medium" | "bold";

export type TypographyColors = "N900" | "N800" | "N700" | "N600" | "N300" | "N200" | "N100" | "N0"
 | "R400" | "R500" | "R700";

export type TypographyFontSizes = "lg" | "md" | "sm";


export interface ITypographyProps {
 as?: TypographyElements;
 fontSize?: TypographyFontSizes;
 fontWeight?: TypographyFontWeights;
 color?: TypographyColors;
 children?: ReactNode;
};