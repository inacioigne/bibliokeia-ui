"use client";
// MUI Components
import { Container, Box, Divider, Typography } from "@mui/material";

// MUI Icons
import { PersonAdd, Home } from "@mui/icons-material/";

// BiblioKeia Components
import BreadcrumbsBK from "src/components/nav/breadcrumbs";
import CardCataloguing from "src/components/cards/cardCataloguing";

const previousPaths = [
  {
    link: "admin",
    label: "Início",
    icon: <Home fontSize="small" />,
  },
  {
    link: "authority",
    label: "Autoridades",
    icon: <PersonAdd fontSize="small" />,
  }
];

export default function Authority() {
  return (
    <Container maxWidth="xl">
      <Box my={"1rem"}>
      <BreadcrumbsBK
          previousPaths={previousPaths}
          currentPath="Importação"
        />
      </Box>
      <Typography variant="h4" gutterBottom>
        Importar Autoridades - Library of Congress
      </Typography>
      <Divider />
    </Container>
  );
}
