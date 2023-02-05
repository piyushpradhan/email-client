export const EmailQuery = {
  ALL: "ALL",
  EMAIL: "EMAIL",
} as const;

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
};
