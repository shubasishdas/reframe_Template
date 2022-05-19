import type { NextPage } from "next";
import {
  Container,
  Grid,
  Spacer,
  Text,
  Row,
  Col,
  Card,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { routings } from "@utils/routings";

const Home: NextPage = () => {
  return (
    <Container fluid justify="center" alignItems="center" css={{ h: "100vh" }}>
      <Grid.Container
        justify="center"
        alignItems="center"
        gap={2}
        css={{ h: "100vh" }}
      >
        {routings.map((route, index) => {
          return (
            <Link href={route.link} key={index}>
              <Card
                bordered
                shadow={false}
                hoverable
                css={{
                  width: "$96",
                  height: "auto",
                  m: "$8",
                  cursor: "pointer",
                }}
              >
                <Row>
                  <Text h6 css={{ ts: "center" }}>
                    {route.title}
                  </Text>
                </Row>
                <Spacer y={1} />
                <Row>
                  <Card css={{ width: "100%", height: "200px" }}>
                    <Image
                      objectFit="contain"
                      src={route.image}
                      alt={route.image}
                      width={350}
                      height={500}
                    />
                  </Card>
                </Row>
              </Card>
            </Link>
          );
        })}
      </Grid.Container>
    </Container>
  );
};
export default Home;
