import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { LAYOUT } from '../../config/constants/layout';
import { LANDING_SECTIONS, ROUTES, resolveLandingSectionHash } from '../../config/routes';
import { landingSectionScrollMargin, scrollToLandingSection } from '../../utils/landingNavigation';
import { SeoHead } from '../../components/common/SeoHead';
import { HeroSection } from '../../components/marketing/HeroSection';
import { FeatureCardGrid } from '../../components/marketing/FeatureCardGrid';
import {
  AboutSection,
  ExperienceSection,
  PortfolioSection,
  SkillsSection,
} from '../../components/marketing/sections';

/**
 * Section we've already auto-scrolled to for the current hash. Module-scoped so it
 * survives the full remount that a language/RTL switch triggers (CacheProvider
 * `key={direction}`) — otherwise the mount effect would jump back to the hash target
 * every time the user changes language after scrolling away.
 */
let lastAutoScrolledSection: string | null = null;

const LandingPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    const rawHash = hash.slice(1);
    const sectionId = resolveLandingSectionHash(rawHash);
    if (!sectionId) return;

    if (rawHash !== sectionId) {
      window.history.replaceState(null, '', `${ROUTES.home}#${sectionId}`);
    }

    if (sectionId === lastAutoScrolledSection) return;
    lastAutoScrolledSection = sectionId;

    requestAnimationFrame(() => {
      scrollToLandingSection(sectionId, {
        updateHash: false,
        retryMs: 320,
      });
    });
  }, [hash]);

  return (
    <>
      <SeoHead includePersonSchema />
      <Box>
        <Box
          id={LANDING_SECTIONS.overview}
          component="section"
          sx={{
            scrollMarginTop: landingSectionScrollMargin(),
            pb: LAYOUT.sectionBlockEndFirst,
          }}
        >
          <HeroSection />
          <FeatureCardGrid />
        </Box>
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <PortfolioSection />
      </Box>
    </>
  );
};

export default LandingPage;
