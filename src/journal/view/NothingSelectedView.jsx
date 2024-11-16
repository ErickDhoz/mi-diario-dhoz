import { AddPhotoAlternateOutlined } from "@mui/icons-material";
import { Grid2, Typography } from "@mui/material";
import React from "react";

export const NothingSelectedView = ({ drawerWidth = 240 }) => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      borderRadius={3}
      className="box-shadow"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        padding: 4,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Grid2 item="true" xs={12}>
        <AddPhotoAlternateOutlined sx={{ fontSize: 45, color: "#ffffff" }} />
      </Grid2>
      <Grid2 item="true" xs={12}>
        <Typography color="white" variant="h6">
          Crea una Nota.
        </Typography>
      </Grid2>
    </Grid2>
  );
};
