import { useState } from 'react';
import { Box, Chip, Fade, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PORTFOLIO_EXPLORER } from '../../../config/marketing/portfolioLayout';
import type { ResolvedPortfolioProject } from '../../../hooks/usePortfolioProjects';
import { sxPatterns } from '../../../utils/sx-patterns';
import { PortfolioImageGallery } from '../PortfolioImageGallery';
import { PortfolioProjectLinks } from '../PortfolioProjectLinks';
import { PortfolioExplorerRail } from './PortfolioExplorerRail';

export type PortfolioExplorerProps = {
  projects: ResolvedPortfolioProject[];
};

export const PortfolioExplorer = ({ projects }: PortfolioExplorerProps) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex] ?? projects[0];

  if (!project) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'grid' },
        gridTemplateColumns: `${PORTFOLIO_EXPLORER.railWidth}px 1fr`,
        gap: 2.5,
        textAlign: 'start',
        alignItems: 'start',
      }}
    >
      <PortfolioExplorerRail
        projects={projects}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
        ariaLabel={t('marketing.portfolio.projectListLabel')}
      />

      <Fade in key={project.key} timeout={320}>
        <Box
          sx={{
            ...sxPatterns.sectionCard(),
            p: 0,
            overflow: 'hidden',
          }}
        >
          <PortfolioImageGallery
            key={project.key}
            images={project.images}
            viewport={project.galleryViewport}
            variant="overlay-dots"
          />
          <Box sx={{ p: 2, pt: 1.5 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {project.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {project.problem}
            </Typography>
            <Typography variant="body2" sx={{ color: 'accent.main', fontWeight: 500, mb: 1.25 }}>
              {project.outcome}
            </Typography>
            <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap sx={{ mb: 1.25 }}>
              {project.tags.map((tag) => (
                <Chip key={tag} label={tag} size="small" variant="outlined" />
              ))}
            </Stack>
            <PortfolioProjectLinks links={project.links} />
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default PortfolioExplorer;
