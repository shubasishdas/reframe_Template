import {
  Button,
  Container,
  Text,
  Grid,
  Avatar,
  Spacer,
  Image,
  Row,
} from "@nextui-org/react";

const WallOfLove = () => {
  return (
    <Container
      justify="space-between"
      css={{
        bg: "#fafafa",
        mw: "100%",
        mt: "80px",
        px: "100px",
      }}
    >
      <Grid.Container css={{ width: "100%" }}>
        <Grid.Container justify="center" direction="column">
          <Grid>
            <Text h2 b css={{ ta: "center", mt: "30px" }}>
              Wall of Love
            </Text>
          </Grid>
          <Grid>
            <Text size={23} css={{ ta: "center", fontWeight: 300 }}>
              Lorem ipsum dolor sit amet.
            </Text>
          </Grid>
        </Grid.Container>

        <Spacer y={2} />

        <Grid.Container justify="center" gap={4} wrap="wrap">
          <Grid
            xs={12}
            sm={6}
            md={4}
            direction="column"
            css={{ width: "100px" }}
          >
            <Grid.Container justify="center">
              <Avatar
                size="xl"
                src="https://i.pravatar.cc/150?u=a042381f4e29026024d"
                zoomed
              />
            </Grid.Container>
            <Text size={23} css={{ ta: "center", fontWeight: 300 }}>
              “Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
              eiusmod tempor incididunt labore dolore magna.”
            </Text>
            <Spacer y={0.5} />
            <Text h5 b css={{ ta: "center" }}>
              Jane Doe
            </Text>
            <Text color="#aeaeae" css={{ ta: "center" }}>
              CEO of Company
            </Text>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={4}
            direction="column"
            css={{ width: "100px" }}
          >
            <Grid.Container justify="center">
              <Avatar
                size="xl"
                src="https://i.pravatar.cc/150?u=a042381f4e29026024d"
                zoomed
              />
            </Grid.Container>
            <Text size={23} css={{ ta: "center", fontWeight: 300 }}>
              “Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
              eiusmod tempor incididunt labore dolore magna.”
            </Text>
            <Spacer y={0.5} />
            <Text h5 b css={{ ta: "center" }}>
              Jane Doe
            </Text>
            <Text color="#aeaeae" css={{ ta: "center" }}>
              CEO of Company
            </Text>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={4}
            direction="column"
            css={{ width: "100px" }}
          >
            <Grid.Container justify="center">
              <Avatar
                size="xl"
                src="https://i.pravatar.cc/150?u=a042381f4e29026024d"
                zoomed
              />
            </Grid.Container>
            <Text size={23} css={{ ta: "center", fontWeight: 300 }}>
              “Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
              eiusmod tempor incididunt labore dolore magna.”
            </Text>
            <Spacer y={0.5} />
            <Text h5 b css={{ ta: "center" }}>
              Jane Doe
            </Text>
            <Text color="#aeaeae" css={{ ta: "center" }}>
              CEO of Company
            </Text>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={4}
            direction="column"
            css={{ width: "100px" }}
          >
            <Grid.Container justify="center">
              <Avatar
                size="xl"
                src="https://i.pravatar.cc/150?u=a042381f4e29026024d"
                zoomed
              />
            </Grid.Container>
            <Text size={23} css={{ ta: "center", fontWeight: 300 }}>
              “Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
              eiusmod tempor incididunt labore dolore magna.”
            </Text>
            <Spacer y={0.5} />
            <Text h5 b css={{ ta: "center" }}>
              Jane Doe
            </Text>
            <Text color="#aeaeae" css={{ ta: "center" }}>
              CEO of Company
            </Text>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={4}
            direction="column"
            css={{ width: "100px" }}
          >
            <Grid.Container justify="center">
              <Avatar
                size="xl"
                src="https://i.pravatar.cc/150?u=a042381f4e29026024d"
                zoomed
              />
            </Grid.Container>
            <Text size={23} css={{ ta: "center", fontWeight: 300 }}>
              “Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
              eiusmod tempor incididunt labore dolore magna.”
            </Text>
            <Spacer y={0.5} />
            <Text h5 b css={{ ta: "center" }}>
              Jane Doe
            </Text>
            <Text color="#aeaeae" css={{ ta: "center" }}>
              CEO of Company
            </Text>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={4}
            direction="column"
            css={{ width: "100px" }}
          >
            <Grid.Container justify="center">
              <Avatar
                size="xl"
                src="https://i.pravatar.cc/150?u=a042381f4e29026024d"
                zoomed
              />
            </Grid.Container>
            <Text size={23} css={{ ta: "center", fontWeight: 300 }}>
              “Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
              eiusmod tempor incididunt labore dolore magna.”
            </Text>
            <Spacer y={0.5} />
            <Text h5 b css={{ ta: "center" }}>
              Jane Doe
            </Text>
            <Text color="#aeaeae" css={{ ta: "center" }}>
              CEO of Company
            </Text>
          </Grid>
        </Grid.Container>
      </Grid.Container>
    </Container>
  );
};

export default WallOfLove;
