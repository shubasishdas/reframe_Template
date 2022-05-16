import {
  Button,
  Container,
  Text,
  Grid,
  Spacer,
  Image,
} from "@nextui-org/react";
import NavBar from "./NavBar";

const HeroSection = () => {
  return (
    <>
      <NavBar />
      <Container css={{ m: "0 auto", p: 0, w: "60vw" }}>
        <Spacer y={3} />
        <Grid.Container justify="space-between">
          <Grid>
            <Image
              src={"/assets/companyLogo.png"}
              alt="companyLogo"
              css={{ size: "$10" }}
            />
          </Grid>
          <Button size="sm">Add to Chrome</Button>
        </Grid.Container>
        <Spacer y={5} />
        <Grid.Container
          direction="column"
          alignItems="center"
          css={{ px: "$80" }}
        >
          <Text h1 b>
            Design better
          </Text>
          <Text css={{ ta: "center", fontSize: "$md" }}>
            Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor
            incididunt ut labore et dolore magna aliqua ullamco laboris nisi.
          </Text>
          <Spacer y={1} />
          <Button size="lg">Add to Chrome - It's Free</Button>
          <Spacer y={0.5} />
          <Text color="$gray600">Firefox and Safari soon.</Text>
          <Spacer y={2} />
        </Grid.Container>
        <Image src="/assets/ipad.png" alt="Default Image" />
      </Container>
    </>
  );
};

export default HeroSection;
