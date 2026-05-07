export const Colors = {
  primary: "#7C5CFC",
  background: "#FFFFFF",
  card: "#F5F3FF",
  text: "#1A1A2E",
  textMuted: "#6B7280",
} as const;

export type ColorName = keyof typeof Colors;
