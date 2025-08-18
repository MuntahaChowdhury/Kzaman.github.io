import ContactForm from "@/components/home/contact";
import HeroImage from "@/components/home/hero";
import Photo from "@/components/home/photo";
import QuickStats from "@/components/home/quickstats";
import WorksSnippet from "@/components/home/works";
import Footer from "@/components/uiwidget/footer";
import Header from "@/components/uiwidget/header";

export default function Home() {
  return (
    <div className="relative flex flex-col space-y-12">

      <Header />
      <HeroImage />
      <Photo />
      <QuickStats />
      <WorksSnippet />
         - Skills
      <ContactForm />
      <Footer />
    </div>
  );
}
