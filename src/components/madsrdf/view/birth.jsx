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
  } from "@mui/material";

// BiblioKeia Components
import BtnIcon from "src/components/buttons/btnIcon";

// React Icons
import { FaTreeCity } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";

export default function Birth({ birthPlace, birthDate }) {
  return (
    <Box sx={{ pl: "10px" }}>
      <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
        Nascimento:
      </Typography>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "5px",
          p: "5px",
        }}
      >
        {birthPlace && (
          <BtnIcon icon={<FaTreeCity />} label={birthPlace} />
        )}
        {birthDate && (
          <BtnIcon icon={<FcCalendar />} label={birthDate} />
        )}
      </Box>
    </Box>
  );
}
