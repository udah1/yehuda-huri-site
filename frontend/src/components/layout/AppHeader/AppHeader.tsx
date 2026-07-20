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
          <Box
            component="button"
            type="button"
            onClick={onLogoClick}
            aria-label={t('marketing.siteName')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              minWidth: 0,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              p: 0,
              color: 'inherit',
            }}
          >
            <Box
              aria-hidden
              sx={{
                flexShrink: 0,
                width: 30,
                height: 30,
                borderRadius: '7px',
                bgcolor: 'accent.main',
                color: (theme) => theme.palette.getContrastText(theme.palette.accent.main),
                display: 'grid',
                placeItems: 'center',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '-0.5px',
                lineHeight: 1,
              }}
            >
              <span>
                <Box component="span" sx={{ opacity: 0.55 }}>
                  {'{'}
                </Box>
                YH
                <Box component="span" sx={{ opacity: 0.55 }}>
                  {'}'}
                </Box>
              </span>
            </Box>
            <Typography
              component="span"
              variant="h6"
              noWrap
              sx={{ fontWeight: 700, letterSpacing: '0.02em' }}
            >
              {t('marketing.siteName')}
            </Typography>
          </Box>
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
