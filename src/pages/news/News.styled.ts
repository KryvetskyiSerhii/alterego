import { Grid, styled } from "@mui/material";

export const GridContainer = styled(Grid)(({ theme }) => ({
  position: "relative",
  marginTop: 5,
}));

export const GridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  justifyContent: "space-between",
  border: `1px solid ${theme.palette.primary.main}`,
  padding: 10,
  margin: 10,
  borderRadius: 15,
  boxShadow: `1px 2px 2px ${theme.palette.primary.main}`,
}));
