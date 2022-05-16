import { Grid, Avatar, Text, Spacer } from "@nextui-org/react";

interface Review {
  review: { img: string; text: string; name: string; position: string };
}

export default function Reviews({ review }: Review) {
  return (
    <Grid direction="column">
      <Grid.Container justify="center">
        <Avatar size="xl" src={review.img} zoomed />
      </Grid.Container>
      <Text size="$sm" css={{ ta: "center", fontWeight: "$light" }}>
        {review.text}
      </Text>
      <Spacer y={0.5} />
      <Text h5 b css={{ ta: "center" }}>
        {review.name}
      </Text>
      <Text color="$accents6" css={{ ta: "center" }}>
        {review.position}
      </Text>
    </Grid>
  );
}
