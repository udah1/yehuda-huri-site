/**
 * Canonical palette values from design-system/theme-options-demo.html (themes 02, 03, 05, 06).
 * Presets must reference these — do not duplicate hex values in preset files.
 */
import type { MarketingCtaColor, MarketingNavStyle } from '../presets/types';

export interface DemoModeSpec {
  bg: string;
  surface: string;
  text: string;
  textMuted: string;
  accent: string;
  accentSoft: string;
  border: string;
  heroGradient: string;
  heroPattern?: string;
  gradientText: string;
  navStyle: MarketingNavStyle;
  /** Frosted nav bar — theme-specific, not one global black for all dark modes */
  navBackground: string;
  navBorderColor: string;
  navTextColor: string;
  ctaColor: MarketingCtaColor;
  navAccentBorder?: string;
  /** Optional override; defaults to text (light nav) or bg (dark nav) in demoSpecToMarketingTokens. */
  mediaStageBackground?: string;
}

export const DemoThemeColors = {
  blueprintArchitect: {
    light: {
      bg: '#F0F9FF',
      surface: '#FFFFFF',
      text: '#0C4A6E',
      textMuted: '#0369A1',
      accent: '#0284C7',
      accentSoft: 'rgba(2,132,199,0.1)',
      border: '#BAE6FD',
      heroGradient: 'linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)',
      heroPattern:
        'linear-gradient(rgba(2,132,199,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(2,132,199,0.06) 1px, transparent 1px)',
      gradientText: 'linear-gradient(135deg, #0C4A6E 0%, #0284C7 100%)',
      navStyle: 'light',
      navBackground: 'rgba(255, 255, 255, 0.9)',
      navBorderColor: '#BAE6FD',
      navTextColor: '#0C4A6E',
      ctaColor: 'primary',
    },
    dark: {
      bg: '#060D18',
      surface: '#0F172A',
      text: '#F1F5F9',
      textMuted: '#94A3B8',
      accent: '#22D3EE',
      accentSoft: 'rgba(34,211,238,0.12)',
      border: '#1E293B',
      heroGradient: 'linear-gradient(180deg, #0A1628 0%, #060D18 100%)',
      heroPattern:
        'linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)',
      gradientText: 'linear-gradient(135deg, #F1F5F9 0%, #22D3EE 100%)',
      navStyle: 'dark',
      navBackground: 'rgba(9, 9, 11, 0.92)',
      navBorderColor: 'rgba(255, 255, 255, 0.08)',
      navTextColor: '#FAFAFA',
      ctaColor: 'primary',
    },
  },
  precisionAtelier: {
    light: {
      bg: '#FAF8F5',
      surface: '#FFFFFF',
      text: '#1C1410',
      textMuted: '#5C4A3D',
      accent: '#92400E',
      accentSoft: 'rgba(146,64,14,0.1)',
      border: '#E8E0D8',
      heroGradient: 'linear-gradient(180deg, #FAF8F5 0%, #F5F0EA 100%)',
      gradientText: 'linear-gradient(135deg, #1C1410 0%, #92400E 100%)',
      navStyle: 'light',
      navBackground: 'rgba(255, 255, 255, 0.9)',
      navBorderColor: '#E8E0D8',
      navTextColor: '#1C1410',
      ctaColor: 'gold',
    },
    dark: {
      bg: '#1F1608',
      surface: '#2E2214',
      text: '#FAF8F5',
      textMuted: '#D4C4A8',
      accent: '#D97706',
      accentSoft: 'rgba(217,119,6,0.14)',
      border: '#4A3A24',
      heroGradient: 'linear-gradient(180deg, #241A0C 0%, #1F1608 100%)',
      gradientText: 'linear-gradient(135deg, #FAF8F5 0%, #D97706 100%)',
      navStyle: 'dark',
      navBackground: 'rgba(36, 26, 12, 0.94)',
      navBorderColor: '#4A3A24',
      navTextColor: '#FAF8F5',
      ctaColor: 'gold',
    },
  },
  fullstackForge: {
    light: {
      bg: '#FAFAFA',
      surface: '#FFFFFF',
      text: '#18181B',
      textMuted: '#52525B',
      accent: '#2563EB',
      accentSoft: 'rgba(37,99,235,0.12)',
      border: '#E4E4E7',
      heroGradient: 'linear-gradient(135deg, #FAFAFA 0%, #EFF4FF 50%, #FAFAFA 100%)',
      heroPattern: 'radial-gradient(circle at 80% 20%, rgba(37,99,235,0.08) 0%, transparent 50%)',
      gradientText: 'linear-gradient(135deg, #18181B 0%, #2563EB 100%)',
      navStyle: 'light',
      navBackground: 'rgba(255, 255, 255, 0.9)',
      navBorderColor: '#E4E4E7',
      navTextColor: '#18181B',
      ctaColor: 'gold',
    },
    dark: {
      bg: '#0B0B0F',
      surface: '#18181B',
      text: '#FAFAFA',
      textMuted: '#A1A1AA',
      accent: '#3B82F6',
      accentSoft: 'rgba(59,130,246,0.16)',
      border: '#27272A',
      heroGradient: 'linear-gradient(180deg, #0B0B0F 0%, #111119 100%)',
      heroPattern: 'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.10) 0%, transparent 55%)',
      gradientText: 'linear-gradient(135deg, #FAFAFA 0%, #3B82F6 100%)',
      navStyle: 'dark',
      navBackground: 'rgba(11, 11, 15, 0.92)',
      navBorderColor: '#27272A',
      navTextColor: '#FAFAFA',
      ctaColor: 'gold',
    },
  },
  enterpriseGold: {
    light: {
      bg: '#F8FAFC',
      surface: '#FFFFFF',
      text: '#0F172A',
      textMuted: '#475569',
      accent: '#B45309',
      accentSoft: 'rgba(180,83,9,0.1)',
      border: '#E2E8F0',
      heroGradient: 'linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)',
      gradientText: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)',
      navStyle: 'light',
      navBackground: 'rgba(255, 255, 255, 0.9)',
      navBorderColor: '#E2E8F0',
      navTextColor: '#0F172A',
      ctaColor: 'gold',
      navAccentBorder: '#1E3A8A',
    },
    dark: {
      bg: '#0F172A',
      surface: '#1E293B',
      text: '#F1F5F9',
      textMuted: '#94A3B8',
      accent: '#D97706',
      accentSoft: 'rgba(217,119,6,0.12)',
      border: '#334155',
      heroGradient: 'linear-gradient(180deg, #0f172a 0%, #131c2e 100%)',
      gradientText: 'linear-gradient(135deg, #F1F5F9 0%, #3B82F6 100%)',
      navStyle: 'dark',
      navBackground: 'rgba(15, 23, 42, 0.92)',
      navBorderColor: '#334155',
      navTextColor: '#F1F5F9',
      ctaColor: 'gold',
      navAccentBorder: '#1E40AF',
    },
  },
} as const satisfies Record<string, { light: DemoModeSpec; dark: DemoModeSpec }>;

/** Authority navy + trust amber — synced with design-system/yehuda-huri/MASTER.md */
export const EnterpriseTokens = {
  blue: '#1E3A8A',
  blueLight: '#1E40AF',
  ctaGold: '#B45309',
  ctaGoldDark: '#D97706',
  ctaContrast: '#FFFFFF',
} as const;
