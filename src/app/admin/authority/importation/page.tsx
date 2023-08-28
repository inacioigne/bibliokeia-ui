"use client";
// MUI Components
import {
  Container,
  Box,
  Divider,
  Typography,
  // TextField,
  // FormControl,
  // InputLabel,
  // Select,
  // MenuItem,
  // Grid,
  // InputAdornment,
  // IconButton,
  // List,
  // ListItem,
  // ListItemButton,
  // ListItemText,
  // Card,
  // CardContent,
  // CardHeader,
  // Avatar,
} from "@mui/material";

// MUI Icons
import { PersonAdd, Home, Search } from "@mui/icons-material/";
// import { red } from "@mui/material/colors";

// react-hook-form
// import { useForm, Controller, SubmitHandler } from "react-hook-form";

// BiblioKeia Components
import BreadcrumbsBK from "src/components/nav/breadcrumbs";
import CardCataloguing from "src/components/cards/cardCataloguing";

// BiblioKeia Services
// import { loc } from "src/services/loc";
// import { api } from "src/services/api";

// React Hooks
// import { useState } from "react";

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
  },
];

export default function Authority() {
  // const { control, handleSubmit } = useForm();
  // const [type, setType] = useState("all");
  // const [search, setSearch] = useState("");
  // const [hits, setHits] = useState([]);
  // const [agent, setAgent] = useState(null);

  // const getData = (search, type) => {
  //   let params = {
  //     q: `${search}`,
  //     count: 10,
  //   };
  //   if (type != "all") {
  //     params["rdftype"] = type;
  //   }
  //   if (search) {
  //     loc
  //       .get("authorities/names/suggest2/", {
  //         params: params,
  //       })
  //       .then((response) => {
  //         setHits(response.data.hits);
  //       })
  //       .catch(function (error) {
  //         console.log("ERROOO!!", error);
  //       });
  //   } else {
  //     setHits([]);
  //     setAgent(null);
  //   }
  // };

  // const postImport = (uri) => {
  //   api
  //     .get(`/import/loc/agents?uri=${uri}`)
  //     .then((response) => {
  //       console.log(response.data.authoritativeLabel);
  //       setAgent(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log("ERROOO!!", error);
  //     });
  // };

  // const handleChangeType = (event: SelectChangeEvent) => {
  //   setType(event.target.value as string);
  //   getData(search, event.target.value);
  // };

  return (
    <Container maxWidth="xl">
      <Box my={"1rem"}>
        <BreadcrumbsBK previousPaths={previousPaths} currentPath="Importação" />
      </Box>
      <Typography variant="h4" gutterBottom>
        Importar Autoridades 
      </Typography>
      <Divider />
      <Box sx={{ py: "1rem", display: "flex", justifyContent: "space-around" }}>
        <CardCataloguing
          name="Library of Congress Names - LCNAF"
          link="/admin/authority/importation/lcnaf"
          Icon={PersonAdd}
        />
      <CardCataloguing
          name="Nome Pessoal"
          link="/admin/cataloguing/book"
          Icon={PersonAdd}
        />
      </Box>
     
    </Container>
  );
}
