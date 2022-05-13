import {
  Button,
  Container,
  Text,
  Grid,
  Avatar,
  Spacer,
  Image,
} from "@nextui-org/react";

const ImproveSection = () => {
  return (
    <Container>
      <Spacer y={1} />
      <Grid.Container
        direction="column"
        alignItems="center"
        css={{ paddingLeft: "14rem", paddingRight: "14rem" }}
      >
        <Text h1 b>
          Improve your work.
        </Text>
        <Text size={25} css={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur.
        </Text>
        <Spacer y={1} />
        <Button size="lg">Add to Chrome - It's Free</Button>
        <Spacer y={0.5} />
        <Text color="#aeaeae">Firefox and Safari soon.</Text>
        <Spacer y={2} />
      </Grid.Container>
      <Image src="/assets/ipad-t.png" alt="Default Image" />
      <Spacer y={2} />
    </Container>
  );
};

export default ImproveSection;
