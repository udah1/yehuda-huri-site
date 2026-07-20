import { Box, Typography, Link } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useTranslation } from 'react-i18next';
import { EXPERIENCE_HIGHLIGHT_KEYS } from '../../../config/marketing/contentKeys';
import { LAYOUT } from '../../../config/constants/layout';
import { LANDING_SECTIONS } from '../../../config/routes';
import { Section } from '../../layout/Section';

export const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <Section
      id={LANDING_SECTIONS.experience}
      title={t('marketing.experience.title')}
      subtitle={t('marketing.experience.subtitle')}
      maxWidth={LAYOUT.sectionMaxWidth.narrow}
    >
      <Box component="ul" sx={{ m: 0, pl: 2.5, textAlign: 'start' }}>
        {EXPERIENCE_HIGHLIGHT_KEYS.map((key) => (
          <Typography key={key} component="li" variant="body1" paragraph sx={{ color: 'text.secondary' }}>
            {t(`marketing.experience.highlights.${key}`)}
            {key === 'harmony' && (
              <>
                {' '}
                <Link
                  href="https://amdocs-studio.github.io/harmony-2.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.25 }}
                >
                  {t('marketing.experience.harmonyLink')}
                  <OpenInNewIcon sx={{ fontSize: '0.875rem' }} aria-hidden />
                </Link>
              </>
            )}
          </Typography>
        ))}
      </Box>
    </Section>
  );
};

export default ExperienceSection;
