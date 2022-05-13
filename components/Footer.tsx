import { Container, Image, Grid, Text, Spacer, Card } from "@nextui-org/react";

export default function App() {
  return (
    <Container
      display="flex"
      wrap="nowrap"
      justify="space-around"
      css={{ gap: 200 }}
    >
      <Grid.Container>
        <Text color="#aeaeae" size={10}>
          © 0000 Uisual
        </Text>
      </Grid.Container>
      <Grid.Container justify="space-between">
        <Text color="#aeaeae" size={10}>
          Features
        </Text>
        <Text color="#aeaeae" size={10}>
          Help
        </Text>
        <Text color="#aeaeae" size={10}>
          Terms
        </Text>
      </Grid.Container>
      <Grid.Container justify="space-around">
        <Grid>
          <Image src="/assets/twitter.png" alt="twitter" />
        </Grid>
        <Grid>
          <Image src="/assets/instagram.png" alt="instagram" />
        </Grid>
        <Grid>
          <Image src="/assets/dribbble.png" alt="dribbble" />
        </Grid>
      </Grid.Container>
      <Spacer y={3} />
    </Container>
  );
}
