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
import { comments } from "@utils/comments";
import Comments from "./Comments";

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
          {comments.map((comment) => (
            <Comments comment={comment} />
          ))}
        </Grid.Container>
      </Grid.Container>
    </Container>
  );
};

export default WallOfLove;
