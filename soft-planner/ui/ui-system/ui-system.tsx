// Button

export enum UIIconPositions {
  Start = 'start',
  End = 'end',
}

export enum UIButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export enum UIButtonColor {
  Pink = 'pink',
  Teal = 'teal',
  Purple = 'purple',
}

// Typography

export const FontSize = {
    xxs: '10px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
} as const;

export type UIFontSize = typeof FontSize[keyof typeof FontSize];

export const FontWeight = {
  100: 100, // Thin
  200: 200, // Extra Light
  300: 300, // Light
  400: 400, // Normal
  500: 500, // Medium
  600: 600, // Semi Bold
  700: 700, // Bold
  800: 800, // Extra Bold
  900: 900, // Black
} as const;

export type UIFontWeight = typeof FontWeight[keyof typeof FontWeight];