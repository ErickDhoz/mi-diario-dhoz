import { MenuOutlined, TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";
import { trueOrFalse } from "../../store/journal/boolSlice";

export const SideBar = ({ drawerWidth }) => {
  const { displayName } = useSelector((state) => state.auth);
  const { bool } = useSelector((state) => state.bool);
  const { notes } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const noteActive = (id) => {
    const filteredNote = notes.find((note) => note.id === id);
    if (filteredNote) dispatch(setActiveNote(filteredNote));
  };

  const onOpen = () => {
    const bolean = dispatch(trueOrFalse());
    console.log(bolean);
  };

  return (
    <Box
      component="nav"
      sx={{ width: { sm: { drawerWidth } }, flexShrink: { sm: 1 } }}
    >
      <Drawer
        variant={bool ? "permanent" : "temporary"}
        //{open ? "permanent" : "temporary"}
        open={bool}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: `${drawerWidth}px`,
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            //alignItems: "center",
          }}
        >
          <Grid2 item="true">
            <Typography variant="h6" noWrap textTransform="uppercase">
              {displayName}
            </Typography>
          </Grid2>
          <Grid2>
            <IconButton
              onClick={onOpen}
              sx={{
                color: "primary.main",
                display: { sm: "none" },
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              <MenuOutlined />
            </IconButton>
          </Grid2>
        </Toolbar>
        <Divider />
        <List>
          {notes.map((note) => (
            <ListItem key={note.id} disablePadding>
              <ListItemButton onClick={() => noteActive(note.id)}>
                <ListItemIcon>
                  <TurnedInNot sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <Grid2 container>
                  <ListItemText primary={note.title} />
                  <ListItemText secondary={note.body} />
                </Grid2>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
