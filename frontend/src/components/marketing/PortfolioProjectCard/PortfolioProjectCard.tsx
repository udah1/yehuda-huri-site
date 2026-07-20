import { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Chip, Link, Stack, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useTranslation } from 'react-i18next';
import { sxPatterns } from '../../../utils/sx-patterns';
import type { PortfolioProjectCardProps, PortfolioProjectLinkKey } from './PortfolioProjectCard.types';

const LINK_ORDER: readonly PortfolioProjectLinkKey[] = ['live', 'github', 'npm', 'docs', 'store'];

export const PortfolioProjectCard = ({
  name,
  problem,
  solution,
  outcome,
  image,
  tags,
  links,
}: PortfolioProjectCardProps) => {
  const { t } = useTranslation();
  const [imageError, setImageError] = useState(false);

  return (
    <Card
      variant="outlined"
      sx={{
        ...sxPatterns.flatCard(),
        border: 1,
        borderColor: 'divider',
        transition: 'border-color 0.2s ease',
        overflow: 'hidden',
        '&:hover': {
          borderColor: 'accent.main',
        },
      }}
    >
      {!imageError && image ? (
        <CardMedia
          component="img"
          height={200}
          image={image}
          alt={name}
          onError={() => setImageError(true)}
          sx={{ objectFit: 'cover', bgcolor: 'action.hover' }}
        />
      ) : (
        <Box
          sx={{
            height: 200,
            bgcolor: 'action.hover',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 2,
          }}
          aria-hidden
        >
          <Typography variant="body2" color="text.secondary" textAlign="center">
            {t('marketing.portfolio.imagePlaceholder')}
          </Typography>
        </Box>
      )}
      <CardContent>
        <Typography variant="h6" fontWeight={600} gutterBottom color="text.primary">
          {name}
        </Typography>
        <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap sx={{ mb: 1.5 }}>
          {(tags ?? []).map((tag) => (
            <Chip key={tag} label={tag} size="small" variant="outlined" sx={{ mb: 0.5 }} />
          ))}
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {problem}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {solution}
        </Typography>
        <Typography variant="body2" sx={{ color: 'accent.main', fontWeight: 500, mb: links ? 1.5 : 0 }}>
          {outcome}
        </Typography>
        {links && LINK_ORDER.some((key) => links[key]) && (
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            {LINK_ORDER.filter((key) => links[key]).map((key) => (
              <Link
                key={key}
                href={links[key]}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.25, fontSize: '0.875rem' }}
              >
                {t(`marketing.portfolio.links.${key}`)}
                <OpenInNewIcon sx={{ fontSize: '0.875rem' }} aria-hidden />
              </Link>
            ))}
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default PortfolioProjectCard;
