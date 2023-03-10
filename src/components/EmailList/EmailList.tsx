import { bindActionCreators } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchAllEmails } from "../../hooks/useEmailQuery";
import { RootState } from "../../redux/store";
import { emailActionCreators } from "../../redux/actions";
import EmailListItem from "../EmailListItem/EmailListItem";
import "./EmailList.css";
import EmailBody from "../EmailBody/EmailBody";
import { Email } from "../../utils/types";
import FilterButton from "../FilterButton/FilterButton";

const EmailList = () => {
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, data } = useFetchAllEmails();
  const { updateAllEmails } = bindActionCreators(emailActionCreators, dispatch);

  const emailState = useSelector((state: RootState) => state.emailReducer);

  useEffect(() => {
    if (!isLoading && isSuccess) {
      const result: Email[] = data.list.map((email: Email) => ({
        ...email,
        isRead: false,
      }));
      updateAllEmails(result);
    }
  }, [isLoading]);

  return (
    <div className="container">
      {isLoading && <div>Loading...</div>}
      <div className="filter-container">
        <p>Filter By: </p>
        <FilterButton label="Unread" index={1} />
        <FilterButton label="Read" index={2} />
        <FilterButton label="Favorite" index={3} />
      </div>
      {isSuccess && (
        <div className="emails-container">
          <div
            className="email-list"
            style={{
              display: `${emailState.selectedEmailId === "" ? "flex" : ""}`,
            }}
          >
            {emailState.selectedFilter === 0
              ? emailState.emails.map((email: Email) => (
                <EmailListItem key={email.id} email={email} />
              ))
              : emailState.filteredEmails.map((email: Email) => (
                <EmailListItem key={email.id} email={email} />
              ))}
          </div>
          {emailState.selectedEmailId !== "" && (
            <EmailBody
              email={emailState.emails[parseInt(emailState.selectedEmailId)]}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default EmailList;
