import { Typography } from "../typography";
import type { TypographyColors } from "../typography/types";

type TextPresetProps = {
  text: string;
  color?: TypographyColors;
};

export const TextPreset1 = ({ text, color }: TextPresetProps) => (
  <Typography
    as="h1"
    fontSize="lg"
    fontWeight="bold"
    color={color}
    $lineHeight="100%"
    letterSpacing="-1px"
  >
    { text }
  </Typography>
);

export const TextPreset2 = ({ text, color }: TextPresetProps) => (
  <Typography
    as="h2"
    fontSize="md"
    fontWeight="bold"
    color={color}
    $lineHeight="120%"
    letterSpacing="-0.2px"
  >
    { text }
  </Typography>
);

export const TextPreset3 = ({ text, color }: TextPresetProps) => (
  <Typography
    as="h3"
    fontSize="md"
    color={color}
    $lineHeight="140%"
    letterSpacing="-0.3px"
  >
    { text }
  </Typography>
);

export const TextPreset4 = ({ text, color }: TextPresetProps) => (
  <Typography
    as="h4"
    fontSize="md"
    fontWeight="medium"
    color={color}
    $lineHeight="140%"
    letterSpacing="-0.3px"
  >
    { text }
  </Typography>
);

export const TextPreset5 = ({ text, color }: TextPresetProps) => (
  <Typography
    fontSize="sm"
    color={color}
    $lineHeight="140%"
    letterSpacing="-0.5px"
  >
    { text }
  </Typography>
);


export const TextPreset6 = ({ text, color }: TextPresetProps) => (
  <Typography
    as="span"
    fontSize="sm"
    fontWeight="medium"
    color={color}
    $lineHeight="140%"
    letterSpacing="-0.5px"
  >
    { text }
  </Typography>
);