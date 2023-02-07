import { bindActionCreators } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchEmailBody } from "../../hooks/useEmailQuery";
import { emailActionCreators } from "../../redux/actions";
import { RootState } from "../../redux/store";
import { convertTime } from "../../utils/helper";
import { Email } from "../../utils/types";
import "./EmailBody.css";

const EmailBody = ({ email }: { email: Email }) => {
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, data } = useFetchEmailBody(email.id);
  const { setSelectedEmail, markAsFavorite } = bindActionCreators(
    emailActionCreators,
    dispatch
  );

  const emailContent = useSelector(
    (state: RootState) => state.emailReducer.selectedEmailBody
  );

  function closeEmailBody() {
    setSelectedEmail("", "");
  }

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setSelectedEmail(data.id, data.body);
    }
  }, []);

  function addToFavorite() {
    markAsFavorite(email);
  }

  return (
    <div className="email-body">
      <div className="avatar">{email?.from?.name[0].toUpperCase()}</div>
      <div className="body-container">
        <header className="email-header">
          <h1 className="email-from">{email?.from?.name}</h1>
          <button onClick={addToFavorite} className="email-fav-button">
            Mark as favorite
          </button>
        </header>
        <div className="email-footer">
          <p>{convertTime(email?.date)}</p>
        </div>
        <div
          className="email-body-content"
          dangerouslySetInnerHTML={{ __html: emailContent }}
        ></div>
      </div>
      <button onClick={closeEmailBody} className="close-button">
        &times;
      </button>
    </div>
  );
};

export default EmailBody;
