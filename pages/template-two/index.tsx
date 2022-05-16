import type { NextPage } from "next";
import { Container } from "@nextui-org/react";
import HeroSection from "../../components/template-two/HeroSection";
import ClientSection from "../../components/template-two/ClientSection";
import Footer from "../../components/template-two/Footer";
import Reviews from "../../components/template-two/Reviews";
import Contents from "../../components/template-two/Contents";
import Pricing from "../../components/template-two/Pricing";

const TemplateOne: NextPage = () => {
  return (
    <Container css={{ mw: "$100", p: 0 }}>
      <HeroSection />
      <ClientSection />
      <Contents />
      <Reviews />
      <Pricing />
      <Footer />
    </Container>
  );
};

export default TemplateOne;
