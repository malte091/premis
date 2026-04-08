import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OmSection from "@/components/Omsection";
import ProjectSection from "@/components/ProjectSection";
import TillsammansSection from "@/components/Tillsammans";
import SistaSection from "@/components/Sista";
import ContactSection from "@/components/ContactSection";


import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/Lägenhetskomplex.png";
import project3 from "@/assets/Äldreboende.png";
import project4 from "@/assets/Samhälle.png";


const projects = [
  {
    id: "Beoend som skapar värde",
    title: "Vi utvecklar boenden som skapar värde – idag och i framtiden",
    status: "Vår vision",
    description:
      "Vi är fastighetsutvecklingsbolaget som kombinerar erfarenhet, innovation och affärsmässig skärpa för att skapa framtidens bostäder och äldreboenden. Med oss får kommuner och partners en trygg utvecklingsaktör som levererar projekt med hög attraktivitet, stark efterfrågan och långsiktigt värde.",
    details: [

    ],
    image: project4,
    imageAlt: "Strandpark bostadsprojekt med innergård",
  },
  {
    id: "Lång erfarenhet",
    title: "Lång erfarenhet som skapar lönsamma projekt",
    status: "Så skapar vi värde",
    description:
      "Vår breda kompetens gör att vi snabbt kan identifiera rätt tomter, rätt lägen och rätt affärsmöjligheter. Vi utvecklar projekt som inte bara möter dagens behov – utan också morgondagens krav på hållbarhet, kvalitet och funktionalitet. Resultatet är boenden som är eftertraktade, effektiva och redo för framtiden.",
    details: [

    ],
    image: project2,
    imageAlt: "Centrumhuset kontorsfastighet med glasfasad",
    reverse: true,
  },
  {
    id: "Lösningar för kommun och omsorgsaktörer",
    title: "Attraktiva lösningar för kommuner och omsorgsaktörer",
    status: "Kommuner och omsorgsaktörer",
    description:
      "Vi skapar moderna och trygga äldreboenden med genomtänkt design, smarta planlösningar och kostnadseffektiva driftlösningar. Våra projekt bidrar till att stärka kommunens utbud, minska kapacitetsbrist och ge invånare en högre livskvalitet.",
    details: [

    ],
    image: project3,
    imageAlt: "Hamngatan radhus vid vattnet",
  },
  {
    id: "Beonenden som man stannar i",
    title: "Bostäder som människor vill bo och stanna i",
    status: "Vårt fokus",
    description:
      "Genom noggrann planering och fokus på arkitektur, grönska och hållbara material skapar vi boendemiljöer där människor känner trivsel från dag ett. Vi kombinerar funktion, estetik och energieffektivitet för att leverera attraktiva hem med stark marknadsposition.",
    details: [

    ],
    image: project1,
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
      <SistaSection />
      {projects.map((project) => (
        <ProjectSection key={project.id} {...project} />
      ))}
      <ContactSection />
    </main>
  );
};

export default Index;
