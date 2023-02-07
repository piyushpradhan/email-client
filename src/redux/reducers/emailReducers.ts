import { EmailActions, ActionType, Email } from "../../utils/types";

type EmailState = {
  emails: Email[];
  selectedEmailId: string;
  selectedEmailBody: string;
  favoriteEmails: Email[];
  filteredEmails: Email[];
  selectedFilter: number;
};

const initialState: EmailState = {
  emails: [],
  selectedEmailId: "",
  selectedEmailBody: "",
  favoriteEmails: [],
  filteredEmails: [],
  selectedFilter: 0,
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
    case EmailActions.SHOW_UNREAD:
      return {
        ...state,
        selectedFilter: action.payload,
        filteredEmails: state.emails.filter((email: Email) => {
          if (!email.isRead) return email;
        }),
      };
    case EmailActions.SHOW_READ:
      return {
        ...state,
        selectedFilter: action.payload,
        filteredEmails: state.emails.filter((email: Email) => {
          if (email.isRead) return email;
        }),
      };
    case EmailActions.SHOW_FAV:
      return {
        ...state,
        selectedFilter: action.payload,
        filteredEmails: state.favoriteEmails,
      };
    case EmailActions.MARK_READ_IN_UNREAD:
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
        filteredEmails: [
          ...state.filteredEmails.slice(0, action.payload - 1),
          {
            ...state.filteredEmails[action.payload - 1],
            isRead: true,
          },
          ...state.filteredEmails.slice(action.payload),
        ],
      };
    default:
      return state;
  }
};
