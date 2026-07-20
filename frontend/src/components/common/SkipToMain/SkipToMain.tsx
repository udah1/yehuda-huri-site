import { Link } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const SkipToMain = () => {
  const { t } = useTranslation();

  return (
    <Link
      href="#main-content"
      sx={{
        position: 'absolute',
        left: -9999,
        top: 'auto',
        width: 1,
        height: 1,
        overflow: 'hidden',
        zIndex: 9999,
        px: 2,
        py: 1,
        bgcolor: 'background.paper',
        color: 'text.primary',
        textDecoration: 'none',
        borderRadius: 1,
        boxShadow: 2,
        '&:focus': {
          position: 'fixed',
          left: 16,
          top: 16,
          width: 'auto',
          height: 'auto',
          overflow: 'visible',
        },
      }}
    >
      {t('marketing.a11y.skipToMain')}
    </Link>
  );
};

export default SkipToMain;
