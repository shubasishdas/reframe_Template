import { Container, Image, Grid, Text, Spacer } from "@nextui-org/react";

export default function App() {
  return (
    <>
      <Container
        display="flex"
        wrap="nowrap"
        justify="space-around"
        css={{ m: "0 auto", p: 0, width: "60vw" }}
      >
        <Grid.Container>
          <Text color="$gray600" css={{ fs: "$xs" }}>
            © 0000 Uisual
          </Text>
        </Grid.Container>
        <Grid.Container justify="center" css={{ gap: "$10" }}>
          <Text color="$gray600" css={{ fs: "$xs" }}>
            Features
          </Text>
          <Text color="$gray600" css={{ fs: "$xs" }}>
            Help
          </Text>
          <Text color="$gray600" css={{ fs: "$xs" }}>
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
