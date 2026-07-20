import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LAYOUT } from '../../../config/constants/layout';
import { LANDING_SECTIONS } from '../../../config/routes';
import { useThemeMode } from '../../../config/ThemeProvider';
import { scrollToLandingSection } from '../../../utils/landingNavigation';

export const HeroSection = () => {
  const { t } = useTranslation();
  const { ctaColor } = useThemeMode();

  return (
    <Box
      sx={{
        pt: { xs: 1, md: 4 },
        pb: { xs: 1, md: 0 },
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ maxWidth: LAYOUT.sectionMaxWidth.hero, mx: 'auto', textAlign: 'center' }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 1.5,
            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
            color: 'text.primary',
          }}
        >
          {t('marketing.home.tagline')}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: { xs: 2, md: 3 }, fontWeight: 400 }}>
          {t('marketing.home.subtagline')}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            color={ctaColor}
            onClick={() => scrollToLandingSection(LANDING_SECTIONS.portfolio)}
          >
            {t('marketing.home.viewWork')}
          </Button>
        </Box>
        <Typography
          variant="body2"
          sx={{
            mt: { xs: 1.5, md: 2 },
            fontWeight: 600,
            letterSpacing: '0.04em',
            color: 'text.primary',
          }}
        >
          {t('marketing.home.heroStats')}
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
