import { useMemo } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PORTFOLIO_PREVIEW_DEFAULTS } from '../config/marketing/portfolioLayout';
import {
  PORTFOLIO_PROJECTS,
  type PortfolioImageAspect,
  type PortfolioPreviewConfig,
  type PortfolioPreviewFit,
  type PortfolioProjectLinkKey,
} from '../config/marketing/portfolioProjects';

const LANDSCAPE_ASPECT = 16 / 10;
const PORTRAIT_ASPECT = 9 / 16;

export type ResolvedPortfolioPreview = {
  maxWidth: number;
  /** Undefined = natural 16:10 height from maxWidth (landscape only). */
  maxHeight?: number;
  objectFit: PortfolioPreviewFit;
};

export type ResolvedPortfolioImage = {
  src: string;
  alt: string;
  aspect: PortfolioImageAspect;
  preview: ResolvedPortfolioPreview;
};

export type ResolvedGalleryViewport = {
  width: number;
  height: number;
};

export type ResolvedPortfolioProject = {
  key: (typeof PORTFOLIO_PROJECTS)[number]['key'];
  name: string;
  problem: string;
  solution: string;
  outcome: string;
  images: ResolvedPortfolioImage[];
  tags: readonly string[];
  links: Partial<Record<PortfolioProjectLinkKey, string>>;
  galleryViewport: ResolvedGalleryViewport;
};

const resolveMaxHeight = (
  aspect: PortfolioImageAspect,
  imagePreview?: PortfolioPreviewConfig,
  projectPreview?: PortfolioPreviewConfig,
): number | undefined => {
  if (imagePreview != null && 'maxHeight' in imagePreview) {
    return imagePreview.maxHeight === false ? undefined : imagePreview.maxHeight;
  }

  if (aspect === '9:16') {
    return PORTFOLIO_PREVIEW_DEFAULTS.portraitMaxHeight;
  }

  if (projectPreview != null && 'maxHeight' in projectPreview) {
    return projectPreview.maxHeight === false ? undefined : projectPreview.maxHeight;
  }

  return undefined;
};

const resolveObjectFit = (
  imagePreview?: PortfolioPreviewConfig,
  projectPreview?: PortfolioPreviewConfig,
): PortfolioPreviewFit => {
  if (imagePreview?.objectFit) {
    return imagePreview.objectFit;
  }

  if (projectPreview?.objectFit) {
    return projectPreview.objectFit;
  }

  return 'contain';
};

export const resolvePortfolioPreview = (
  aspect: PortfolioImageAspect,
  imagePreview?: PortfolioPreviewConfig,
  projectPreview?: PortfolioPreviewConfig,
): ResolvedPortfolioPreview => {
  const maxHeight = resolveMaxHeight(aspect, imagePreview, projectPreview);

  return {
    maxWidth:
      imagePreview?.maxWidth ?? projectPreview?.maxWidth ?? PORTFOLIO_PREVIEW_DEFAULTS.maxWidth,
    maxHeight,
    objectFit: resolveObjectFit(imagePreview, projectPreview),
  };
};

/** Resolved pixel size of one slide frame (before viewport max aggregation). */
export const computeSlideFrameSize = (
  aspect: PortfolioImageAspect,
  preview: ResolvedPortfolioPreview,
  referenceWidth = PORTFOLIO_PREVIEW_DEFAULTS.flushReferenceWidth,
): ResolvedGalleryViewport => {
  const { maxHeight, objectFit } = preview;
  const isPortrait = aspect === '9:16';

  if (isPortrait) {
    const height = maxHeight ?? PORTFOLIO_PREVIEW_DEFAULTS.portraitMaxHeight;
    if (objectFit === 'contain') {
      return { width: referenceWidth, height };
    }
    return { width: Math.min(referenceWidth, height * PORTRAIT_ASPECT), height };
  }

  if (maxHeight == null) {
    return { width: referenceWidth, height: referenceWidth / LANDSCAPE_ASPECT };
  }

  return { width: referenceWidth, height: maxHeight };
};

export const resolveGalleryViewport = (
  images: readonly Pick<ResolvedPortfolioImage, 'aspect' | 'preview'>[],
): ResolvedGalleryViewport => {
  if (images.length === 0) {
    return {
      width: PORTFOLIO_PREVIEW_DEFAULTS.flushReferenceWidth,
      height: PORTFOLIO_PREVIEW_DEFAULTS.flushReferenceWidth / LANDSCAPE_ASPECT,
    };
  }

  const sizes = images.map((image) => computeSlideFrameSize(image.aspect, image.preview));

  return {
    width: Math.max(...sizes.map((size) => size.width)),
    height: Math.max(...sizes.map((size) => size.height)),
  };
};

/**
 * Order slides so wide/landscape (desktop) shots lead on desktop and trail on mobile,
 * while portrait (phone) shots lead on mobile. Stable within each group; only affects
 * projects that mix aspects (e.g. Movies).
 */
const orderImagesForViewport = <T extends { aspect: PortfolioImageAspect }>(
  images: T[],
  isDesktop: boolean,
): T[] => {
  const rank = (aspect: PortfolioImageAspect) => {
    const isPortrait = aspect === '9:16';
    return isDesktop ? (isPortrait ? 1 : 0) : (isPortrait ? 0 : 1);
  };
  return [...images].sort((a, b) => rank(a.aspect) - rank(b.aspect));
};

export const usePortfolioProjects = (): ResolvedPortfolioProject[] => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return useMemo(
    () =>
      PORTFOLIO_PROJECTS.map((project) => {
        const images = orderImagesForViewport(
          project.images.map((image) => ({
            src: image.src,
            alt: t(`marketing.portfolio.${project.key}.images.${image.altKey}`),
            aspect: image.aspect ?? '16:10',
            preview: resolvePortfolioPreview(image.aspect ?? '16:10', image.preview, project.preview),
          })),
          isDesktop,
        );

        return {
          key: project.key,
          name: t(`marketing.portfolio.${project.key}.name`),
          problem: t(`marketing.portfolio.${project.key}.problem`),
          solution: t(`marketing.portfolio.${project.key}.solution`),
          outcome: t(`marketing.portfolio.${project.key}.outcome`),
          images,
          tags: project.tags,
          links: project.links,
          galleryViewport: resolveGalleryViewport(images),
        };
      }),
    [t, isDesktop],
  );
};
