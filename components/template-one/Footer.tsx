import { Container, Image, Grid, Text, Spacer, Card } from "@nextui-org/react";

export default function App() {
  return (
    <>
      <Container
        display="flex"
        wrap="nowrap"
        justify="space-around"
        css={{ gap: 200, m: "0px auto", p: 0, width: "60vw" }}
      >
        <Grid.Container>
          <Text color="#aeaeae" size={10}>
            © 0000 Uisual
          </Text>
        </Grid.Container>
        <Grid.Container justify="center" css={{ gap: "$10" }}>
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
        <Grid.Container justify="flex-end" css={{ gap: "$10" }}>
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
      </Container>
      <Spacer y={2} />
    </>
  );
}
