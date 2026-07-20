import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { HOME_FEATURE_KEYS } from '../../../config/marketing/contentKeys';
import { LAYOUT } from '../../../config/constants/layout';
import { sxPatterns } from '../../../utils/sx-patterns';

export const FeatureCardGrid = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ maxWidth: LAYOUT.sectionMaxWidth.featureGrid, mx: 'auto', mt: { xs: 0.5, md: 2 }, px: 2 }}>
      <Box
        sx={{
          display: 'grid',
          gap: { xs: 2, md: 3 },
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
        }}
      >
        {HOME_FEATURE_KEYS.map((key) => (
          <Box key={key} sx={sxPatterns.sectionCard()}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              {t(`marketing.home.${key}`)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t(`marketing.home.${key}Desc`)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FeatureCardGrid;
