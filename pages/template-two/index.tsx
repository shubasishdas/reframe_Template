import type { NextPage } from "next";
import { Container } from "@nextui-org/react";
import HeroSection from "../../components/template-two/HeroSection";
import ClientSection from "../../components/template-two/ClientSection";
import FeatureSection from "../../components/template-two/FeatureSection";
import Footer from "../../components/template-two/Footer";
import Reviews from "../../components/template-two/Reviews";

const TemplateOne: NextPage = () => {
  return (
    <Container css={{ mw: "$100", p: 0 }}>
      <HeroSection />
      <ClientSection />
      <FeatureSection />
      <Reviews />
      <Footer />
    </Container>
  );
};

export default TemplateOne;
