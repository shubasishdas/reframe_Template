import { Container, Text, Grid, Spacer, Col } from "@nextui-org/react";
import { reviews } from "@utils/template-two/reviews";
import Reviews from "./Review-Individual";

const WallOfLove = () => {
  return (
    <Container
      justify="space-between"
      css={{
        bg: "$gray50",
        mw: "$100",
        mt: "$24",
        px: "$24",
        py: "$28",
      }}
    >
      <Grid.Container justify="center" gap={4} wrap="wrap">
        {reviews.map((review, index) => (
          <Col key={index} css={{ w: "$96" }}>
            <Reviews review={review} />
          </Col>
        ))}
      </Grid.Container>
    </Container>
  );
};

export default WallOfLove;
