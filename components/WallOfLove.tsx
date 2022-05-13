import { Container, Text, Grid, Spacer } from "@nextui-org/react";
import { comments } from "@utils/comments";
import Comments from "./Comments";

const WallOfLove = () => {
  return (
    <Container
      justify="space-between"
      css={{
        bg: "$gray50",
        mw: "$100",
        mt: "$24",
        px: "$24",
      }}
    >
      <Grid.Container css={{ w: "$100" }}>
        <Grid.Container justify="center" direction="column">
          <Grid>
            <Text h2 b css={{ ta: "center", mt: "$15" }}>
              Wall of Love
            </Text>
          </Grid>
          <Grid>
            <Text size={23} css={{ ta: "center", fontWeight: "$light" }}>
              Lorem ipsum dolor sit amet.
            </Text>
          </Grid>
        </Grid.Container>

        <Spacer y={2} />

        <Grid.Container justify="center" gap={4} wrap="wrap">
          {comments.map((comment, index) => (
            <Comments key={index} comment={comment} />
          ))}
        </Grid.Container>
      </Grid.Container>
    </Container>
  );
};

export default WallOfLove;
