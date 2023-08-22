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
  Grid,
  Button,
} from "@mui/material";
// React Icons
import { FaTreeCity } from "react-icons/fa6";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FcCalendar } from "react-icons/fc";

export default function CardAffiliation({ affiliation }) {

  return (
    <Box
      sx={{
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: 1,
      }}
    >
      <Box sx={{ p: "5px" }}>
        <Typography variant="caption" color="text.secondary" gutterBottom>
          Organização:
        </Typography>
        <Typography variant="body1" gutterBottom>
          {affiliation.organization.label}
        </Typography>
      </Box>

      <Divider />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", p: "10px" }}>
          <Typography variant="caption" color="text.secondary" gutterBottom>
            Início:
          </Typography>
          <Button
            size="small"
            variant="outlined"
            startIcon={<FcCalendar />}
            sx={{ ml: "5px", textTransform: "none", cursor: "auto" }}
          >
            {affiliation.affiliationStart}
          </Button>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ display: "flex", p: "10px" }}>
          <Typography variant="caption" color="text.secondary" gutterBottom>
            Fim:
          </Typography>
          <Button
            size="small"
            variant="outlined"
            startIcon={<FcCalendar />}
            sx={{ ml: "5px", textTransform: "none", cursor: "auto" }}
          >
            {affiliation.affiliationEnd}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
