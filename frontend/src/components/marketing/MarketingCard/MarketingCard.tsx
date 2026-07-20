import { Card, CardContent, Typography } from '@mui/material';
import { sxPatterns } from '../../../utils/sx-patterns';
import type { MarketingCardProps } from './MarketingCard.types';

export const MarketingCard = ({ title, description }: MarketingCardProps) => (
  <Card
    variant="outlined"
    sx={{
      ...sxPatterns.flatCard(),
      border: 1,
      borderColor: 'divider',
      transition: 'border-color 0.2s ease',
      '&:hover': {
        borderColor: 'accent.main',
      },
    }}
  >
    <CardContent>
      <Typography variant="subtitle1" fontWeight={600} gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default MarketingCard;
