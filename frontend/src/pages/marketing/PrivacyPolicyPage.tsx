import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MarketingPageShell } from '../../components/marketing/MarketingPageShell';
import { SeoHead } from '../../components/common/SeoHead';
import { PRIVACY_POLICY_SECTION_KEYS } from '../../config/marketing/legalContentKeys';
import { ROUTES } from '../../config/routes';
import { LAYOUT } from '../../config/constants/layout';

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <SeoHead
        title={t('legal.privacy.seoTitle')}
        description={t('legal.privacy.seoDescription')}
        path={ROUTES.privacy}
      />
      <MarketingPageShell
        title={t('legal.privacy.title')}
        subtitle={t('legal.privacy.lastUpdated')}
        maxWidth={LAYOUT.sectionMaxWidth.narrow}
      >
        {PRIVACY_POLICY_SECTION_KEYS.map((key) => (
          <Box key={key} sx={{ mb: 3, textAlign: 'start' }}>
            <Typography variant="h6" component="h2" gutterBottom fontWeight={600}>
              {t(`legal.privacy.sections.${key}.title`)}
            </Typography>
            <Typography variant="body1" color="text.secondary" component="div" sx={{ whiteSpace: 'pre-line' }}>
              {t(`legal.privacy.sections.${key}.body`)}
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

export default PrivacyPolicyPage;
