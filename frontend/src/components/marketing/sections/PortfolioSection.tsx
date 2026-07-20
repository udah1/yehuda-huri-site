import { useTranslation } from 'react-i18next';
import { usePortfolioProjects } from '../../../hooks/usePortfolioProjects';
import { LAYOUT } from '../../../config/constants/layout';
import { LANDING_SECTIONS } from '../../../config/routes';
import { Section } from '../../layout/Section';
import { PortfolioBentoHover } from '../PortfolioBentoHover';
import { PortfolioExplorer } from '../PortfolioExplorer';

export const PortfolioSection = () => {
  const { t } = useTranslation();
  const projects = usePortfolioProjects();

  return (
    <Section
      id={LANDING_SECTIONS.portfolio}
      title={t('marketing.portfolio.title')}
      subtitle={t('marketing.portfolio.subtitle')}
      maxWidth={LAYOUT.sectionMaxWidth.wide}
    >
      <PortfolioExplorer projects={projects} />
      <PortfolioBentoHover projects={projects} />
    </Section>
  );
};

export default PortfolioSection;
