import {
  Button,
  Container,
  Text,
  Grid,
  Spacer,
  Image,
} from "@nextui-org/react";

const ImproveSection = () => {
  return (
    <>
      <Container css={{ bgColor: "$gray100", p: "$0" }}>
        <Grid.Container css={{ m: "0 auto", pt: "$24", w: "60vw" }}>
          <Spacer y={1} />
          <Grid.Container
            direction="column"
            alignItems="center"
            css={{ px: "$56" }}
          >
            <Text h2 b>
              Improve your work.
            </Text>
            <Text css={{ ta: "center", fs: "$md" }}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
            <Spacer y={1} />
            <Button size="lg">Add to Chrome - It's Free</Button>
            <Spacer y={0.5} />
            <Text color="$gray600">Firefox and Safari soon.</Text>
            <Spacer y={2} />
          </Grid.Container>
          <Image src="/assets/ipad-t.png" alt="Default Image" />
        </Grid.Container>
      </Container>
      <Spacer y={2} />
    </>
  );
};

export default ImproveSection;
