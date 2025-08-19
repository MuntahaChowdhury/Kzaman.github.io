import ContactForm from "@/components/home/contact";
import HeroImage from "@/components/home/hero";
import Photo from "@/components/home/photo";
import QuickStats from "@/components/home/quickstats";
import SkillSummary from "@/components/home/skills";
import WorksSnippet from "@/components/home/works";
import Footer from "@/components/uiwidget/footer";
import Header from "@/components/uiwidget/header";
import BackToTop from "@/components/uiwidget/toTop";

export default function Home() {
  return (
    <div className="relative flex flex-col">

      <Header />
      <HeroImage />
      <Photo />
      <QuickStats />
      <SkillSummary />
      <WorksSnippet />
      <ContactForm />
      <Footer />
      <BackToTop />
    </div>
  );
}
