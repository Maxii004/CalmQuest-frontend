import { DEPRESSION_SEVERITY } from "../constants/depression-severity";
//
export const severityCheck = (total) => {
  if (total <= 27 && total >= 20) {
    return DEPRESSION_SEVERITY.SEVERE;
  } else if (total <= 19 && total >= 15) {
    return DEPRESSION_SEVERITY.MODERATELY_SEVERE;
  } else if (total <= 14 && total >= 10) {
    return DEPRESSION_SEVERITY.MODERATE;
  } else if (total <= 9 && total >= 5) {
    return DEPRESSION_SEVERITY.MILD;
  } else if (total <= 4 && total >= 0) {
    return DEPRESSION_SEVERITY.NONE;
  } else {
    return "error";
  }
};
