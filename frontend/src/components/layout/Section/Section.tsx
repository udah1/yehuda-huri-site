import { Box, Typography } from '@mui/material';
import { LAYOUT } from '../../../config/constants/layout';
import type { SectionProps } from './Section.types';

export const Section = ({
  id,
  title,
  subtitle,
  children,
  maxWidth = LAYOUT.sectionMaxWidth.default,
  align = 'center',
  sx,
}: SectionProps) => (
  <Box
    component="section"
    sx={{
      pb: LAYOUT.sectionBlockEnd,
      px: 2,
      ...sx,
    }}
  >
    <Box sx={{ maxWidth, mx: 'auto' }}>
      {title && (
        <Box
          id={id}
          sx={{
            scrollMarginTop: 'var(--site-header-offset, 68px)',
            mb: subtitle ? 2 : 4,
            textAlign: align,
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: subtitle ? 2 : 0,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '2.75rem' },
              color: 'text.primary',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: align === 'center' ? '50%' : align === 'right' ? '100%' : '0',
                transform:
                  align === 'center'
                    ? 'translateX(-50%)'
                    : align === 'right'
                      ? 'translateX(-100%)'
                      : 'none',
                width: 60,
                height: 4,
                bgcolor: 'accent.main',
                borderRadius: 2,
              },
            }}
          >
            {title}
          </Typography>
        </Box>
      )}

      {!title && id && (
        <Box id={id} sx={{ scrollMarginTop: 'var(--site-header-offset, 68px)' }} aria-hidden />
      )}

      {subtitle && (
        <Typography
          variant="h6"
          sx={{
            textAlign: align,
            color: 'text.secondary',
            mb: LAYOUT.sectionSubtitleEnd,
            maxWidth: 600,
            mx: align === 'center' ? 'auto' : 0,
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </Typography>
      )}

      {children}
    </Box>
  </Box>
);

export default Section;
