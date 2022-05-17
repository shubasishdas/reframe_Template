import { Button, Grid, Image } from "@nextui-org/react";

const UpperNavbar = () => {
  return (
    <Grid.Container
      justify="space-between"
      css={{
        bg: "$gray100",
        px: "$10",
        py: "$9",
        position: "sticky",
        top: 0,
        zIndex: "$2",
      }}
    >
      <Grid>
        <Image
          src={"/assets/companyLogo.png"}
          alt="companyLogo"
          css={{ size: "$10" }}
        />
      </Grid>
      <Button size="sm" css={{ br: "$xl", bg: "$text" }}>
        Download
      </Button>
    </Grid.Container>
  );
};

export default UpperNavbar;
