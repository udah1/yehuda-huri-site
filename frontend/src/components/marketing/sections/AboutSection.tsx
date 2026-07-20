import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ABOUT_BIO_KEYS } from '../../../config/marketing/contentKeys';
import { LAYOUT } from '../../../config/constants/layout';
import { LANDING_SECTIONS } from '../../../config/routes';
import { Section } from '../../layout/Section';

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <Section id={LANDING_SECTIONS.about} title={t('marketing.about.title')} maxWidth={LAYOUT.sectionMaxWidth.narrow}>
      <Box sx={{ textAlign: 'start' }}>
        {ABOUT_BIO_KEYS.map((key, index) => (
          <Typography
            key={key}
            variant="body1"
            paragraph={index < ABOUT_BIO_KEYS.length - 1}
          >
            {t(`marketing.about.${key}`)}
          </Typography>
        ))}
      </Box>
    </Section>
  );
};

export default AboutSection;
