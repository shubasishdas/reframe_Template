import { Container, Grid, Image, Text, Spacer } from "@nextui-org/react";
import { features } from "@utils/features";

const FeatureSection = () => {
  return (
    <Container
      display="flex"
      direction="column"
      css={{ m: "0px auto", p: 0, width: "60vw", gap: "5rem" }}
    >
      {Object.values(features).map((feature, index) => (
        <Grid.Container key={index} wrap="nowrap" css={{ gap: "4rem" }}>
          <Grid
            css={{
              width: "56rem",
              height: "24rem",
              order: feature.imageOrder,
              flexBasis: "50%",
            }}
          >
            <Image src={feature.img} alt={`${feature.header}${index}`} />
          </Grid>

          <Grid.Container
            css={{
              padding: "4rem 0",
              order: feature.contentOrder,
              flexBasis: "50%",
            }}
          >
            <Text h2 b>
              {feature.header}
            </Text>
            <Text size={20}>{feature.text}</Text>
            <Spacer y={1} />
            <Grid.Container wrap="wrap" css={{ height: "4rem" }}>
              {feature.options.map((option, index) => (
                <Grid.Container
                  key={index}
                  wrap="nowrap"
                  css={{ flexBasis: "50%", gap: "10px" }}
                >
                  <Grid>
                    <Image
                      width={20}
                      height={20}
                      src={"/assets/check.svg"}
                      alt="checkbox"
                      objectFit="cover"
                    />
                  </Grid>
                  <Text>{option}</Text>
                </Grid.Container>
              ))}
            </Grid.Container>
          </Grid.Container>
        </Grid.Container>
      ))}
      {/* <Spacer y={2} /> */}
    </Container>
  );
};

export default FeatureSection;
