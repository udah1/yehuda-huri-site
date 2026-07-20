export const PRIVACY_POLICY_SECTION_KEYS = [
  'intro',
  'voluntary',
  'local',
  'thirdParty',
  'cookies',
  'security',
  'rights',
  'services',
  'changes',
  'contact',
] as const;

export const ACCESSIBILITY_SECTION_KEYS = [
  'commitment',
  'compliance',
  'features',
  'thirdParty',
  'exclusions',
  'contact',
  'updated',
] as const;

export type PrivacyPolicySectionKey = (typeof PRIVACY_POLICY_SECTION_KEYS)[number];
export type AccessibilitySectionKey = (typeof ACCESSIBILITY_SECTION_KEYS)[number];
