const FAVICON_LINK_ID = 'site-favicon';
const THEME_COLOR_META_ID = 'site-theme-color';

const buildFaviconSvg = (backgroundColor: string, textColor: string): string =>
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>` +
  `<rect width='32' height='32' rx='6' fill='${backgroundColor}'/>` +
  `<text x='16' y='21' text-anchor='middle' fill='${textColor}' ` +
  `font-family='ui-monospace,SFMono-Regular,Menlo,monospace' font-size='12' ` +
  `font-weight='700' letter-spacing='-0.5'>` +
  `<tspan fill-opacity='0.55'>{</tspan>YH<tspan fill-opacity='0.55'>}</tspan></text></svg>`;

export const updateSiteFavicon = (backgroundColor: string, textColor = '#FFFFFF'): void => {
  const href = `data:image/svg+xml,${encodeURIComponent(buildFaviconSvg(backgroundColor, textColor))}`;

  let link = document.getElementById(FAVICON_LINK_ID) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.id = FAVICON_LINK_ID;
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = href;

  const themeColorMeta = document.getElementById(THEME_COLOR_META_ID) as HTMLMetaElement | null;
  if (themeColorMeta) {
    themeColorMeta.content = backgroundColor;
  }
};
