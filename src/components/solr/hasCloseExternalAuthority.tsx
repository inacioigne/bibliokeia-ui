import { Typography, Box } from "@mui/material";
import { TreeView, TreeItem } from "@mui/lab/";
import { TreeItemProps, treeItemClasses } from "@mui/lab/TreeItem";

import { ArrowDropDown, ArrowRight } from "@mui/icons-material/";
import { styled, useTheme } from "@mui/material/styles";

import LogoWikidata from "src/components/logos/wikidata";
import LogoWordcat from "src/components/logos/worldcat";
import LogoGetty from "src/components/logos/getty";
import LogoBne from "src/components/logos/bne";

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
        "vocab.getty.edu": LogoGetty,
        "datos.bne.es": LogoBne
      };
  return (
    <TreeView
      aria-label="gmail"
      defaultExpanded={["3"]}
      defaultCollapseIcon={<ArrowDropDown />}
      defaultExpandIcon={<ArrowRight />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{
        flexGrow: 1,
        maxWidth: 400,
        overflowY: "auto",
      }}
    >
      <StyledTreeItem
        nodeId="3"
        labelText="Ocorrências similares em outras bases"
      >
        {hasCloseExternalAuthority.map((authority, index) => (
          <Link key={index} href={"#"} target="_blank">
             <StyledTreeItem
              nodeId="5"
              labelText={authority.label}
              labelIcon={logos[authority.base]}
              color="#1a73e8"
              bgColor="#e8f0fe"
              colorForDarkMode="#B8E7FB"
              bgColorForDarkMode="#071318"
            />
          </Link>
        ))}
      </StyledTreeItem>
    </TreeView>
  );
}
