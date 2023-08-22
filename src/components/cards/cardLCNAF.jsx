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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import TreeItem from "@mui/lab/TreeItem";
import { PersonAdd, Home, Search, ImportExport } from "@mui/icons-material/";
import { red } from "@mui/material/colors";
import { styled, useTheme } from "@mui/material/styles";
import { TreeItemProps, treeItemClasses } from "@mui/lab/TreeItem";

// React Icons
import { FaTreeCity } from "react-icons/fa6";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FcCalendar } from "react-icons/fc";

// Next Components
import Link from "next/link";

// BiblioKeia Components
import BtnIcon from "src/components/buttons/btnIcon";
import CardAffiliation from "src/components/cards/cardAffiliation";

// BiblioKeia Model
// import { Agent } "src/models/agent"

// declare module 'react' {
//   interface CSSProperties {
//     '--tree-view-color'?: string;
//     '--tree-view-bg-color'?: string;
//   }
// }

// interface StyledTreeItemProps = TreeItemProps & {
//   bgColor?: string;
//   bgColorForDarkMode?: string;
//   color?: string;
//   colorForDarkMode?: string;
//   labelIcon: React.ElementType<SvgIconProps>;
//   labelInfo?: string;
//   labelText: string;
// };

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: "var(--tree-view-color)",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props) {
  const theme = useTheme();
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    // labelInfo,
    labelText,
    colorForDarkMode,
    bgColorForDarkMode,
    ...other
  } = props;

  const styleProps = {
    "--tree-view-color":
      theme.palette.mode !== "dark" ? color : colorForDarkMode,
    "--tree-view-bg-color":
      theme.palette.mode !== "dark" ? bgColor : bgColorForDarkMode,
  };

  return (
    <StyledTreeItemRoot
      label={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 0.5,
            pr: 0,
          }}
        >
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography
            variant="body2"
            sx={{ fontWeight: "inherit", flexGrow: 1 }}
          >
            {labelText}
          </Typography>
          {/* <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography> */}
        </Box>
      }
      style={styleProps}
      {...other}
    />
  );
}

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

          {agent?.hasVariant && (
            <Grid item xs={6}>
              <Box sx={{ pl: "10px" }}>
                <TreeView
                  aria-label="file system navigator"
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
                  sx={{
                    flexGrow: 1,
                    maxWidth: 400,
                    overflowY: "auto",
                  }}
                >
                  <TreeItem
                    nodeId="1"
                    label={
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "bold" }}
                      >
                        Variantes do nome:
                      </Typography>
                    }
                  >
                    {agent.hasVariant.map((variant, index) => (
                      <TreeItem
                        key={index}
                        nodeId={"2"}
                        label={variant.variantLabel}
                      />
                    ))}
                  </TreeItem>
                </TreeView>
              </Box>
            </Grid>
          )}

          {agent?.hasAffiliation && (
            <Grid item xs={6}>
              <Box sx={{ pl: "10px" }}>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  Afiliação:
                </Typography>
                {agent?.hasAffiliation.map((affiliation, index) => (
                  <CardAffiliation key={index} affiliation={affiliation} />
                ))}
              </Box>
            </Grid>
          )}

          {agent?.occupation && (
            <Grid item xs={6}>
              <Box sx={{ pl: "10px" }}>
                <TreeView
                  aria-label="file system navigator"
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
                  sx={{
                    flexGrow: 1,
                    maxWidth: 400,
                    overflowY: "auto",
                  }}
                >
                  <TreeItem
                    nodeId="1"
                    label={
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "bold" }}
                      >
                        Ocupações:
                      </Typography>
                    }
                  >
                    {agent.occupation.map((occupation, index) => (
                      <TreeItem
                        key={index}
                        nodeId={"2"}
                        label={occupation.label}
                      />
                    ))}
                  </TreeItem>
                </TreeView>
              </Box>
            </Grid>
          )}

          <Grid item xs={6}>
            <TreeView
              aria-label="gmail"
              defaultExpanded={["3"]}
              defaultCollapseIcon={<ArrowDropDownIcon />}
              defaultExpandIcon={<ArrowRightIcon />}
              defaultEndIcon={<div style={{ width: 24 }} />}
              sx={{
                height: 264,
                flexGrow: 1,
                maxWidth: 400,
                overflowY: "auto",
              }}
            >
              <StyledTreeItem
                nodeId="3"
                labelText="Categories" //labelIcon={Label}
              >
                {agent?.hasCloseExternalAuthority.map((authority, index) => (
                  <StyledTreeItem
                  key={index}
                  nodeId="5"
                  labelText={authority.label}
                  labelIcon={FaTreeCity}
                  // labelInfo="90"
                  color="#1a73e8"
                  bgColor="#e8f0fe"
                  colorForDarkMode="#B8E7FB"
                  bgColorForDarkMode="#071318"
                />

                ))}
                
              </StyledTreeItem>
            </TreeView>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
