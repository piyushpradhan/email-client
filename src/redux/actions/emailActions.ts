import { dispatchAction } from "../../utils/helper";
import { Email, EmailActions } from "../../utils/types";
import { ActionType } from "../../utils/types";

export const updateAllEmails = (emails: Email[]) => {
  const action: ActionType = {
    type: EmailActions.UPDATE,
    payload: emails,
  };

  return dispatchAction(action);
};

export const markEmailRead = (id: string) => {
  const action: ActionType = {
    type: EmailActions.MARK_READ,
    payload: id,
  };
  return dispatchAction(action);
};
