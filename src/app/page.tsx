import ContactForm from "@/components/home/contact";
import HeroImage from "@/components/home/hero";
import Photo from "@/components/home/photo";
import QuickStats from "@/components/home/quickstats";
import SkillSummary from "@/components/home/skillsExpQual";
import WorksSnippet from "@/components/home/works";

export default function Home() {
  return (
    <div className="relative flex flex-col">
      <HeroImage />
      <Photo />
      <QuickStats />
      <SkillSummary />
      <WorksSnippet />
      <ContactForm />
    </div>
  );
}
