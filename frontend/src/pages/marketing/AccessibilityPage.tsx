import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MarketingPageShell } from '../../components/marketing/MarketingPageShell';
import { SeoHead } from '../../components/common/SeoHead';
import { ACCESSIBILITY_SECTION_KEYS } from '../../config/marketing/legalContentKeys';
import { ROUTES } from '../../config/routes';
import { LAYOUT } from '../../config/constants/layout';

const AccessibilityPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <SeoHead
        title={t('legal.accessibility.seoTitle')}
        description={t('legal.accessibility.seoDescription')}
        path={ROUTES.accessibility}
      />
      <MarketingPageShell
        title={t('legal.accessibility.title')}
        subtitle={t('legal.accessibility.lastUpdated')}
        maxWidth={LAYOUT.sectionMaxWidth.narrow}
      >
        {ACCESSIBILITY_SECTION_KEYS.map((key) => (
          <Box key={key} sx={{ mb: 3, textAlign: 'start' }}>
            <Typography variant="h6" component="h2" gutterBottom fontWeight={600}>
              {t(`legal.accessibility.sections.${key}.title`)}
            </Typography>
            <Typography variant="body1" color="text.secondary" component="div" sx={{ whiteSpace: 'pre-line' }}>
              {t(`legal.accessibility.sections.${key}.body`)}
            </Typography>
          </Box>
        ))}
        <Link component={RouterLink} to={ROUTES.home} underline="hover">
          {t('legal.backToHome')}
        </Link>
      </MarketingPageShell>
    </>
  );
};

export default AccessibilityPage;
