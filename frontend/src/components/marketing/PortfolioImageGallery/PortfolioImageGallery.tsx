import { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Button, IconButton, alpha, useTheme } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTranslation } from 'react-i18next';
import {
  PORTFOLIO_GALLERY_TRANSITION_MS,
  PORTFOLIO_IMAGE_ASPECT,
  PORTFOLIO_PLACEHOLDER,
  PORTFOLIO_VIEWPORT_HEIGHT_TRANSITION_MS,
} from '../../../config/marketing/portfolioLayout';
import {
  computeSlideFrameSize,
  type ResolvedPortfolioImage,
} from '../../../hooks/usePortfolioProjects';
import type { PortfolioImageGalleryProps } from './PortfolioImageGallery.types';

type SlideImageProps = {
  image: ResolvedPortfolioImage;
  src: string;
  onError: () => void;
};

const SlideImage = ({ image, src, onError }: SlideImageProps) => {
  const isPortrait = image.aspect === '9:16';
  const { maxWidth, maxHeight, objectFit } = image.preview;
  const naturalPortrait = isPortrait && objectFit === 'contain';
  const objectPosition = objectFit === 'cover' ? 'top center' : 'center';

  if (!isPortrait) {
    return (
      <Box
        component="img"
        src={src}
        alt={image.alt}
        onError={onError}
        sx={{
          width: '100%',
          height: '100%',
          objectFit,
          objectPosition,
          display: 'block',
        }}
      />
    );
  }

  if (naturalPortrait) {
    return (
      <Box
        component="img"
        src={src}
        alt={image.alt}
        onError={onError}
        sx={{
          display: 'block',
          width: 'auto',
          height: 'auto',
          maxHeight,
          maxWidth,
        }}
      />
    );
  }

  const frame = computeSlideFrameSize(image.aspect, image.preview);

  return (
    <Box
      component="img"
      src={src}
      alt={image.alt}
      onError={onError}
      sx={{
        display: 'block',
        width: frame.width,
        maxWidth: '100%',
        height: frame.height,
        maxHeight: '100%',
        aspectRatio: PORTFOLIO_IMAGE_ASPECT.mobile,
        objectFit,
        objectPosition,
      }}
    />
  );
};

export const PortfolioImageGallery = ({
  images,
  viewport,
  variant,
}: PortfolioImageGalleryProps) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  const selectImage = useCallback((index: number) => {
    setActiveIndex(index);
    setFailedSrc(null);
  }, []);

  const stepImage = useCallback(
    (delta: number) => {
      setActiveIndex((current) => (current + delta + images.length) % images.length);
      setFailedSrc(null);
    },
    [images.length],
  );

  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = useCallback((event: React.TouchEvent) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
  }, []);

  const handleTouchEnd = useCallback(
    (event: React.TouchEvent) => {
      const start = touchStartXRef.current;
      touchStartXRef.current = null;
      if (start == null) return;
      const delta = (event.changedTouches[0]?.clientX ?? start) - start;
      if (Math.abs(delta) < 40) return;
      // Track is fixed LTR, so swipe-left always advances to the next slide.
      stepImage(delta < 0 ? 1 : -1);
    },
    [stepImage],
  );

  useEffect(() => {
    setActiveIndex(0);
    setFailedSrc(null);
  }, [images]);

  if (images.length === 0) {
    return null;
  }

  const safeIndex = Math.min(activeIndex, images.length - 1);
  const hasNav = images.length > 1;
  const overlayDots = variant === 'overlay-dots';
  const bottomDots = variant === 'dots';
  const thumbStrip = variant === 'thumbs';

  const resolveSrc = (image: ResolvedPortfolioImage) =>
    failedSrc === image.src && image === images[safeIndex] ? PORTFOLIO_PLACEHOLDER : image.src;

  const dotButtons = images.map((image, index) => (
    <Button
      key={image.alt}
      role="tab"
      aria-selected={index === safeIndex}
      aria-label={t('marketing.portfolio.imageSlideLabel', {
        label: image.alt,
        current: index + 1,
        total: images.length,
      })}
      onClick={() => selectImage(index)}
      sx={{
        minWidth: 0,
        p: 0,
        width: 8,
        height: 8,
        borderRadius: '50%',
        bgcolor: index === safeIndex ? 'accent.main' : 'divider',
        border: overlayDots ? `1px solid ${alpha(theme.palette.common.white, 0.35)}` : 'none',
        transition: 'background-color 0.2s ease, transform 0.2s ease',
        transform: index === safeIndex ? 'scale(1.12)' : 'scale(1)',
        '&:hover': {
          bgcolor: index === safeIndex ? 'accent.main' : alpha(theme.palette.accent.main, 0.35),
        },
      }}
    />
  ));

  const arrowButtonSx = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    width: 36,
    height: 36,
    color: theme.palette.common.white,
    bgcolor: alpha(theme.palette.common.black, 0.4),
    backdropFilter: 'blur(2px)',
    '&:hover': { bgcolor: alpha(theme.palette.common.black, 0.6) },
  } as const;

  return (
    <>
      <Box
        onTouchStart={hasNav ? handleTouchStart : undefined}
        onTouchEnd={hasNav ? handleTouchEnd : undefined}
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: viewport.height,
          overflow: 'hidden',
          bgcolor: (theme) => theme.marketing.mediaStageBackground,
          transition: `min-height ${PORTFOLIO_VIEWPORT_HEIGHT_TRANSITION_MS}ms ease`,
          touchAction: hasNav ? 'pan-y' : undefined,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: viewport.height,
            direction: 'ltr',
            transform: `translateX(-${safeIndex * 100}%)`,
            transition: `transform ${PORTFOLIO_GALLERY_TRANSITION_MS}ms ease`,
          }}
        >
          {images.map((image, index) => (
            <Box
              key={image.src}
              aria-hidden={index !== safeIndex}
              sx={{
                flex: '0 0 100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SlideImage
                image={image}
                src={resolveSrc(image)}
                onError={() => {
                  if (index === safeIndex) {
                    setFailedSrc(image.src);
                  }
                }}
              />
            </Box>
          ))}
        </Box>
        {hasNav && (
          <>
            <IconButton
              aria-label={t('marketing.portfolio.previousImage')}
              onClick={() => stepImage(-1)}
              size="small"
              style={{ left: 8 }}
              sx={arrowButtonSx}
            >
              <ChevronLeftIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label={t('marketing.portfolio.nextImage')}
              onClick={() => stepImage(1)}
              size="small"
              style={{ right: 8 }}
              sx={arrowButtonSx}
            >
              <ChevronRightIcon fontSize="small" />
            </IconButton>
          </>
        )}
        {hasNav && overlayDots && (
          <Box
            role="tablist"
            aria-label={t('marketing.portfolio.galleryLabel')}
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 1,
              display: 'flex',
              justifyContent: 'center',
              gap: 0.75,
              py: 1.25,
              px: 1,
              background: (muiTheme) =>
                `linear-gradient(transparent, ${alpha(muiTheme.palette.common.black, 0.45)})`,
            }}
          >
            {dotButtons}
          </Box>
        )}
      </Box>
      {hasNav && thumbStrip && (
        <Box
          role="tablist"
          aria-label={t('marketing.portfolio.galleryLabel')}
          sx={{
            display: 'flex',
            gap: 0.75,
            p: 1,
            overflowX: 'auto',
            borderTop: 1,
            borderColor: 'divider',
            bgcolor: 'background.paper',
          }}
        >
          {images.map((image, index) => (
            <Button
              key={image.alt}
              role="tab"
              aria-selected={index === safeIndex}
              aria-label={t('marketing.portfolio.imageSlideLabel', {
                label: image.alt,
                current: index + 1,
                total: images.length,
              })}
              onClick={() => selectImage(index)}
              sx={{
                flex: '0 0 64px',
                p: 0,
                minWidth: 64,
                height: 40,
                borderRadius: 1,
                overflow: 'hidden',
                border: 2,
                borderColor: index === safeIndex ? 'accent.main' : 'transparent',
                opacity: index === safeIndex ? 1 : 0.55,
                transition: 'opacity 0.2s ease, border-color 0.2s ease',
              }}
            >
              <Box
                component="img"
                src={image.src}
                alt=""
                aria-hidden
                sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              />
            </Button>
          ))}
        </Box>
      )}
      {hasNav && bottomDots && (
        <Box
          role="tablist"
          aria-label={t('marketing.portfolio.galleryLabel')}
          sx={{ display: 'flex', justifyContent: 'center', gap: 0.75, py: 1 }}
        >
          {dotButtons}
        </Box>
      )}
    </>
  );
};

export default PortfolioImageGallery;
