import {
  Dialog,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  DialogTitle,
} from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import COLORS from "../../../base/constants/colors";

const CommunityGuideLines = ({ openDialog, setOpenDialog }) => {
  return (
    <Dialog
      onClose={() => {
        setOpenDialog(false);
      }} // TODO: Add close functionality
      open={openDialog}
      sx={{
        height: "lg",
      }}
    >
      <DialogTitle
        align="center"
        color={COLORS.MOONSTONE}
        fontWeight={600}
        fontFamily={"Oregano, cursive"}
      >{`Calm Quest Community "Calm Crew" Guidelines`}</DialogTitle>
      <Box mx={"5%"} width={"90%"} textAlign={"justify"}>
        <Typography variant="h7" pt={2} color={COLORS.MOONSTONE}>
          Please be mindful of the following guidelines when using the Calm
          Crew:
        </Typography>
        <List component="nav">
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutline sx={{ color: COLORS.MOONSTONE_BLUE }} />
            </ListItemIcon>
            <ListItemText
              sx={{ color: COLORS.MOONSTONE_BLUE }}
              primary="Be respectful of others and their opinions."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutline sx={{ color: COLORS.MOONSTONE_BLUE }} />
            </ListItemIcon>
            <ListItemText
              sx={{ color: COLORS.MOONSTONE_BLUE }}
              primary="Be mindful of your language."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutline sx={{ color: COLORS.MOONSTONE_BLUE }} />
            </ListItemIcon>
            <ListItemText
              sx={{ color: COLORS.MOONSTONE_BLUE }}
              primary="Do not spam the chat."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutline sx={{ color: COLORS.MOONSTONE_BLUE }} />
            </ListItemIcon>
            <ListItemText
              sx={{ color: COLORS.MOONSTONE_BLUE }}
              primary="Do not share inappropriate content."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutline sx={{ color: COLORS.MOONSTONE_BLUE }} />
            </ListItemIcon>
            <ListItemText
              sx={{ color: COLORS.MOONSTONE_BLUE }}
              primary="Any type of violence towards others will not be tolerated."
            />
          </ListItem>
        </List>
      </Box>
    </Dialog>
  );
};

export default CommunityGuideLines;
