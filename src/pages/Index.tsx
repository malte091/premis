import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OmSection from "@/components/Omsection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: "strandpark",
    title: "Strandpark",
    status: "Pågående — Beräknad färdigställning 2027",
    description:
      "Ett modernt bostadsprojekt vid vattnet med 48 lägenheter fördelade på fyra huskroppar. Skandinavisk arkitektur möter hållbart byggande.",
    details: [
      "48 lägenheter, 1–4 rum och kök",
      "Gemensam innergård med grönska",
      "Energiklass A — solceller på taken",
      "Inflyttning etappvis från Q3 2027",
    ],
    image: project1,
    imageAlt: "Strandpark bostadsprojekt med innergård",
  },
  {
    id: "centrumhuset",
    title: "Centrumhuset",
    status: "Pågående — Beräknad färdigställning 2026",
    description:
      "En kontorsfastighet i hjärtat av staden med flexibla ytor för moderna företag. Glasfasad med hög energieffektivitet och smarta kontorslösningar.",
    details: [
      "12 000 kvm kontorsyta",
      "BREEAM Excellent-certifiering",
      "Takvåning med konferensytor",
      "Cykelgarage och laddstationer",
    ],
    image: project2,
    imageAlt: "Centrumhuset kontorsfastighet med glasfasad",
    reverse: true,
  },
  {
    id: "hamngatan",
    title: "Hamngatan",
    status: "Projektering — Byggstart 2026",
    description:
      "Exklusiva radhus vid hamnen med privata bryggor. Trä och betong i harmoni skapar en unik boendemiljö med direkt tillgång till vatten.",
    details: [
      "16 radhus med sjöutsikt",
      "Egen bryggplats till varje bostad",
      "Hållbart trämaterial från lokala skogar",
      "Gemensam bastu och poolhus",
    ],
    image: project3,
    imageAlt: "Hamngatan radhus vid vattnet",
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
      <ContactSection />
    </main>
  );
};

export default Index;
