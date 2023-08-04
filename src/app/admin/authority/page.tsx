"use client";
// MUI Components
import { Container, Box, Divider, Typography } from "@mui/material";
// MUI Icons
import {
    PersonAdd,
    Home,
  } from "@mui/icons-material/";

// BiblioKeia Components
import BreadcrumbsBK from "src/components/nav/breadcrumbs";
import CardCataloguing from "src/components/cards/cardCataloguing";

const previousPaths = [
    {
      link: "admin",
      label: "Início",
      icon: <Home fontSize="small" />,
    },
  ];

export default function Authority() {
  return <Container maxWidth="xl">
    <Box my={"1rem"}>
        <BreadcrumbsBK
          previousPaths={previousPaths}
          currentPath="Autoridades"
        />
      </Box>
      <Typography variant="h4" gutterBottom>
        Criar Nova Autoridade
      </Typography>
      <Divider />
      <Box sx={{ py: "1rem", display: "flex", justifyContent: "space-around" }}>
        <CardCataloguing
          name="Importar Registros"
          link="/admin/authority/importation"
          Icon={PersonAdd}
        />
      <CardCataloguing
          name="Nome Pessoal"
          link="/admin/cataloguing/book"
          Icon={PersonAdd}
        />
      </Box>
  </Container>;
}
