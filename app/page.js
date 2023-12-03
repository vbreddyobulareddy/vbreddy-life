import AssociatedSegment from "./_segments/associated";
import ExperienceSegment from "./_segments/expirence";
import FooterSegment from "./_segments/footer";
import HeroSegment from "./_segments/hero";
import MentorshipSegment from "./_segments/mentorship";
import SkillsSegment from "./_segments/skills";
import StartupSegment from "./_segments/startups";


const RootPage = async () => {
  return (
    <div className="dark:bg-[#fff] dark:text-[#121c24]">
      <HeroSegment></HeroSegment>
      <SkillsSegment></SkillsSegment>
      <StartupSegment></StartupSegment>
      <ExperienceSegment></ExperienceSegment>
      <MentorshipSegment></MentorshipSegment>
      {/* <AssociatedSegment /> */}
      <FooterSegment></FooterSegment>
    </div>
  );
};

export default RootPage;
