import { Dialog, DialogTitle } from "@mui/material";
import { QuestionnaireForm } from "./components";
import COLORS from "../base/constants/colors";

const Questionnaire = ({ openDialog, handleOnClose, hasAttempted }) => {
  return (
    <Dialog open={openDialog} onClose={handleOnClose} maxWidth="md">
      <DialogTitle
        sx={{
          textAlign: "center",
          fontSize: 36,
          fontWeight: 600,
          color: COLORS.CRYSTAL,
        }}
      >
        CalmQuest Daily Questionnaire
      </DialogTitle>
      <QuestionnaireForm
        attempted={hasAttempted}
        handleOnClose={handleOnClose}
      />
    </Dialog>
  );
};

export default Questionnaire;
