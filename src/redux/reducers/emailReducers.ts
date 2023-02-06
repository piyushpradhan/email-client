import { EmailActions, ActionType, Email } from "../../utils/types";

type EmailState = {
  emails: Email[];
  selectedEmailId: string;
  selectedEmailBody: string;
  favoriteEmails: Email[];
};

const initialState: EmailState = {
  emails: [],
  selectedEmailId: "",
  selectedEmailBody: "",
  favoriteEmails: [],
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
    case EmailActions.SET_SELECTED:
      return {
        ...state,
        selectedEmailId: action.payload.id,
        selectedEmailBody: action.payload.body,
      };
    default:
      return state;
  }
};
