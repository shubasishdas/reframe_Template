import { Button, Grid, Image, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";

const NavBar = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Grid.Container
      justify="space-between"
      alignItems="center"
      wrap="nowrap"
      css={{
        bg: "$gray100",
        px: "$10",
        py: "$9",
        position: "sticky",
        top: "$0",
        zIndex: "$5",
      }}
    >
      <Grid>
        <Image
          src={"/assets/companyLogo.png"}
          alt="companyLogo"
          css={{ size: "$10" }}
        />
      </Grid>
      <Grid.Container
        alignItems="center"
        css={{ w: "fit-content", gap: "$10" }}
      >
        <Button.Group css={{ position: "relative" }}>
          <Button
            onClick={() => setTheme("dark")}
            css={{
              position: "absolute",
              minWidth: "fit-content",
              display: isDark ? "none" : "contents",
            }}
          >
            <Image
              css={{ size: "$12" }}
              src="/assets/darkMode.png"
              alt="darkMode"
            />
          </Button>
          <Button
            css={{
              minWidth: "fit-content",
              display: isDark ? "contents" : "none",
            }}
            onClick={() => setTheme("light")}
          >
            <Image
              css={{ size: "$12" }}
              src="/assets/lightMode.png"
              alt="lightMode"
            />
          </Button>
        </Button.Group>
        <Button size="sm">Download</Button>
      </Grid.Container>
    </Grid.Container>
  );
};

export default NavBar;
