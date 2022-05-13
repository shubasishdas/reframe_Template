import { Grid, Avatar, Text, Spacer } from "@nextui-org/react";

interface Comment {
  comment: { img: string; text: string; name: string; position: string };
}

export default function Comments({ comment }: Comment) {
  return (
    <Grid direction="column">
      <Grid.Container justify="center">
        <Avatar size="xl" src={comment.img} zoomed />
      </Grid.Container>
      <Text size="$sm" css={{ ta: "center", fontWeight: "$light" }}>
        {comment.text}
      </Text>
      <Spacer y={0.5} />
      <Text h5 b css={{ ta: "center" }}>
        {comment.name}
      </Text>
      <Text color="$accents6" css={{ ta: "center" }}>
        {comment.position}
      </Text>
    </Grid>
  );
}
