import type { NextPage } from "next";
import { Container, Image } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <Container
      css={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
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
