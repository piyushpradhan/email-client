import { useQuery } from "react-query";
import { fetchEmails } from "../api";
import { EmailQuery } from "../utils/types";

export const useFetchAllEmails = () => {
  return useQuery(EmailQuery.ALL, async () => {
    const emails = await fetchEmails();
    return emails;
  });
};
