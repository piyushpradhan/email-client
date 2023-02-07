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

export const setSelectedEmail = (id: string, body: string) => {
  const action: ActionType = {
    type: EmailActions.SET_SELECTED,
    payload: {
      id: id,
      body: body,
    },
  };

  return dispatchAction(action);
};

export const applyFilter = (filterId: number, filter: string) => {
  const action: ActionType = {
    type: filter,
    payload: filterId,
  };

  return dispatchAction(action);
};

export const markEmailReadInUnread = (id: string) => {
  const action: ActionType = {
    type: EmailActions.MARK_READ,
    payload: id,
  };
  return dispatchAction(action);
};

export const markAsFavorite = (email: Email) => {
  const action: ActionType = {
    type: EmailActions.MARK_FAV,
    payload: email,
  };
  return dispatchAction(action);
};
