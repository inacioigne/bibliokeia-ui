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
} from "@mui/material";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { PersonAdd, Home, Search, ImportExport } from "@mui/icons-material/";
import { red } from "@mui/material/colors";

// React Icons
import { FaTreeCity } from "react-icons/fa6";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FcCalendar } from "react-icons/fc";

// Next Components
import Link from "next/link";

// BiblioKeia Components
import BtnIcon from "src/components/buttons/btnIcon";

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
            <Box sx={{ pt: "10px", pl: "10px" }}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Nome completo:
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {agent?.fullerName.elementValue.value}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box sx={{ pl: "10px" }}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Nascimento:
              </Typography>
              <Divider />
              <Box
                sx={{ display: "flex", flexWrap: "wrap", gap: "5px", p: "5px" }}
              >
                {agent?.birthPlace && (
                  <BtnIcon icon={<FaTreeCity />} label={"Rio de Janeiro"} />
                )}
                {agent?.birthDate && (
                  <BtnIcon icon={<FcCalendar />} label={"1839-06-21"} />
                )}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ pl: "10px" }}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Falecimento:
              </Typography>
              <Divider />
              <Box
                sx={{ display: "flex", flexWrap: "wrap", gap: "5px", p: "5px" }}
              >
                {agent?.deathPlace && (
                  <BtnIcon icon={<FaTreeCity />} label={"Rio de Janeiro"} />
                )}
                {agent?.deathDate && (
                  <BtnIcon icon={<FcCalendar />} label={"1839-06-21"} />
                )}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{
                height: 240,
                flexGrow: 1,
                maxWidth: 400,
                overflowY: "auto",
              }}
            >
              <TreeItem nodeId="1" label="Variantes do Nome">
                {agent.hasVariant.map((variant, index) => (
                  <TreeItem
                    key={index}
                    nodeId={"2"}
                    label={`${variant.elementList[0].elementValue.value}${variant.elementList[1].elementValue.value}`}
                  />
                ))}
              </TreeItem>
            </TreeView>
          </Grid>
          {/* <Grid item xs={6}>
            <code>variant</code>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {agent?.hasVariant.map((variant, index) => (
                <div key={index}>
                  {variant.elementList.map((element, index) => (
                    <code key={index}>{element.elementValue.value}</code>
                  ))}
                </div>
              ))}
            </Box>
          </Grid> */}
        </Grid>
      </CardContent>
    </Card>
  );
}
