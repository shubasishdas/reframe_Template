import type { NextPage } from "next";
import { Container, Image, useTheme } from "@nextui-org/react";
import HeroSection from "../components/HeroSection";
import ClientSection from "../components/ClientSection";
import FeatureSection from "../components/FeatureSection";

const Home: NextPage = () => {
  return (
    <Container>
      <HeroSection />
      <ClientSection />
      <FeatureSection />
    </Container>
  );
};

export default Home;
