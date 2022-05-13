import type { NextPage } from "next";
import { Container, Image, useTheme } from "@nextui-org/react";
import HeroSection from "../components/HeroSection";
import ClientSection from "../components/ClientSection";
import FeatureSection from "../components/FeatureSection";
import WallOfLove from "../components/WallOfLove";

const Home: NextPage = () => {
  return (
    <Container css={{ mw: "100vw", p: 0 }}>
      <HeroSection />
      <ClientSection />
      <FeatureSection />
      <WallOfLove />
    </Container>
  );
};

export default Home;
