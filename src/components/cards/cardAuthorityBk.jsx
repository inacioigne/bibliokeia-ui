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
import { TreeView, TreeItem } from "@mui/lab/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { red } from "@mui/material/colors";

// React Icons
import { FaTreeCity, FaRegTrashCan } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";
import { LiaEditSolid } from "react-icons/lia";
import { BiTrash } from "react-icons/bi";

// React Hooks
import { useState } from "react"

// BiblioKeia Components
import BtnIcon from "src/components/buttons/btnIcon";
import HasCloseExternalAuthority from "src/components/solr/hasCloseExternalAuthority";
import HasAffiliation from "src/components/solr/hasAffiliation";
import AlertDialog from "src/components/modal/dialog"

import { api } from "src/services/api";

import Image from "next/image";

// BiblioKeia Hooks
import { useProgress } from "src/providers/progress";
import { useAlert } from "src/providers/alerts";

export default function CardAuthorityBk({ doc, setDoc, setSearch }) {

  const { setProgress } = useProgress();
  const {
    setOpenSnack,
    setMessage,
    setTypeAlert,
  } = useAlert();

  const [open, setOpen] = useState(false);

  const deleteAuthority = (id, type) => {
    setProgress(true);
    const data = {
      "id": id,
      "type": type
    }
    api
      .delete(`/authority/`, {
        data
      })
      .then((response) => {
        console.log(response);
        setTypeAlert("success");
        setMessage("Registro excluido com sucesso");
        setOpenSnack(true);
        setDoc(false)
        setSearch("")
      })
      .catch(function (error) {
        console.log("ERROOO!!", error);
        setTypeAlert("error");
          setMessage(error.response.data.detail);
          setOpenSnack(true);
      })
      .finally(function () {
        setProgress(false);
      });
  };

  const handleClose = () => {
    let [type] = doc.type
    deleteAuthority(doc.id, type)
    setOpen(false);
    console.log(doc.id)
  };

  const imageStyle = {
    borderRadius: "15%",
    overflow: "hidden",
    objectFit: "scale-down",
    marginLeft: "10px",
  };

  return (
    <>
     <Card variant="outlined">
      <CardContent>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {/* {agent.authoritativeLabel[0]} */}
            </Avatar>
          }
          title={
            <Typography variant="h5" component="div">
              {doc.label}
            </Typography>
          }
          action={
            <>
              <Tooltip title="Editar">
                <IconButton
                  aria-label="settings"
                  onClick={() => {
                    //   postImportBK(agent);
                  }}
                >
                  <LiaEditSolid />
                </IconButton>
              </Tooltip>
              <Tooltip title="Excluir">
                <IconButton
                  aria-label="settings"
                  onClick={() => {
                    let [type] = doc.type
                    setOpen(true);
                    // deleteAuthority(doc.id, type)
                    
                    
                    // console.log(doc.id, type)
                  }}
                >
                  <BiTrash />
                </IconButton>
              </Tooltip>
            </>
          }
        />
        <Divider />
        <Grid container spacing={2} sx={{ mt: "5px" }}>
          {/* fullerName */}
          {doc?.fullerName && (
            <Grid item xs={12}>
              <Box sx={{ pl: "10px" }}>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  Nome completo:
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {doc.fullerName}
                </Typography>
              </Box>
            </Grid>
          )}
          {/* Imagem */}
          { doc?.imagem && (
            <Grid item xs={2}>
            <Box
              sx={{
                position: "relative",
                height: "150px",
              }}
            >
              <Image
                src={`${doc?.imagem}`}
                // height={120}
                // width={80}
                fill={true}
                sizes="(max-height: 200px) 100vw, (max-width: 200px) 100vw, (max-width: 100px) 50vw, 33vw"
                alt="Picture of the author"
                style={imageStyle}
              />
            </Box>
          </Grid>

          )}
         

          {/* Nascimento */}
          {(doc?.birthPlace || doc?.birthDate) && (
            <Grid item xs={5}>
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
                  {doc?.birthPlace && (
                    <BtnIcon icon={<FaTreeCity />} label={doc.birthPlace} />
                  )}
                  {doc?.birthDate && (
                    <BtnIcon icon={<FcCalendar />} label={doc.birthDate} />
                  )}
                </Box>
              </Box>
            </Grid>
          )}

          {/* Falecimento */}
          {(doc?.deathPlace || doc?.deathDate) && (
            <Grid item xs={5}>
              <Box sx={{ pl: "10px" }}>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  Falecimento:
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
                  {doc?.deathPlace && (
                    <BtnIcon icon={<FaTreeCity />} label={doc.deathPlace} />
                  )}
                  {doc?.deathDate && (
                    <BtnIcon icon={<FcCalendar />} label={doc.deathDate} />
                  )}
                </Box>
              </Box>
            </Grid>
          )}

          {/* hasVariant */}
          {doc?.variant && (
            <Grid item xs={6}>
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
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "bold" }}
                      >
                        Variantes do nome:
                      </Typography>
                    }
                  >
                    {doc?.variant.map((variant, index) => (
                      <TreeItem key={index} nodeId={"2"} label={variant} />
                    ))}
                  </TreeItem>
                </TreeView>
              </Box>
            </Grid>
          )}

          {/* hasAffiliation */}
          {doc?.hasAffiliation && (
            <Grid item xs={6}>
            <HasAffiliation hasAffiliation={doc.hasAffiliation} />
            </Grid>

          )}

          {/* hasCloseExternalAuthority */}
          {doc?.hasCloseExternalAuthority && (
            <Grid item xs={6}>
              <HasCloseExternalAuthority
                hasCloseExternalAuthority={doc?.hasCloseExternalAuthority}
              />
            </Grid>
          )}

        </Grid>
      </CardContent>
    </Card>
    <AlertDialog open={open} setOpen={setOpen} handleClose={handleClose}/>
    </>
   
  );
}
