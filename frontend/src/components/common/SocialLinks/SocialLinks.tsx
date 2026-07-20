import type { ComponentProps, ElementType } from 'react';
import { IconButton, Stack, SvgIcon, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTranslation } from 'react-i18next';
import { SOCIAL_LINKS, type SocialLinkKey } from '../../../config/constants/social';

const NpmIcon = (props: ComponentProps<typeof SvgIcon>) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.087 19.2H5.113z" />
  </SvgIcon>
);

export type SocialLinksProps = {
  size?: 'small' | 'medium' | 'large';
  direction?: 'row' | 'column';
  /** `prominent` — bordered buttons for contact/footer (clear link affordance). */
  variant?: 'default' | 'prominent';
};

const SOCIAL_ITEMS: readonly { key: SocialLinkKey; icon: ElementType; labelKey: string }[] = [
  { key: 'linkedIn', icon: LinkedInIcon, labelKey: 'marketing.social.linkedIn' },
  { key: 'github', icon: GitHubIcon, labelKey: 'marketing.social.github' },
  { key: 'npm', icon: NpmIcon, labelKey: 'marketing.social.npm' },
];

const ICON_FONT_SIZE = {
  small: '1.25rem',
  medium: '1.5rem',
  large: '1.75rem',
} as const;

export const SocialLinks = ({
  size = 'medium',
  direction = 'row',
  variant = 'default',
}: SocialLinksProps) => {
  const { t } = useTranslation();
  const isProminent = variant === 'prominent';
  const iconSize = isProminent ? 'large' : size;

  return (
    <Stack
      direction={direction}
      spacing={isProminent ? 1.5 : 1}
      alignItems={direction === 'row' ? 'center' : 'flex-start'}
      role="list"
      aria-label={t('marketing.social.socialLinksLabel')}
    >
      {SOCIAL_ITEMS.map(({ key, icon: Icon, labelKey }) => (
        <Tooltip key={key} title={t(labelKey)}>
          <IconButton
            component="a"
            href={SOCIAL_LINKS[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t(labelKey)}
            size={isProminent ? 'large' : size}
            color="inherit"
            role="listitem"
            sx={{
              color: 'text.primary',
              cursor: 'pointer',
              transition: 'border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease',
              ...(isProminent
                ? {
                    border: 1,
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    width: 48,
                    height: 48,
                    '&:hover': {
                      borderColor: 'accent.main',
                      color: 'accent.main',
                      bgcolor: 'action.hover',
                    },
                  }
                : {
                    color: 'text.secondary',
                    '&:hover': { color: 'accent.main' },
                  }),
            }}
          >
            <Icon sx={{ fontSize: ICON_FONT_SIZE[iconSize] }} />
          </IconButton>
        </Tooltip>
      ))}
    </Stack>
  );
};

export default SocialLinks;
