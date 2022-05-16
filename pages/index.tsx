import type { NextPage } from "next";
import { Container, Spacer, Text } from "@nextui-org/react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Container css={{ mw: "$100", p: "$11" }}>
      <Link href="/template-one">
        <Text h5 css={{ ta: "center", cursor: "pointer" }}>
          Template One
        </Text>
      </Link>

      <Spacer y={1} />

      <Link href="/template-two">
        <Text h5 css={{ ta: "center", cursor: "pointer" }}>
          Template Two
        </Text>
      </Link>
    </Container>
  );
};
export default Home;
