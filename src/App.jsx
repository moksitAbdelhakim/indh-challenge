// Suggested code may be subject to a license. Learn more: ~LicenseLog:2866716728.
import { Header } from './components/layout/Header.jsx'
import { Footer } from './components/layout/Footer.jsx'
import IndhQuoteSection from './components/sections/IndhQuoteSection.jsx'
import ProgramConditionsSection from './components/sections/ProgramConditionsSection.jsx'
import IndhJourneySection from './components/sections/IndhJourneySection.jsx'
import TinghirProgramsSection from './components/sections/TinghirProgramsSection.jsx'
import { Button } from './components/ui/Button.jsx'
function App() {


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow relative">
        <section className="relative w-full h-screen overflow-hidden">
          <video autoPlay loop muted>
            <source src="/video_hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-x-0 bottom-0 mb-24 flex justify-center px-4 text-center z-10">
            <div className="bg-primary p-8 rounded-lg shadow-lg max-w-5xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              المبادرة الوطنية للتنمية البشرية: 20 عاماً من التأثير والابتكار
              </h1>
              <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto mb-10">
                اكتشف كيف ساهمت المبادرة الوطنية للتنمية البشرية في تغيير حياة الناس وصياغة مستقبل المغرب من خلال أشكال مبتكرة ومبتكرة
              </p>
              <div className="space-x-4">
                <Button variant="secondary" size="lg" className="bg-accent text-primary-foreground">
                  <a href="#timeline">
                    استكشف المعالم البارزة</a>
                </Button>
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/30" asChild>
                  <a href="http://www.indh.ma/Ar" target="_blank" rel="noopener noreferrer">
                    الموقع الرسمي للمبادرة</a>
                </Button>
              </div>
            </div>
          </div>
          </section>
        <IndhQuoteSection />
      </main >
      <IndhJourneySection />
      <TinghirProgramsSection />
      <ProgramConditionsSection />
      <Footer />
    </div>
  );
}

export default App
