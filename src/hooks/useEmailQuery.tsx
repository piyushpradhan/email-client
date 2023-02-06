import { useQuery } from "react-query";
import { fetchEmailBody, fetchEmails } from "../api";
import { EmailQuery } from "../utils/types";

export const useFetchAllEmails = () => {
  return useQuery(EmailQuery.ALL, async () => {
    const emails = await fetchEmails();
    return emails;
  });
};

export const useFetchEmailBody = (id: string) => {
  return useQuery(EmailQuery.EMAIL, async () => {
    const emailBody = await fetchEmailBody(id);
    return emailBody;
  });
};
