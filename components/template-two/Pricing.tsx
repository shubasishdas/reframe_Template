import { Container, Text, Grid, Spacer } from "@nextui-org/react";
import PriceCard from "./PriceCard";
import { prices } from "@utils/template-two/prices";
import { useState } from "react";
import PlanButton from "./PlanButton";

function Pricing() {
  const [period, setPeriod] = useState("monthly");

  return (
    <Container
      justify="space-between"
      css={{
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

        <Spacer y={1} />

        <Grid.Container justify="center" alignItems="center">
          <PlanButton period={period} setPeriod={setPeriod} />
        </Grid.Container>
        <Grid>
          <Text color="$gray600" css={{ ta: "center" }}>
            Save 15% with a yearly plan.
          </Text>
        </Grid>
      </Grid.Container>

      <Spacer y={1} />

      <Grid.Container justify="space-around">
        {prices.map((price) => {
          if (price.period === period) {
            return price.plans.map((plan, index) => {
              return (
                <PriceCard plan={plan} period={price.period} key={index} />
              );
            });
          }
        })}
      </Grid.Container>
    </Container>
  );
}

export default Pricing;
