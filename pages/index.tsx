import type { NextPage } from "next";
import { Container, Image, useTheme } from "@nextui-org/react";
import HeroSection from "../components/HeroSection";
import ClientSection from "../components/ClientSection";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import ImproveSection from "../components/ImproveSection";
import WallOfLove from "../components/WallOfLove";

const Home: NextPage = () => {
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

export default Home;
