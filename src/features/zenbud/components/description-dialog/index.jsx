import { Dialog, DialogTitle, Typography } from "@mui/material";
import COLORS from "../../../base/constants/colors";

const DescriptionDialog = ({ openDialog, handleClose }) => {
  return (
    <Dialog open={openDialog} onClose={handleClose} maxWidth="sm">
      <DialogTitle
        align="center"
        color={COLORS.MOONSTONE}
        fontWeight={600}
        fontFamily={"Oregano, cursive"}
      >
        ZenBud
      </DialogTitle>
      <Typography
        variant="body"
        color={COLORS.LAPIS_LAZULI}
        p={2}
        textAlign={"center"}
      >
        Meet Zen Bud, your compassionate AI companion, crafted to support your
        mental well-being. Complete our brief questionnaire to help Zen Bud
        tailor its understanding to your unique needs. Find a judgment-free,
        confidential space with Zen Bud, where you're never alone and can freely
        express yourself in serenity.
      </Typography>
    </Dialog>
  );
};

export default DescriptionDialog;
