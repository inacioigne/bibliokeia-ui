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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { styled, useTheme } from "@mui/material/styles";
import TreeItem from "@mui/lab/TreeItem";
import { TreeItemProps, treeItemClasses } from "@mui/lab/TreeItem";
import LogoWikidata from "src/components/logos/wikidata";
import LogoWordcat from "src/components/logos/worldcat";
import Link from "next/link";

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
          <Box
            component={LabelIcon} //color="inherit" sx={{ mr: 1 }}
          />
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            {labelText}
          </Typography>
        </Box>
      }
      style={styleProps}
      {...other}
    />
  );
}

export default function HasCloseExternalAuthority({
  hasCloseExternalAuthority,
}) {
  const logos = {
    "www.wikidata.org": LogoWikidata,
    "id.worldcat.org": LogoWordcat,
  };

  return (
    <TreeView
      aria-label="gmail"
      defaultExpanded={["3"]}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{
        // height: 264,
        flexGrow: 1,
        maxWidth: 400,
        overflowY: "auto",
      }}
    >
      <StyledTreeItem
        nodeId="3"
        labelText="Ocorrências similares em outras bases" //labelIcon={Label}
      >
        {hasCloseExternalAuthority.map((authority, index) => (
          <Link key={index} href={authority.value} target="_blank">
             {/* <a target="_blank" rel="noopener noreferrer"> */}
             <StyledTreeItem
              nodeId="5"
              labelText={authority.label}
              labelIcon={logos[authority.base]}
              color="#1a73e8"
              bgColor="#e8f0fe"
              colorForDarkMode="#B8E7FB"
              bgColorForDarkMode="#071318"
            />

             {/* </a> */}
            
          </Link>
        ))}
      </StyledTreeItem>
    </TreeView>
  );
}
