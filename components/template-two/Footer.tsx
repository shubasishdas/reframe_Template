import { Container, Image, Grid, Text } from "@nextui-org/react";

export default function App() {
  return (
    <>
      <Container
        display="flex"
        wrap="nowrap"
        justify="space-around"
        css={{ gap: 200, m: "0 auto", p: 0, w: "60vw", py: "$16" }}
      >
        <Grid.Container>
          <Text color="#aeaeae" size={15}>
            © 0000 Uisual
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
    </>
  );
}
