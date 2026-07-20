import { Box } from '@mui/material';
import type { CardGridProps } from './CardGrid.types';

export const CardGrid = ({
  children,
  columns = { xs: 1, sm: 2, md: 3 },
}: CardGridProps) => (
  <Box
    sx={{
      display: 'grid',
      gap: 2,
      gridTemplateColumns: {
        xs: `repeat(${columns.xs ?? 1}, 1fr)`,
        sm: `repeat(${columns.sm ?? 2}, 1fr)`,
        md: `repeat(${columns.md ?? 3}, 1fr)`,
      },
    }}
  >
    {children}
  </Box>
);

export default CardGrid;
