import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid2,
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

export const SideBar = ({ drawerWidth }) => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const noteActive = (id) => {
    const filteredNote = notes.find((note) => note.id === id);    
    if (filteredNote) dispatch(setActiveNote(filteredNote));
  };

  return (
    <Box
      component="nav"
      sx={{ width: { sm: { drawerWidth } }, flexShrink: { sm: 1 } }}
    >
      <Drawer
        variant="permanent"
        open={true}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: `${drawerWidth}px`,
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap textTransform="uppercase">
            {displayName}
          </Typography>
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
