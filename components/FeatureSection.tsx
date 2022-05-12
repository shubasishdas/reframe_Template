import { Container, Grid, Image, Text, Spacer } from "@nextui-org/react";

const FeatureSection = () => {
  const features = {
    firstFeatures: {
      img: "	https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png",
      contentOrder: 1,
      imageOrder: 0,
      header: "Nice Features",
      text: "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco nisi equi.",
      options: [
        "Unlimited domain names.",
        "150+ components.",
        "Lifetime updates.",
        "24/7 technical support.",
      ],
    },
    secondFeatures: {
      img: "	https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png",
      contentOrder: 0,
      imageOrder: 1,
      header: "Nice Features",
      text: "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco nisi equi.",
      options: [
        "Unlimited domain names.",
        "150+ components.",
        "Lifetime updates.",
        "24/7 technical support.",
      ],
    },
    thirdFeatures: {
      img: "	https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png",
      contentOrder: 1,
      imageOrder: 0,
      header: "Nice Features",
      text: "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco nisi equi.",
      options: [
        "Unlimited domain names.",
        "150+ components.",
        "Lifetime updates.",
        "24/7 technical support.",
      ],
    },
  };

  return (
    <Container display="flex" direction="column" css={{ gap: "5rem" }}>
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
      <Spacer y={2} />
    </Container>
  );
};

export default FeatureSection;
