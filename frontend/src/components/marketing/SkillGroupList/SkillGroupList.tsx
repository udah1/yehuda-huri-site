import { Box, Typography } from '@mui/material';
import { sxPatterns } from '../../../utils/sx-patterns';
import type { SkillGroupListProps } from './SkillGroupList.types';

export const SkillGroupList = ({ groups }: SkillGroupListProps) => (
  <Box
    sx={{
      display: 'grid',
      gap: 2,
      gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
      textAlign: 'start',
    }}
  >
    {groups.map((group) => (
      <Box
        key={group.title}
        sx={{
          ...sxPatterns.sectionCard(),
          borderInlineStartWidth: 3,
          borderInlineStartColor: 'accent.main',
        }}
      >
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          {group.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {group.items}
        </Typography>
      </Box>
    ))}
  </Box>
);

export default SkillGroupList;
