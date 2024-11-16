import { Grid2, Typography } from "@mui/material";

export const AuthLayout = ({ children, title }) => {
  return (
    <Grid2
      container
      alignItems="center"
      justifyContent="center"
      spacing={0}
      direction="column"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid2
        className="animate__animated animate__fadeIn animate__faster box-shadow"
        item="true"
        size={{ xs: 12, sm: 4, md: 4 }}
        sx={{
          backgroundColor: "whitesmoke",
          padding: 2,
          borderRadius: 2,
          width: { md: 450 },
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid2>
    </Grid2>
  );
};
