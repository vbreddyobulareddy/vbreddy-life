import ExperienceSegment from "./_segments/expirence";
import FooterSegment from "./_segments/footer";
import HeroSegment from "./_segments/hero";
import SkillsSegment from "./_segments/skills";
import StartupSegment from "./_segments/startups";

const RootPage = (props) => {
  console.log("--==RootPage", props);
  return (
    <>
      <HeroSegment></HeroSegment>
      <SkillsSegment></SkillsSegment>
      <StartupSegment></StartupSegment>
      <ExperienceSegment></ExperienceSegment>
      <FooterSegment></FooterSegment>
    </>
  );
};

export default RootPage;
