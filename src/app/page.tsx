import Hero from "@/components/Hero";
import OperatorIndex from "@/components/OperatorIndex";
import SectorFocus from "@/components/SectorFocus";
import OperatorProof from "@/components/OperatorProof";
import HowWePartner from "@/components/HowWePartner";
import PortfolioSnapshot from "@/components/PortfolioSnapshot";
import Perspectives from "@/components/Perspectives";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <SectorFocus />
      <OperatorProof />
      <HowWePartner />
      <OperatorIndex />
      <PortfolioSnapshot />
      <Perspectives />
      <Footer />
    </>
  );
}
