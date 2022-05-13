import type { NextPage } from "next";
import { Container, Image, useTheme } from "@nextui-org/react";
import HeroSection from "../components/HeroSection";
import ClientSection from "../components/ClientSection";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import ImproveSection from "../components/ImproveSection";

const Home: NextPage = () => {
  return (
    <Container>
      <HeroSection />
      <ClientSection />
      <FeatureSection />
      <ImproveSection />
      <Footer />
    </Container>
  );
};

export default Home;
