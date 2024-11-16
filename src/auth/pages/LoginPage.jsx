import { AuthLayout } from "../layout/AuthLayout";
import { Google } from "@mui/icons-material";
import { Alert, Button, Grid2, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleSingIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";
import { useMemo } from "react";

const formDate = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { onInputChange, email, password, formState } = useForm(formDate);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSingnIn = () => {
    dispatch(startGoogleSingIn());
  };

  return (
    <div>
      <AuthLayout title="Login">
        <form onSubmit={onSubmit}>
          <Grid2 container>
            <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                id="email"
                label="Email"
                placeholder="example@gmail.com"
                type="email"
                variant="outlined"
                //necesario para el manejo del formulario
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                id="password"
                label="Password"
                placeholder="password"
                type="password"
                variant="outlined"
                //necesario para el manejo del formulario
                name="password"
                value={password}
                onChange={onInputChange}
              />
              <Grid2
                xs={12}
                size={{ xs: 12 }}
                paddingTop={1}
                display={!!errorMessage ? "" : "none"}
              >
                <Alert severity="error">{errorMessage}</Alert>
              </Grid2>
              <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    disabled={isAuthenticating}
                  >
                    Login
                  </Button>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={onGoogleSingnIn}
                    disabled={isAuthenticating}
                  >
                    <Google />
                    <Typography sx={{ ml: 1 }}>Google</Typography>
                  </Button>
                </Grid2>
              </Grid2>
              <Grid2 container direction="row" justifyContent="end" size={12}>
                <Link color="inherit" to="/auth/register">
                  Crear una cuenta aquí.
                </Link>
              </Grid2>
            </Grid2>
          </Grid2>
        </form>
      </AuthLayout>
    </div>
  );
};
