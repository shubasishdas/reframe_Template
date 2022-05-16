import { Container, Text, Grid, Spacer, Col } from "@nextui-org/react";
import { comments } from "@utils/template-one/comments";
import Comments from "./Comments";

const WallOfLove = () => {
  return (
    <Container
      justify="space-between"
      css={{
        bg: "$gray50",
        mt: "$24",
      }}
    >
      <Grid.Container css={{ w: "60vw", margin: "0 auto" }}>
        <Grid.Container justify="center" direction="column">
          <Grid>
            <Text h2 b css={{ ta: "center", mt: "$24" }}>
              Wall of Love
            </Text>
          </Grid>
          <Grid>
            <Text size="$sm" css={{ ta: "center", fontWeight: "$light" }}>
              Lorem ipsum dolor sit amet.
            </Text>
          </Grid>
        </Grid.Container>

        <Spacer y={2} />

        <Grid.Container justify="center" gap={4} wrap="wrap">
          {comments.map((comment, index) => (
            <Col key={index} css={{ w: "$96" }}>
              <Comments comment={comment} />
            </Col>
          ))}
        </Grid.Container>
      </Grid.Container>
      <Spacer y={3} />
    </Container>
  );
};

export default WallOfLove;
