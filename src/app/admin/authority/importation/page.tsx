"use client";
// MUI Components
import {
  Container,
  Box,
  Divider,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

// MUI Icons
import { PersonAdd, Home, Search } from "@mui/icons-material/";

// react-hook-form
import { useForm, Controller, SubmitHandler } from "react-hook-form";

// BiblioKeia Components
import BreadcrumbsBK from "src/components/nav/breadcrumbs";
import CardCataloguing from "src/components/cards/cardCataloguing";

// BiblioKeia Services
import { loc } from "src/services/loc";
import { useState } from "react";

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
  const { control, handleSubmit } = useForm();
  const [type, setType] = useState("all");
  const [search, setSearch] = useState("");
  const [hits, setHits] = useState([]);

  const getData = (search, type) => {
    let params = {
      q: `${search}`,
      count: 10,
    };

    if (type != "all") {
      params["rdftype"] = type;
    }
    if (search) {
      loc
        .get("authorities/names/suggest2/", {
          params: params,
        })
        .then((response) => {
          console.log(response.data.hits);
          setHits(response.data.hits);
        })
        .catch(function (error) {
          console.log("ERROOO!!", error);
        });
    } else {
      setHits([]);
      console.log("SEM BUSCHA");
    }
  };

  const handleChangeType = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
    getData(search, event.target.value);
  };

  // const onSubmit = (data) => {
  //   // console.log(data.search);
  //   getData(data.search, "type");
  // };

  return (
    <Container maxWidth="xl">
      <Box my={"1rem"}>
        <BreadcrumbsBK previousPaths={previousPaths} currentPath="Importação" />
      </Box>
      <Typography variant="h4" gutterBottom>
        Importar Autoridades - Library of Congress
      </Typography>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <form>
            <Box
              sx={{
                m: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Selecione uma opção
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  label="Selecione uma opção"
                  onChange={handleChangeType}
                >
                  <MenuItem value="all">Todos</MenuItem>
                  <MenuItem value="PersonalNames">Nome Pessoal</MenuItem>
                  <MenuItem value="CorporateName">Nome Corporativo</MenuItem>
                  <MenuItem value="Title">Título</MenuItem>
                  <MenuItem value="CorporateName">Nome Geográfico</MenuItem>
                  <MenuItem value="Conference">Evento</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Busca"
                variant="outlined"
                value={search}
                fullWidth
                onChange={(e) => {
                  setSearch(e.target.value);
                  getData(e.target.value, type);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        color="primary"
                        aria-label="Search"
                        type="submit"
                      >
                        <Search />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </form>

          <nav aria-label="secondary mailbox folders">
            <List>
              {hits?.map((hit, index) => (
                <ListItem disablePadding key={index}>
                  <ListItemButton>
                    <ListItemText primary={hit.aLabel} secondary={hit.uri} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
        </Grid>
      </Grid>
    </Container>
  );
}
