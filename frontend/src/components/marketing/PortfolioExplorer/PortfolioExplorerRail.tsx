import { Box, Typography } from '@mui/material';
import type { ResolvedPortfolioProject } from '../../../hooks/usePortfolioProjects';
import { sxPatterns } from '../../../utils/sx-patterns';

export type PortfolioExplorerRailProps = {
  projects: ResolvedPortfolioProject[];
  activeIndex: number;
  onSelect: (index: number) => void;
  ariaLabel: string;
};

export const PortfolioExplorerRail = ({
  projects,
  activeIndex,
  onSelect,
  ariaLabel,
}: PortfolioExplorerRailProps) => (
  <Box component="nav" aria-label={ariaLabel}>
    {projects.map((item, index) => {
      const active = index === activeIndex;

      return (
        <Box
          key={item.key}
          component="button"
          type="button"
          role="tab"
          aria-selected={active}
          onClick={() => onSelect(index)}
          sx={{
            ...sxPatterns.sectionCard(),
            display: 'block',
            width: '100%',
            mb: 1,
            p: 2,
            cursor: 'pointer',
            appearance: 'none',
            font: 'inherit',
            textAlign: 'start',
            borderInlineStartWidth: 3,
            borderInlineStartColor: 'accent.main',
            borderColor: active ? 'accent.main' : 'divider',
            '&:focus': { outline: 'none' },
            '&:focus-visible': {
              outline: '2px solid',
              outlineColor: 'accent.main',
              outlineOffset: 2,
            },
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              lineHeight: 1.35,
              color: active ? 'text.primary' : 'text.secondary',
            }}
          >
            {item.name}
          </Typography>
        </Box>
      );
    })}
  </Box>
);

export default PortfolioExplorerRail;
