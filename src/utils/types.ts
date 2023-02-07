export const EmailQuery = {
  ALL: "ALL",
  EMAIL: "EMAIL",
} as const;

export const EmailActions = {
  UPDATE: "UPDATE",
  TOGGLE: "TOGGLE",
  MARK_READ: "MARK_READ",
  SET_SELECTED: "SET_SELECTED",
  SHOW_UNREAD: "SHOW_UNREAD",
  SHOW_READ: "SHOW_READ",
  SHOW_FAV: "SHOW_FAV",
  MARK_READ_IN_UNREAD: "MARK_READ_IN_UNREAD",
} as const;

export type ActionType = {
  type: string;
  payload: any;
};

export type EmailSender = {
  email: string;
  name: string;
};

export type EmailBody = {
  id: string;
  body: string;
};

export type Email = {
  id: string;
  date: EpochTimeStamp;
  from: EmailSender;
  subject: string;
  short_description: string;
  isRead?: boolean;
};
