"use client";
// MUI Components
import { Typography, Box } from "@mui/material";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function FieldOfActivity({ fieldOfActivity }) {
  return (
    <Box sx={{ pl: "10px" }}>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{
          flexGrow: 1,
          maxHeight: 300,
          overflowY: "auto",
        }}
      >
        <TreeItem
          nodeId="1"
          label={
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Campos de atividade:
            </Typography>
          }
        >
          {fieldOfActivity.map((element, index) => (
            <TreeItem key={index} nodeId={"2"} label={element.label} />
          ))}
        </TreeItem>
      </TreeView>
    </Box>
  );
}