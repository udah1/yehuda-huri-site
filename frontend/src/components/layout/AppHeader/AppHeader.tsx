import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { isMarketingNavLinkActive } from '../navConfig';
import type { AppHeaderProps } from './AppHeader.types';

export const AppHeader = ({
  pathname,
  activeSectionId,
  desktopMarketingLinks,
  chromeActions,
  onOpenMobileMenu,
  onMarketingNavigate,
  onLogoClick,
}: AppHeaderProps) => {
  const { t } = useTranslation();

  const renderNavButton = (link: (typeof desktopMarketingLinks)[number]) => {
    const isActive = isMarketingNavLinkActive(pathname, activeSectionId, link);

    return (
      <Button
        key={link.sectionId ?? link.path}
        color="inherit"
        size="small"
        onClick={() => onMarketingNavigate(link)}
        sx={{
          opacity: isActive ? 1 : 0.85,
          fontWeight: isActive ? 600 : 500,
          position: 'relative',
          ...(isActive && {
            '&::after': {
              content: '""',
              position: 'absolute',
              insetInline: 0,
              bottom: 2,
              height: 2,
              bgcolor: 'accent.main',
              borderRadius: 1,
            },
          }),
        }}
      >
        {t(link.labelKey)}
      </Button>
    );
  };

  return (
    <AppBar position="sticky" id="app-site-header">
      <Toolbar sx={{ justifyContent: 'space-between', py: 0.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 0 }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={onOpenMobileMenu}
            sx={{ mr: 0, display: { md: 'none' } }}
            aria-label={t('common.openMenu')}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="button"
            type="button"
            variant="h6"
            noWrap
            onClick={onLogoClick}
            sx={{
              fontWeight: 700,
              textDecoration: 'none',
              color: 'inherit',
              letterSpacing: '0.02em',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              p: 0,
            }}
          >
            {t('marketing.siteName')}
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center', flexWrap: 'wrap' }}>
            {desktopMarketingLinks.map(renderNavButton)}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexShrink: 0 }}>{chromeActions}</Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
