import type { ResolvedGalleryViewport, ResolvedPortfolioImage } from '../../../hooks/usePortfolioProjects';

export type PortfolioImageGalleryVariant = 'dots' | 'thumbs' | 'overlay-dots';

export type PortfolioImageGalleryProps = {
  images: readonly ResolvedPortfolioImage[];
  viewport: ResolvedGalleryViewport;
  variant: PortfolioImageGalleryVariant;
};
