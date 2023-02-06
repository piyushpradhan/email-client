import { bindActionCreators } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchAllEmails } from "../../hooks/useEmailQuery";
import { RootState } from "../../redux/store";
import { emailActionCreators } from "../../redux/actions";
import EmailListItem from "../EmailListItem/EmailListItem";
import "./EmailList.css";
import EmailBody from "../EmailBody/EmailBody";
import { Email } from "../../utils/types";

const EmailList = () => {
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, data } = useFetchAllEmails();
  const { updateAllEmails } = bindActionCreators(emailActionCreators, dispatch);

  const emails = useSelector((state: RootState) => state.emailReducer.emails);

  useEffect(() => {
    if (!isLoading && isSuccess) {
      const result: Email[] = data.list.map((email: any) => ({
        ...email,
        isRead: false,
      }));
      updateAllEmails(result);
    }
  }, [isLoading]);

  return (
    <div className="container">
      {isLoading && <div>Loading...</div>}
      {isSuccess && (
        <div className="emails-container">
          <div className="email-list">
            {emails.map((email: Email) => (
              <EmailListItem key={email.id} email={email} />
            ))}
          </div>
          <EmailBody email={emails[0]} />
        </div>
      )}
    </div>
  );
};

export default EmailList;
