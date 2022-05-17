import { Container, Grid, Text, Spacer } from "@nextui-org/react";
import Link from "next/link";
import Question from "./Question";
import { faqs } from "@utils/template-two/faqs";

function FAQs() {
  return (
    <Container
      justify="space-between"
      css={{
        mt: "$10",
        w: "75vw",
      }}
    >
      <Grid.Container justify="space-around">
        {faqs.map((faq, index) => (
          <Question faq={faq} key={index} />
        ))}
      </Grid.Container>
      <Spacer y={3} />
      <Grid.Container justify="center">
        <Text size={19}>Still have questions?</Text>
        <Link href="#">
          <Text
            size={19}
            css={{ cursor: "pointer", ml: "$2", textDecoration: "underline" }}
          >
            Contact us.
          </Text>
        </Link>
      </Grid.Container>
    </Container>
  );
}

export default FAQs;
