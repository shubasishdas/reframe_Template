import {
  Button,
  Container,
  Text,
  Grid,
  Spacer,
  Card,
  Row,
  Image,
} from "@nextui-org/react";

interface Content {
  content: {
    img: string;
    title: string;
    description: string;
  };
}

const ContentCard = ({ content }: Content) => {
  return (
    <Grid>
      <Card
        css={{
          width: "350px",
          padding: "$0",
          boxShadow: "none",
          border: "1px solid $accents2",
        }}
      >
        <Card.Body
          css={{ padding: "$0", boxShadow: "none", borderRadius: "$0" }}
        >
          <Card.Image objectFit="contain" src={content.img} width="$100" />
        </Card.Body>
        <Card.Footer>
          <Grid.Container justify="center">
            <Row justify="center">
              <Text h3 css={{ ta: "center" }}>
                {content.title}
              </Text>
            </Row>
            <Row justify="center">
              <Text size={19} css={{ ta: "center" }}>
                {content.description}
              </Text>
            </Row>
          </Grid.Container>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default ContentCard;
