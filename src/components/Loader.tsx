import { Container } from "@mui/material";
import loader from "assets/images/loader.gif";

export const Loader: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 20 }}>
      <img src={loader} />
    </Container>
  );
};
