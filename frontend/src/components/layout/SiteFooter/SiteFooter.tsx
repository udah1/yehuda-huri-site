import { Box, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LAYOUT } from '../../../config/constants/layout';
import { ROUTES } from '../../../config/routes';
import { MORE_APPS } from '../../../config/marketing/moreApps';
import { SocialLinks } from '../../common/SocialLinks';
import type { SiteFooterProps } from './SiteFooter.types';

export const SiteFooter = ({
  currentYear,
  isDebugActive,
  onDebugTap,
}: SiteFooterProps) => {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        borderTop: 1,
        borderColor: 'divider',
        backgroundColor: 'background.paper',
      }}
    >
      <Stack
        spacing={2}
        alignItems="center"
        sx={{ maxWidth: LAYOUT.footerMaxWidth, mx: 'auto' }}
      >
        <SocialLinks size="small" />
        <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center" useFlexGap>
          <Link component={RouterLink} to={ROUTES.privacy} variant="body2" color="text.secondary" underline="hover">
            {t('legal.footer.privacyPolicy')}
          </Link>
          <Link component={RouterLink} to={ROUTES.accessibility} variant="body2" color="text.secondary" underline="hover">
            {t('legal.footer.accessibility')}
          </Link>
        </Stack>

        <Stack spacing={0.75} alignItems="center">
          <Typography
            variant="overline"
            color="text.secondary"
            sx={{ letterSpacing: '0.08em', lineHeight: 1 }}
          >
            {t('marketing.footer.moreApps')}
          </Typography>
          <Stack direction="row" spacing={1.5} flexWrap="wrap" justifyContent="center" useFlexGap>
            {MORE_APPS.map((app) => (
              <Link
                key={app.url}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="body2"
                color="text.secondary"
                underline="hover"
              >
                {app.name}
              </Link>
            ))}
          </Stack>
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ userSelect: 'none', textAlign: 'center' }}>
          {t('marketing.footer.copyright', { year: currentYear })}{' '}
          <Box component="span" onClick={onDebugTap} sx={{ cursor: 'default', '&:active': { opacity: 0.5 } }}>
            {t('marketing.footer.developerName')}
          </Box>
          {isDebugActive && (
            <Box component="span" sx={{ fontSize: '0.7rem', ml: 0.5 }}>
              ({t('marketing.footer.debug')})
            </Box>
          )}{' '}
          <Box component="span">{t('marketing.footer.allRightsReserved')}</Box>
        </Typography>
      </Stack>
    </Box>
  );
};

export default SiteFooter;
