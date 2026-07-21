import type { ReactElement } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import {
  GridViewOutlined,
  HomeOutlined,
  PersonOutline,
  TerminalOutlined,
  WorkOutline,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { LANDING_SECTIONS } from '../../../config/routes';
import type { BottomNavBarProps } from './BottomNavBar.types';

const SECTION_ICONS: Record<string, ReactElement> = {
  [LANDING_SECTIONS.overview]: <HomeOutlined />,
  [LANDING_SECTIONS.about]: <PersonOutline />,
  [LANDING_SECTIONS.experience]: <WorkOutline />,
  [LANDING_SECTIONS.skills]: <TerminalOutlined />,
  [LANDING_SECTIONS.portfolio]: <GridViewOutlined />,
};

export const BottomNavBar = ({ links, activeSectionId, onNavigate }: BottomNavBarProps) => {
  const { t } = useTranslation();

  return (
    <Paper
      component="nav"
      elevation={8}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        display: { xs: 'block', md: 'none' },
        borderTop: 1,
        borderColor: 'divider',
        pb: 'env(safe-area-inset-bottom)',
      }}
    >
      <BottomNavigation
        showLabels
        value={activeSectionId ?? false}
        onChange={(_event, value) => {
          const link = links.find((item) => item.sectionId === value);
          if (link) onNavigate(link);
        }}
        sx={{ bgcolor: 'transparent', height: 56 }}
      >
        {links.map((link) => (
          <BottomNavigationAction
            key={link.sectionId ?? link.path}
            value={link.sectionId}
            label={t(link.labelKey)}
            icon={link.sectionId ? SECTION_ICONS[link.sectionId] : undefined}
            sx={{
              minWidth: 0,
              px: 0.5,
              '& .MuiBottomNavigationAction-label': { fontSize: '0.7rem' },
              '&.Mui-selected': { color: 'accent.main' },
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavBar;
