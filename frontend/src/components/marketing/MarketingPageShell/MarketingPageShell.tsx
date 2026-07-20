import { Box } from '@mui/material';
import Fade from '@mui/material/Fade';
import { LAYOUT } from '../../../config/constants/layout';
import { Section } from '../../layout/Section';
import type { MarketingPageShellProps } from './MarketingPageShell.types';

export const MarketingPageShell = ({
  title,
  subtitle,
  maxWidth = LAYOUT.sectionMaxWidth.default,
  children,
}: MarketingPageShellProps) => (
  <Fade in timeout={LAYOUT.pageFadeTimeoutMs}>
    <Box sx={{ py: 2 }}>
      <Section title={title} subtitle={subtitle} maxWidth={maxWidth} sx={{ py: 4 }}>
        {children}
      </Section>
    </Box>
  </Fade>
);

export default MarketingPageShell;
