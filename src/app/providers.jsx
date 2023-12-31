"use client";
// Mui
import { LinearProgress, Snackbar } from "@mui/material/";
import MuiAlert from "@mui/material/Alert";
import { red } from '@mui/material/colors';

// Providers BiblioKeia
import { useProgress } from "src/providers/progress";
import { usePathname } from "next/navigation";

// React Hooks
import { useEffect, forwardRef } from "react";

// BiblioKeia Hooks
import { useAlert } from "src/providers/alerts";

export default function Providers({ children }) {
  const { progress, setProgress } = useProgress();
  const pathname = usePathname();

  const {
    openSnack,
    setOpenSnack,
    message,
    // setMessage,
    typeAlert,
    // setTypeAlert,
  } = useAlert();

  useEffect(() => {
    setProgress(false);
  }, [pathname]);

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  return (
    <>
      <LinearProgress
      color="error"
        sx={
          progress
            ? {
                zIndex: 2000,
              }
            : { display: "none" }
        }
      />
      <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleSnack}>
        <Alert
          onClose={handleSnack}
          severity={typeAlert}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
