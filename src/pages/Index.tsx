import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OmSection from "@/components/Omsection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import TillsammansSection from "@/components/Tillsammans";

const projects = [
  {
    id: "strandpark",
    title: "Vi utvecklar boenden som skapar värde – idag och i framtiden",
    status: "",
    description:
      "Vi är fastighetsutvecklingsbolaget som kombinerar erfarenhet, innovation och affärsmässig skärpa för att skapa framtidens bostäder och äldreboenden. Med oss får kommuner och partners en trygg utvecklingsaktör som levererar projekt med hög attraktivitet, stark efterfrågan och långsiktigt värde.",
    details: [

    ],
    image: project1,
    imageAlt: "Strandpark bostadsprojekt med innergård",
  },
  {
    id: "centrumhuset",
    title: "Lång erfarenhet som skapar lönsamma projekt",
    status: "",
    description:
      "Vår breda kompetens gör att vi snabbt kan identifiera rätt tomter, rätt lägen och rätt affärsmöjligheter. Vi utvecklar projekt som inte bara möter dagens behov – utan också morgondagens krav på hållbarhet, kvalitet och funktionalitet. Resultatet är boenden som är eftertraktade, effektiva och redo för framtiden.",
    details: [

    ],
    image: project2,
    imageAlt: "Centrumhuset kontorsfastighet med glasfasad",
    reverse: true,
  },
  {
    id: "hamngatan",
    title: "Attraktiva lösningar för kommuner och omsorgsaktörer",
    status: "",
    description:
      "Vi skapar moderna och trygga äldreboenden med genomtänkt design, smarta planlösningar och kostnadseffektiva driftlösningar. Våra projekt bidrar till att stärka kommunens utbud, minska kapacitetsbrist och ge invånare en högre livskvalitet.",
    details: [

    ],
    image: project3,
    imageAlt: "Hamngatan radhus vid vattnet",
  },
  {
    id: "sista",
    title: "Bostäder som människor vill bo och stanna i",
    status: "",
    description:
      "Genom noggrann planering och fokus på arkitektur, grönska och hållbara material skapar vi boendemiljöer där människor känner trivsel från dag ett. Vi kombinerar funktion, estetik och energieffektivitet för att leverera attraktiva hem med stark marknadsposition.",
    details: [

    ],
    image: project2,
    imageAlt: "Centrumhuset kontorsfastighet med glasfasad",
    reverse: true,
  },
];

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <OmSection />
      {projects.map((project) => (
        <ProjectSection key={project.id} {...project} />
      ))}
      <TillsammansSection />
      <ContactSection />
    </main>
  );
};

export default Index;
