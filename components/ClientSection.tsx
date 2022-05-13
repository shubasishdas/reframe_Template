import { Container, Grid, Spacer, Image } from "@nextui-org/react";

const ClientSection = () => {
  return (
    <Container css={{ m: "0px auto", p: 0, width: "60vw" }}>
      <Spacer y={4} />
      <Grid.Container css={{ justifyContent: "space-around" }}>
        <Grid>
          <Image
            src={"/assets/facebook.svg"}
            alt="facebook"
            width={150}
            height={50}
            objectFit="fill"
          />
        </Grid>
        <Grid>
          <Image
            src={"/assets/pinterest.svg"}
            alt="pinterest"
            width={150}
            height={50}
            objectFit="fill"
          />
        </Grid>
        <Grid>
          <Image
            src={"/assets/stripe.svg"}
            alt="stripe"
            width={150}
            height={50}
            objectFit="fill"
          />
        </Grid>
        <Grid>
          <Image
            src={"/assets/dribbble.svg"}
            alt="dribbble"
            width={150}
            height={50}
            objectFit="fill"
          />
        </Grid>
        <Grid>
          <Image
            src={"/assets/behance.svg"}
            alt="behance"
            width={150}
            height={50}
            objectFit="fill"
          />
        </Grid>
      </Grid.Container>
      <Spacer y={4} />
    </Container>
  );
};

export default ClientSection;
