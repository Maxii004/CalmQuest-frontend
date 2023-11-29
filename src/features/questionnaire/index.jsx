import { Dialog, DialogTitle } from "@mui/material";
import { QuestionnaireForm } from "./components";
import COLORS from "../base/constants/colors";

const Questionnaire = ({ openDialog }) => {
  return (
    <Dialog open={openDialog} fullScreen fullWidth>
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
      <QuestionnaireForm />
    </Dialog>
  );
};

export default Questionnaire;
