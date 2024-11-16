import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid2, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { startLogout } from "../../store/auth/thunks";
import { useDispatch } from "react-redux";

export const NavBar = ({ drawerWidth = 200 }) => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton color="inherit" sx={{ mr: 2, display: { sm: "none" } }}>
          <MenuOutlined />
        </IconButton>
        <Grid2
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100vw"
        >
          <Typography variant="h6" noWrap component="div">
            Mi Diario
          </Typography>
          <IconButton color="circular" onClick={onLogout}>
            <Typography variant="h6" sx={{ mr: 1 }}>
              Salir
            </Typography>
            <LogoutOutlined />
          </IconButton>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
};
