import type { PortfolioProjectLinkKey } from '../../../config/marketing/portfolioProjects';

export type PortfolioProjectCardProps = {
  name: string;
  problem: string;
  solution: string;
  outcome: string;
  image?: string;
  tags?: readonly string[];
  links?: Partial<Record<PortfolioProjectLinkKey, string>>;
};

export type { PortfolioProjectLinkKey };
