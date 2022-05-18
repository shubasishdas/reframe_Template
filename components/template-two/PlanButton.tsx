import { Text, Grid, Col, Row } from "@nextui-org/react";

interface PlanButtonType {
  period: "monthly" | "yearly";
  setPeriod: (value: "monthly" | "yearly") => void;
}

const PlanButton = ({ period, setPeriod }: PlanButtonType) => {
  return (
    <Grid css={{ w: "auto", bg: "$gray300", br: "$xl", py: "$3", px: "$3" }}>
      <Row css={{ h: "auto", gap: "$3" }}>
        <Col
          css={{
            w: "auto",
            h: "100%",
            bg: period === "monthly" ? "$white" : "",
            p: "$2",
            br: "$xl",
            cursor: "pointer",
          }}
          onClick={() => setPeriod("monthly")}
        >
          <Text
            b
            size={15}
            css={{ color: period === "monthly" ? "" : "$accents8" }}
          >
            Billed Monthly
          </Text>
        </Col>
        <Col
          css={{
            w: "auto",
            h: "100%",
            bg: period === "yearly" ? "$white" : "",
            p: "$2",
            br: "$xl",
            cursor: "pointer",
          }}
          onClick={() => setPeriod("yearly")}
        >
          <Text
            b
            size={15}
            css={{ color: period === "yearly" ? "" : "$accents8" }}
          >
            Billed Yearly
          </Text>
        </Col>
      </Row>
    </Grid>
  );
};

export default PlanButton;
