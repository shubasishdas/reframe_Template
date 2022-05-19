import { Container, Text, Grid, Spacer, Col, Button } from "@nextui-org/react";

const ReadyToStart = () => {
  return (
    <Container
      justify="space-between"
      css={{
        bg: "$gray50",
        mw: "$100",
        mt: "$24",
        px: "$24",
        py: "$28",
      }}
    >
      <Grid.Container justify="center">
        <Grid.Container
          justify="space-between"
          alignItems="center"
          css={{ w: "70vw" }}
          gap={3}
        >
          <Grid>
            <Text h2>Ready to start?</Text>
            <Text size={24}>Lorem ipsum dolor sit amet consectetur.</Text>
          </Grid>
          <Grid justify="center">
            <Button css={{ br: "$xl", bg: "$text" }}>
              Get Started For Free
            </Button>

            <Text color="$gray600" css={{ ta: "center", mt: "$3" }}>
              30 days free trial.
            </Text>
          </Grid>
        </Grid.Container>
      </Grid.Container>
    </Container>
  );
};

export default ReadyToStart;
