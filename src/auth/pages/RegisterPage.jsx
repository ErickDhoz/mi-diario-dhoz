import { AuthLayout } from "../layout/AuthLayout";
import { Alert, Button, Grid2, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  displayName: "",
  email: "",
  password: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe tener un @"],
  password: [
    (value) => value.length >= 6,
    "El password debe tener mas de 6 caracteres.",
  ],
  displayName: [
    (value) => value.length >= 3,
    "El nombre debe tener por lo menos 3 caracteres.",
  ],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState();
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isChekingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const {
    onInputChange,
    displayName,
    email,
    password,
    formState,
    isFormValid,
    emailValid,
    passwordValid,
    displayNameValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <>
      <AuthLayout title="Página de registro">
        <h6>Formulario {isFormValid ? "Completo" : "Incompleto"}</h6>
        <form onSubmit={onSubmit}>
          <Grid2 container>
            <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Nombre Completo"
                placeholder="Nombre Completo"
                type="text"
                variant="outlined"
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={displayNameValid && formSubmitted}
                helperText={displayNameValid}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Email"
                placeholder="example@gmail.com"
                type="email"
                variant="outlined"
                name="email"
                value={email}
                onChange={onInputChange}
                error={emailValid && formSubmitted}
                helperText={emailValid}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Password"
                placeholder="password"
                type="password"
                variant="outlined"
                name="password"
                value={password}
                onChange={onInputChange}
                error={passwordValid && formSubmitted}
                helperText={passwordValid}
              />
              <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid2
                  item="true"
                  xs={12}
                  size={{ xs: 12 }}
                  display={!!errorMessage ? "" : "none"}
                >
                  <Alert severity="error">{errorMessage}</Alert>
                </Grid2>

                <Grid2 size={{ xs: 12 }}>
                  <Button variant="contained" fullWidth type="submit">
                    Crear cuenta
                  </Button>
                </Grid2>
              </Grid2>
              <Grid2 container direction="row" justifyContent="end" size={12}>
                <Link color="inherit" to="/auth/login">
                  Ya tengo una cuenta.
                </Link>
              </Grid2>
            </Grid2>
          </Grid2>
        </form>
      </AuthLayout>
    </>
  );
};
