"use client";
// MUI Components
import {
  Typography,
  Card,
  CardContent,
  IconButton,
  Box,
  CardHeader,
  Avatar,
  Tooltip,
  Divider,
  Stack,
  Grid,
} from "@mui/material";
import { PersonAdd, Home, Search, ImportExport } from "@mui/icons-material/";
import { red } from "@mui/material/colors";

// Next Components
import Link from "next/link";

export default function CardLCNAF({ agent }) {
  return (
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
          action={
            <Tooltip title="Import registro">
              <IconButton aria-label="settings">
                <ImportExport />
              </IconButton>
            </Tooltip>
          }
        />
        <Divider />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ pt: "10px", pl: "10px" }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Nome completo:
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {agent?.fullerName.elementValue.value}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box sx={{ pt: "10px", pl: "10px" }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Nascimento:
              </Typography>
              <Divider />

              <Box sx={{ display: "flex" }}>
                <Typography variant="subtitle1" gutterBottom>
                  Local:
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Rio de Janeiro
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography variant="subtitle1" gutterBottom>
                  Data:
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  1839-06-21
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box sx={{ pt: "10px", pl: "10px" }}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Falecimento:
              </Typography>
              <Divider />

              <Box sx={{ display: "flex" }}>
                <Typography variant="subtitle1" gutterBottom>
                  Local:
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Rio de Janeiro
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography variant="subtitle1" gutterBottom>
                  Data:
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  1839-06-21
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
