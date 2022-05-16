import {
  Container,
  Text,
  Grid,
  Spacer,
  Button,
  Col,
  Row,
  Image,
} from "@nextui-org/react";

const PriceCard = () => {
  return (
    <Container
      css={{
        w: "325px",
        br: "$md",
        border: "1px solid $accents2",
        p: "$14",
        mb: "80px",
      }}
    >
      <Grid.Container>
        <Grid>
          <Text h4>Basic</Text>
          <Spacer y={0.5} />
          <Grid>
            <Row
              css={{
                ai: "flex-end",
                gap: "0px",
              }}
            >
              <Col css={{ w: "auto" }}>
                <Text h1>$5</Text>
              </Col>
              <Col css={{ mb: "$2", ml: "$1" }}>
                <Text css={{ textAlign: "left" }}>/month</Text>
              </Col>
            </Row>
          </Grid>
          <Spacer y={0.5} />
          <Text size="$xs">Perfect for early-stage startups.</Text>
          <Spacer y={0.5} />
          <Grid.Container css={{ gap: "$3" }}>
            <Grid.Container alignItems="center">
              <Grid css={{ mr: "$5" }}>
                <Image
                  src="/assets/template-two/check.svg"
                  width={20}
                  height={20}
                />
              </Grid>
              <Text size="$sm">1 domain name.</Text>
            </Grid.Container>
            <Grid.Container alignItems="center">
              <Grid css={{ mr: "$5" }}>
                <Image
                  src="/assets/template-two/check.svg"
                  width={20}
                  height={20}
                />
              </Grid>
              <Text size="$sm">HTML components.</Text>
            </Grid.Container>
            <Grid.Container alignItems="center">
              <Grid css={{ mr: "$5" }}>
                <Image
                  src="/assets/template-two/cross.svg"
                  width={20}
                  height={20}
                />
              </Grid>
              <Text size="$sm">Priority support.</Text>
            </Grid.Container>
          </Grid.Container>
          <Spacer y={1} />
          <Grid.Container justify="center">
            <Button
              css={{
                br: "$xl",
                bg: "transparent",
                color: "$accents9",
                border: "1px solid $accents9",
                fontSize: "$sm",
                py: "$10",
                px: "$18",
              }}
            >
              Get Started
            </Button>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </Container>
  );
};
export default PriceCard;