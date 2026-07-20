import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { getAbsoluteUrl, SITE_META, personSchemaSameAs } from '../../../config/marketing/siteMeta';
import { SOCIAL_LINKS } from '../../../config/constants/social';

export type SeoHeadProps = {
  title?: string;
  description?: string;
  path?: string;
  includePersonSchema?: boolean;
};

export const SeoHead = ({
  title,
  description,
  path = '/',
  includePersonSchema = false,
}: SeoHeadProps) => {
  const { i18n } = useTranslation();
  const resolvedTitle = title ?? SITE_META.defaultTitle;
  const resolvedDescription = description ?? SITE_META.defaultDescription;
  const canonical = getAbsoluteUrl(path);
  const ogImage = getAbsoluteUrl(SITE_META.ogImagePath);
  const lang = (i18n.resolvedLanguage ?? i18n.language).startsWith('he') ? 'he' : 'en';

  const personSchema = includePersonSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: SITE_META.siteName,
        jobTitle: 'Senior Full Stack Engineer & System Designer',
        url: getAbsoluteUrl('/') || undefined,
        sameAs: personSchemaSameAs,
      }
    : null;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      {ogImage.startsWith('http') ? <meta property="og:image" content={ogImage} /> : null}
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      {ogImage.startsWith('http') ? <meta name="twitter:image" content={ogImage} /> : null}
      <link rel="me" href={SOCIAL_LINKS.linkedIn} />
      {personSchema ? (
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      ) : null}
    </Helmet>
  );
};

export default SeoHead;
