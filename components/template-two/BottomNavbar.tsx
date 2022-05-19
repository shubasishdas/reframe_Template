import {
  Button,
  Container,
  Text,
  Grid,
  Spacer,
  Image,
} from "@nextui-org/react";

const BottomNavbar = () => {
  return (
    <Grid.Container justify="space-between">
      <Grid>
        <Image
          src={"/assets/companyLogo.png"}
          alt="companyLogo"
          css={{ size: "$10" }}
        />
      </Grid>
      <Grid css={{ gap: "$10", d: "flex" }}>
        <Text css={{ cursor: "pointer" }}>Features</Text>
        <Text css={{ cursor: "pointer" }}>Pricing</Text>
        <Text css={{ cursor: "pointer" }}>About</Text>
      </Grid>
    </Grid.Container>
  );
};

export default BottomNavbar;
