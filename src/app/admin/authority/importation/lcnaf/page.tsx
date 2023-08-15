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
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Paper,
  Pagination,
  PaginationItem,
} from "@mui/material";

// MUI Icons
import { PersonAdd, Home, Search } from "@mui/icons-material/";
import { red } from "@mui/material/colors";

// BiblioKeia Components
import BreadcrumbsBK from "src/components/nav/breadcrumbs";
// import CardCataloguing from "src/components/cards/cardCataloguing";

// BiblioKeia Services
import { loc } from "src/services/loc";
import { api } from "src/services/api";

// React Hooks
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
  {
    link: "importation",
    label: "Importação",
    icon: <PersonAdd fontSize="small" />,
  },
];

export default function Authority() {
  const [type, setType] = useState("all");
  const [search, setSearch] = useState(null);
  const [hits, setHits] = useState([]);
  const [agent, setAgent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 100;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getData = (search, type, currentPage) => {
    let params = {
      q: `${search}`,
      count: 10,
      offset: currentPage == 1 ? 1 : currentPage*10
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
            console.log(response.data)
          setHits(response.data.hits);
        })
        .catch(function (error) {
          console.log("ERROOO!!", error);
        });
    } else {
      setHits([]);
      setAgent(null);
    }
  };

  const postImport = (uri) => {
    api
      .get(`/import/loc/agents?uri=${uri}`)
      .then((response) => {
        console.log(response.data.authoritativeLabel);
        setAgent(response.data);
      })
      .catch(function (error) {
        console.log("ERROOO!!", error);
      });
  };

  const handleChangeType = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
    getData(search, event.target.value, currentPage);
    console.log(hits.length)
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page); 
    getData(search, type, page);
  };

  return (
    <Container maxWidth="xl">
      <Box my={"1rem"}>
        <BreadcrumbsBK previousPaths={previousPaths} currentPath="LCNAF" />
      </Box>
      <Typography variant="h4" gutterBottom>
        Library of Congress Names - LCNAF
      </Typography>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={5} sx={{ mt: "15px" }}>
          <form>
            <Box
              sx={{
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
                  <MenuItem value="PersonalName">Nome Pessoal</MenuItem>
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
            {hits.length > 0 ? (
              <Paper elevation={3} sx={{ mb: "10px" }}>
                <List>
                  {hits?.map((hit, index) => (
                    <ListItem disablePadding key={index}>
                      <ListItemButton
                        onClick={(e) => {
                          console.log(hit.uri);
                          postImport(hit.uri);
                        }}
                      >
                        <ListItemText
                          primary={hit.aLabel}
                          secondary={hit.uri}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Box
                  sx={{ p: "15px", display: "flex", justifyContent: "center" }}
                >
                  <Pagination
                  color="primary"
                //   disabled={true}
                    page={currentPage}
                    count={totalPages}
                    onChange={handlePageChange}
                    renderItem={(item) => (
                      <PaginationItem component="div" {...item} />
                    )}
                  />
                </Box>
              </Paper>
            ): <Alert>Nenhum resultado encontrado</Alert>
            }
          </nav>
        </Grid>
        <Grid item xs={7} sx={{ mt: "15px" }}>
          {agent && (
            <Card variant="outlined">
              <CardContent>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {agent.authoritativeLabel[0]}
                    </Avatar>
                  }
                  title={
                    <Typography variant="h5" component="div">
                      {agent.authoritativeLabel}
                    </Typography>
                  }
                />
                <Divider />
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
