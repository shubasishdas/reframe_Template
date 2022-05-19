import { Container, Grid, Spacer, Image } from "@nextui-org/react";
import { clients } from "@utils/template-two/clients";
const ClientSection = () => {
  return (
    <Container css={{ m: "0 auto", p: 0, w: "60vw" }}>
      <Spacer y={4} />
      <Grid.Container justify="space-around">
        {clients.map((client, index) => {
          return (
            <Grid key={index}>
              <Image
                src={client.image}
                alt={client.title}
                css={{ w: "$40", h: "$16" }}
                objectFit="fill"
              />
            </Grid>
          );
        })}
      </Grid.Container>
      <Spacer y={4} />
    </Container>
  );
};

export default ClientSection;
