import { CircularProgress, Grid2, Typography } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid2
        item="true"
        xs={3}
        sx={{
          width: { sm: 250 },

          padding: 3,
          borderRadius: 2,
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress color="circular" />
        <Typography marginLeft={2} variant="h6" color="white">
          Cargando...
        </Typography>
      </Grid2>
    </Grid2>
  );
};
