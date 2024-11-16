import {
  Delete,
  DeleteOutline,
  DeleteOutlineRounded,
  SaveOutlined,
  UploadFileRounded,
} from "@mui/icons-material";
import {
  Button,
  Grid2,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { ImagesGallery } from "../component/ImagesGallery";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import {
  startDeletingNote,
  startSaveNote,
  startUploadingFiles,
} from "../../store/journal/thunks";
import Swal from "sweetalert2";

export const NoteView = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch();
  const { active, messageSaved, isSaving, imageUrl } = useSelector(
    (state) => state.journal
  );
  const { onInputChange, formState, title, body, date } = useForm(active);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0)
      Swal.fire({
        title: "Nota Actualizada.",
        text: messageSaved,
        icon: "success",
        iconColor: "#6787bd",
      });
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files.length === 0) return;
    dispatch(startUploadingFiles(target.files));
  };

  const fileInputRef = useRef();
  const onDelete = () => {
    dispatch(startDeletingNote());
  };

  return (
    <Grid2
      container
      direction="column"
      justifyContent="space-between"
      sx={{
        mb: 1,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Grid2 item="true" sx={{ justifyContent: "space-between" }}>
        <Typography fontSize={39} fontWeight="light" color="gray" variant="h6">
          {dateString}
        </Typography>
      </Grid2>
      <Grid2
        container
        sx={{
          justifyContent: "end",
        }}
      >
        <input
          type="file"
          multiple
          onChange={onFileInputChange}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
        <IconButton
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
          color="primary"
        >
          <UploadFileRounded />
        </IconButton>

        <Button onClick={onSaveNote} disabled={isSaving}>
          <SaveOutlined sx={{ fontSize: 20 }} />
          Guardar
        </Button>
      </Grid2>

      <Grid2 container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: "none", mb: 1, padding: 0 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió el día de hoy? "
          minRows={5}
          sx={{ border: "none", mb: 1, padding: 0 }}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid2>
      <Grid2 container justifyContent="end" alignContent="center">
        <Button onClick={onDelete} sx={{ mt: 2 }}>
          <DeleteOutlineRounded />
          <p>Borrar</p>
        </Button>
      </Grid2>
      <ImagesGallery images={active.imageUrl} />
    </Grid2>
  );
};
