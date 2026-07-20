import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { LAYOUT } from '../../../config/constants/layout';
import { isMarketingNavLinkActive } from '../navConfig';
import type { MobileNavDrawerProps } from './MobileNavDrawer.types';

export const MobileNavDrawer = ({
  open,
  marketingLinks,
  pathname,
  activeSectionId,
  onClose,
  onSiteNameClick,
  onMarketingNavigate,
}: MobileNavDrawerProps) => {
  const { t } = useTranslation();

  const renderMarketingListItem = (link: (typeof marketingLinks)[number]) => (
    <ListItemButton
      key={link.sectionId ?? link.path}
      selected={isMarketingNavLinkActive(pathname, activeSectionId, link)}
      onClick={() => onMarketingNavigate(link)}
    >
      <ListItemText primary={t(link.labelKey)} />
    </ListItemButton>
  );

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: LAYOUT.mobileDrawerWidth },
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          component="button"
          type="button"
          variant="h6"
          onClick={onSiteNameClick}
          sx={{
            fontWeight: 700,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            p: 0,
            color: 'inherit',
            textAlign: 'start',
          }}
        >
          {t('marketing.siteName')}
        </Typography>
        <IconButton onClick={onClose} aria-label={t('common.close')}>
          <CloseIcon />
        </IconButton>
      </Toolbar>

      <List sx={{ pt: 2, flex: 1 }}>
        {marketingLinks.map(renderMarketingListItem)}
      </List>
    </Drawer>
  );
};

export default MobileNavDrawer;
