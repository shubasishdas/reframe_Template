import type { NextPage } from "next";
import { Container } from "@nextui-org/react";
import HeroSection from "../../components/template-one/HeroSection";
import ClientSection from "../../components/template-one/ClientSection";
import FeatureSection from "../../components/template-one/FeatureSection";
import Footer from "../../components/template-one/Footer";
import ImproveSection from "../../components/template-one/ImproveSection";
import WallOfLove from "../../components/template-one/WallOfLove";

const TemplateOne: NextPage = () => {
  return (
    <Container css={{ mw: "$100", p: 0 }}>
      <HeroSection />
      <ClientSection />
      <FeatureSection />
      <WallOfLove />
      <ImproveSection />
      <Footer />
    </Container>
  );
};

export default TemplateOne;
