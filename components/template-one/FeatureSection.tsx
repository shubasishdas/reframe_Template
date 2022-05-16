import { Container, Grid, Image, Text, Spacer } from "@nextui-org/react";
import { features } from "@utils/template-one/features";

const FeatureSection = () => {
  return (
    <Container
      display="flex"
      direction="column"
      css={{ m: "0 auto", p: 0, w: "60vw", gap: "$28" }}
    >
      {Object.values(features).map((feature, index) => (
        <Grid.Container key={index} wrap="nowrap" css={{ gap: "$18" }}>
          <Grid
            css={{
              order: feature.imageOrder,
              flexBasis: "50%",
            }}
          >
            <Image src={feature.img} alt={`${feature.header}${index}`} />
          </Grid>

          <Grid.Container
            css={{
              p: "$16 0",
              order: feature.contentOrder,
              flexBasis: "50%",
            }}
          >
            <Text h2 b>
              {feature.header}
            </Text>
            <Text css={{ fs: "$md" }}>{feature.text}</Text>
            <Grid.Container wrap="wrap">
              {feature.options.map((option, index) => (
                <Grid.Container
                  key={index}
                  wrap="nowrap"
                  alignItems="center"
                  css={{ flexBasis: "50%", gap: "$4" }}
                >
                  <Grid>
                    <Image
                      src={"/assets/check.svg"}
                      alt="checkbox"
                      objectFit="cover"
                      css={{ size: "$9" }}
                    />
                  </Grid>
                  <Text>{option}</Text>
                </Grid.Container>
              ))}
            </Grid.Container>
          </Grid.Container>
        </Grid.Container>
      ))}
    </Container>
  );
};

export default FeatureSection;
