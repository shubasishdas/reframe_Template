import { Container, Text, Grid, Spacer, Button } from "@nextui-org/react";
import PriceCard from "./PriceCard";

function Pricing() {
  return (
    <Container
      justify="space-between"
      css={{
        mw: "$100",
        mt: "$18",
        w: "70vw",
      }}
    >
      <Grid.Container justify="center" direction="column">
        <Grid>
          <Text h2 b css={{ ta: "center", mt: "$15" }}>
            Fair Prices
          </Text>
        </Grid>
        <Grid>
          <Text size="$md" css={{ ta: "center" }}>
            Lorem ipsum dolor sit amet.
          </Text>
        </Grid>

        <Spacer y={2} />

        <Grid.Container justify="center">
          <Button.Group color="success" ghost css={{ zIndex: "$1" }}>
            <Button>Billed Monthly</Button>
            <Button>Billed Yearly</Button>
          </Button.Group>
        </Grid.Container>
        <Grid>
          <Text color="$gray600" css={{ ta: "center" }}>
            Save 15% with a yearly plan.
          </Text>
        </Grid>
      </Grid.Container>

      <Spacer y={3} />

      <Grid.Container justify="space-around">
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </Grid.Container>
    </Container>
  );
}

export default Pricing;
