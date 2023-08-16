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
        <Box sx={{ p: "10px" }}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            Nome completo:
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {agent?.fullerName.elementValue.value}
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Box sx={{ backgroundColor: "blue" }}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Nascimento
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              1839-06-21
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Falecimento
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
