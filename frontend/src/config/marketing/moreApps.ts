/** Compact "more apps" list shown in the footer — everything Yehuda ships, portfolio or not. */
export type MoreAppLink = {
  name: string;
  url: string;
};

export const MORE_APPS: readonly MoreAppLink[] = [
  { name: 'Ateret Yosef', url: 'https://ateretyosef.org/he/' },
  { name: 'Movies', url: 'https://movies.udah.dev' },
  { name: 'DevToolsHub', url: 'https://toolshub.udah.dev/' },
  { name: 'LOOZ', url: 'https://looz.udah.dev/' },
  { name: 'Receipts', url: 'https://receipts.udah.dev' },
];
