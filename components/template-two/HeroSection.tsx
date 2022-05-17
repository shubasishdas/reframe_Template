import {
  Button,
  Container,
  Text,
  Grid,
  Spacer,
  Image,
} from "@nextui-org/react";
import UpperNavbar from "./UpperNavbar";
import BottomNavbar from "./BottomNavbar";

const HeroSection = () => {
  return (
    <>
      <UpperNavbar />
      <Container css={{ m: "0 auto", p: 0, w: "70vw" }}>
        <Spacer y={2} />
        <BottomNavbar />
        <Spacer y={5} />
        <Grid.Container wrap="nowrap" css={{ gap: "$18" }}>
          <Grid.Container
            css={{
              p: "$16 0",
              flexBasis: "50%",
            }}
          >
            <Text h2 b>
              Design better.
            </Text>
            <Text css={{ fontSize: "$md" }}>
              Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor
              incididunt ut labore et dolore magna aliqua ullamco laboris nisi.
            </Text>
            <Grid.Container
              wrap="nowrap"
              alignItems="center"
              css={{ gap: "$4" }}
            >
              <Grid>
                <Button size="lg" css={{ br: "$xl", bg: "$text" }}>
                  Get Started For Free
                </Button>
              </Grid>
              <Text color="$gray600">30 days free trial.</Text>
            </Grid.Container>
          </Grid.Container>
          <Grid
            css={{
              flexBasis: "50%",
            }}
          >
            <Image src="/assets/ipad.png" />
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
};

export default HeroSection;
