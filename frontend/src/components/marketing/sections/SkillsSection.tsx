import { useTranslation } from 'react-i18next';
import { SKILL_GROUPS } from '../../../config/marketing/contentKeys';
import { LAYOUT } from '../../../config/constants/layout';
import { LANDING_SECTIONS } from '../../../config/routes';
import { Section } from '../../layout/Section';
import { SkillGroupList } from '../SkillGroupList';

export const SkillsSection = () => {
  const { t } = useTranslation();

  const groups = SKILL_GROUPS.map(({ key, itemsKey }) => ({
    title: t(`marketing.skills.${key}`),
    items: t(`marketing.skills.${itemsKey}`),
  }));

  return (
    <Section
      id={LANDING_SECTIONS.skills}
      title={t('marketing.skills.title')}
      subtitle={t('marketing.skills.subtitle')}
      maxWidth={LAYOUT.sectionMaxWidth.wide}
    >
      <SkillGroupList groups={groups} />
    </Section>
  );
};

export default SkillsSection;
