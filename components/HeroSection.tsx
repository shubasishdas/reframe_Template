import {
  Button,
  Container,
  Text,
  Grid,
  Avatar,
  Spacer,
  Image,
} from "@nextui-org/react";

const HeroSection = () => {
  return (
    <Container>
      <Spacer y={3} />
      <Grid.Container justify="space-between">
        <Grid>
          <Image
            width={18}
            height={18}
            src={"/assets/companyLogo.png"}
            alt="companyLogo"
            objectFit="fill"
          />
        </Grid>
        <Button size="sm">Add to Chrome</Button>
      </Grid.Container>
      <Spacer y={5} />
      <Grid.Container
        direction="column"
        alignItems="center"
        css={{ paddingLeft: "14rem", paddingRight: "14rem" }}
      >
        <Text h1 b>
          Design better
        </Text>
        <Text size={25} css={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor
          incididunt ut labore et dolore magna aliqua ullamco laboris nisi.
        </Text>
        <Spacer y={1} />
        <Button size="lg">Add to Chrome - It's Free</Button>
        <Spacer y={0.5} />
        <Text color="#aeaeae">Firefox and Safari soon.</Text>
        <Spacer y={2} />
      </Grid.Container>
      <Image
        src="https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png"
        alt="Default Image"
      />
    </Container>
  );
};

export default HeroSection;
