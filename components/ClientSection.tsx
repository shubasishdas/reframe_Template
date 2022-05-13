import { Container, Grid, Spacer, Image } from "@nextui-org/react";

const ClientSection = () => {
  return (
    <Container css={{ m: "0 auto", p: 0, w: "60vw" }}>
      <Spacer y={4} />
      <Grid.Container justify="space-around">
        <Grid>
          <Image
            src={"/assets/facebook.svg"}
            alt="facebook"
            css={{ w: "$40", h: "$16" }}
            objectFit="fill"
          />
        </Grid>
        <Grid>
          <Image
            src={"/assets/pinterest.svg"}
            alt="pinterest"
            css={{ w: "$40", h: "$16" }}
            objectFit="fill"
          />
        </Grid>
        <Grid>
          <Image
            src={"/assets/stripe.svg"}
            alt="stripe"
            css={{ w: "$40", h: "$16" }}
            objectFit="fill"
          />
        </Grid>
        <Grid>
          <Image
            src={"/assets/dribbble.svg"}
            alt="dribbble"
            css={{ w: "$40", h: "$16" }}
            objectFit="fill"
          />
        </Grid>
        <Grid>
          <Image
            src={"/assets/behance.svg"}
            alt="behance"
            css={{ w: "$40", h: "$16" }}
            objectFit="fill"
          />
        </Grid>
      </Grid.Container>
      <Spacer y={4} />
    </Container>
  );
};

export default ClientSection;
