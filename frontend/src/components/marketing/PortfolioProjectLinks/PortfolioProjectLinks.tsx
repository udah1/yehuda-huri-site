import { Link, Stack } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useTranslation } from 'react-i18next';
import {
  PORTFOLIO_LINK_ORDER,
  type PortfolioProjectLinkKey,
} from '../../../config/marketing/portfolioProjects';

export type PortfolioProjectLinksProps = {
  links: Partial<Record<PortfolioProjectLinkKey, string>>;
  linkColor?: string;
};

export const PortfolioProjectLinks = ({ links, linkColor }: PortfolioProjectLinksProps) => {
  const { t } = useTranslation();
  const entries = PORTFOLIO_LINK_ORDER.filter((key) => links[key]);

  if (entries.length === 0) {
    return null;
  }

  return (
    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
      {entries.map((key) => (
        <Link
          key={key}
          href={links[key]}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.25,
            fontSize: '0.875rem',
            color: linkColor,
          }}
        >
          {t(`marketing.portfolio.links.${key}`)}
          <OpenInNewIcon sx={{ fontSize: '0.875rem' }} aria-hidden />
        </Link>
      ))}
    </Stack>
  );
};

export default PortfolioProjectLinks;
