import { EmailActions, ActionType, Email } from "../../utils/types";

type EmailState = {
  emails: Email[];
};

const initialState: EmailState = {
  emails: [],
};

export const emailReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case EmailActions.UPDATE:
      return {
        ...state,
        emails: action.payload,
      };
    case EmailActions.MARK_READ:
      return {
        ...state,
        emails: [
          ...state.emails.slice(0, action.payload - 1),
          {
            ...state.emails[action.payload - 1],
            isRead: true,
          },
          ...state.emails.slice(action.payload),
        ],
      };
    default:
      return state;
  }
};
