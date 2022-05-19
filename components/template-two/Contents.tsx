import {
  Button,
  Container,
  Text,
  Grid,
  Spacer,
  Image,
} from "@nextui-org/react";
import ContentCard from "./ContentCard";
import { contents } from "@utils/template-two/contents";

const Contents = () => {
  return (
    <Container justify="center" css={{ p: 0, w: "70vw", d: "flex" }}>
      <Grid.Container gap={1} justify="space-around">
        {contents.map((content, index) => (
          <ContentCard key={index} content={content} />
        ))}
      </Grid.Container>
    </Container>
  );
};

export default Contents;
