import { Grid, Image, Text, Col, Row } from "@nextui-org/react";

interface Faq {
  faq: {
    question: string;
    answer: string;
  };
}

function Question({ faq }: Faq) {
  return (
    <Grid.Container css={{ w: "500px", m: "$8" }}>
      <Row>
        <Grid css={{ mr: "$5", mt: "$4" }}>
          <Image
            src="/assets/template-two/question.svg"
            width={20}
            height={20}
          />
        </Grid>
        <Col>
          <Text h3>{faq.question}</Text>
          <Text size={19}>{faq.answer}</Text>
        </Col>
      </Row>
    </Grid.Container>
  );
}

export default Question;
