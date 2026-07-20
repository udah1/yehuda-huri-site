import { Box, Chip, Stack, Typography } from '@mui/material';
import type { ResolvedPortfolioProject } from '../../../hooks/usePortfolioProjects';
import { sxPatterns } from '../../../utils/sx-patterns';
import { PortfolioImageGallery } from '../PortfolioImageGallery';
import { PortfolioProjectLinks } from '../PortfolioProjectLinks';

export type PortfolioBentoHoverProps = {
  projects: ResolvedPortfolioProject[];
};

export const PortfolioBentoHover = ({ projects }: PortfolioBentoHoverProps) => (
  <Box
    sx={{
      display: { xs: 'grid', md: 'none' },
      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
      gap: { xs: 1.5, sm: 2 },
      textAlign: 'start',
    }}
  >
    {projects.map((project, index) => (
      <Box
        key={project.key}
        sx={{
          ...sxPatterns.sectionCard(),
          p: 0,
          overflow: 'hidden',
          gridColumn: index === 0 ? '1 / -1' : undefined,
          borderInlineStartWidth: 3,
          borderInlineStartColor: 'accent.main',
        }}
      >
        <PortfolioImageGallery
          images={project.images}
          viewport={project.galleryViewport}
          variant="dots"
        />
        <Box sx={{ p: 1.5 }}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            {project.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {project.problem}
          </Typography>
          <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap sx={{ mb: 1 }}>
            {project.tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" variant="outlined" />
            ))}
          </Stack>
          <Typography variant="body2" sx={{ color: 'accent.main', fontWeight: 500, mb: 1 }}>
            {project.outcome}
          </Typography>
          <PortfolioProjectLinks links={project.links} />
        </Box>
      </Box>
    ))}
  </Box>
);

export default PortfolioBentoHover;
