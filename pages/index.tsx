import type { NextPage } from "next";
import { Container, Image, useTheme } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <Container>
      <Image
        width={320}
        height={180}
        src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
        alt="Default Image"
        objectFit="cover"
      />
    </Container>
  );
};

export default Home;
