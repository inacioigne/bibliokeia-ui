"use client";
// MUI Components
import { Typography, Box, Divider, Button } from "@mui/material";
import TreeView from "@mui/lab/TreeView";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { styled, useTheme } from "@mui/material/styles";
import TreeItem from "@mui/lab/TreeItem";
import { TreeItemProps, treeItemClasses } from "@mui/lab/TreeItem";
import LogoWikidata from "src/components/logos/wikidata";
import LogoWordcat from "src/components/logos/worldcat";
import LogoGetty from "src/components/logos/getty";
import LogoBne from "src/components/logos/bne";
// React Icons
import { FcCalendar } from "react-icons/fc";

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
          <Box />
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

function StyledTreeItemChild(props) {
  const theme = useTheme();
  const {
    bgColor,
    color,
    labelText,
    affiliationStart,
    affiliationEnd,
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
            // alignItems: "center",
            flexDirection: "column",
            p: 0.5,
            pr: 0,
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            {labelText}
          </Typography>
          <Box sx={{ display: "flex" }}>
          {affiliationStart && 
          <Box sx={{ display: "flex", p: "5px" }}>
            <Typography variant="caption" color="text.secondary" gutterBottom>
              Início:
            </Typography>
            <Button
              size="small"
              variant="outlined"
              startIcon={<FcCalendar />}
              sx={{ ml: "5px", textTransform: "none", cursor: "auto" }}
            >
              {affiliationStart}
           
            </Button>
          </Box>}
          {affiliationEnd &&
          <div>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ display: "flex", p: "5px" }}>
            <Typography variant="caption" color="text.secondary" gutterBottom>
              Fim:
            </Typography>
            <Button
              size="small"
              variant="outlined"
              startIcon={<FcCalendar />}
              sx={{ ml: "5px", textTransform: "none", cursor: "auto" }}
            >
             {affiliationEnd}
            </Button>
          </Box></div>}
          </Box>
          <Divider />
        </Box>
      }
      style={styleProps}
      {...other}
    />
  );
}

export default function HasAffiliation({ hasAffiliation }) {
  

  return (
    <TreeView
      aria-label="hasAffiliation"
      defaultExpanded={[""]}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{
        flexGrow: 1,
        maxWidth: 400,
        overflowY: "auto",
      }}
    >
      <StyledTreeItem
        nodeId="3"
        labelText="Afiliação" 
      >
        { typeof hasAffiliation == "object" ? (
          <StyledTreeItemChild
            nodeId="5"
            labelText={hasAffiliation.organization}
            affiliationStart={hasAffiliation?.affiliationStart}
            affiliationEnd={hasAffiliation?.affiliationEnd}
            color="#1a73e8"
            bgColor="#e8f0fe"
            colorForDarkMode="#B8E7FB"
            bgColorForDarkMode="#071318"
          />
        ) : 
          hasAffiliation.map((affiliation, index) => (
          <StyledTreeItemChild
          key={index}
            nodeId="5"
            labelText={affiliation.organization}
            affiliationStart={affiliation?.affiliationStart}
            affiliationEnd={affiliation?.affiliationEnd}
            color="#1a73e8"
            bgColor="#e8f0fe"
            colorForDarkMode="#B8E7FB"
            bgColorForDarkMode="#071318"
          />
        )) }
      </StyledTreeItem>
    </TreeView>
  );
}
