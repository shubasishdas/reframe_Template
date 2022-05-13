import { Grid, Avatar, Text, Spacer } from "@nextui-org/react";

interface Comment {
  comment: { img: string; text: string; name: string; position: string };
}

export default function Comments({ comment }: Comment) {
  return (
    <Grid xs={12} sm={6} md={4} direction="column" css={{ width: "100px" }}>
      <Grid.Container justify="center">
        <Avatar size="xl" src={comment.img} zoomed />
      </Grid.Container>
      <Text size={23} css={{ ta: "center", fontWeight: 300 }}>
        {comment.text}
      </Text>
      <Spacer y={0.5} />
      <Text h5 b css={{ ta: "center" }}>
        {comment.name}
      </Text>
      <Text color="#aeaeae" css={{ ta: "center" }}>
        {comment.position}
      </Text>
    </Grid>
  );
}
