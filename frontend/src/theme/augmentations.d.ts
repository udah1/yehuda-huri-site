import type { MarketingThemeName } from './presets/types';

declare module '@mui/material/styles' {
  interface Theme {
    marketing: {
      themeName: MarketingThemeName;
      label: string;
      num: string;
      heroGradient: string;
      heroPattern?: string;
      gradientText: string;
      ctaColor: 'primary' | 'secondary' | 'gold' | 'accent';
      navStyle?: 'light' | 'dark';
      navBackground: string;
      navBorderColor: string;
      navTextColor: string;
      navAccentBorder?: string;
      mediaStageBackground: string;
      monoFontFamily: string;
      headingFontFamily: string;
    };
  }

  interface ThemeOptions {
    marketing?: Partial<Theme['marketing']>;
  }

  interface Palette {
    gold: Palette['primary'];
    accent: Palette['primary'];
  }

  interface PaletteOptions {
    gold?: PaletteOptions['primary'];
    accent?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    gold: true;
    accent: true;
  }

  interface ButtonPropsSizeOverrides {
    extraSmall: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    gold: true;
    accent: true;
  }
}

export {};
