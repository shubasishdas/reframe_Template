import type { NextPage } from "next";
import { Container, Image, useTheme } from "@nextui-org/react";
import HeroSection from "../components/HeroSection";
import ClientSection from "../components/ClientSection";
import FeatureSection from "../components/FeatureSection";

const Home: NextPage = () => {
  return (
    <Container css={{ maxWidth: "60vw", margin: "0px auto" }}>
      <HeroSection />
      <ClientSection />
      <FeatureSection />
    </Container>
  );
};

export default Home;
