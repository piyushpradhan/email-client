import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { convertTime } from "../../utils/helper";
import type { Email } from "../../utils/types";
import { emailActionCreators } from "../../redux/actions";
import "./EmailListItem.css";
import { bindActionCreators } from "@reduxjs/toolkit";
import { fetchEmailBody } from "../../api";

type EmailListItemProps = {
  email: Email;
};

const EmailListItem: React.FC<EmailListItemProps> = ({
  email,
}: EmailListItemProps) => {
  const dispatch = useDispatch();
  const {
    markEmailRead,
    setSelectedEmail,
    markEmailReadInUnread,
    markAsFavorite,
  } = bindActionCreators(emailActionCreators, dispatch);
  const emailState = useSelector((state: RootState) => state.emailReducer);
  const [isRead, setIsRead] = useState<boolean>(false);
  const isFavorite = emailState.favoriteEmails.includes(email);

  function openEmail() {
    if (!email.isRead && emailState.selectedFilter === 0)
      markEmailRead(email.id);
    if (!email.isRead && emailState.selectedFilter !== 0) {
      markEmailReadInUnread(email.id);
      setIsRead(true);
    }
    fetchEmailBody(email.id).then((result) => {
      setSelectedEmail((parseInt(result.id) - 1).toString(), result.body);
    });
  }

  function addToFavorite(e: any) {
    e.stopPropagation();
    if (!isFavorite) {
      markAsFavorite(email);
    }
  }

  return (
    <article
      onClick={openEmail}
      className={`email-container ${
        email.isRead || isRead
          ? "email-container-read"
          : "email-container-unread"
      }`}
    >
      <div className="avatar">{email?.from?.name[0].toUpperCase()}</div>
      <div className="email-body-container">
        <div className="email-details-container">
          <span className="email-from">
            <p>From:</p>
            <strong>
              {email?.from?.name}&lt;{email?.from?.email}&gt;
            </strong>
          </span>
          <span className="email-subject">
            <p>Subject:</p>
            <strong>{email?.subject}</strong>
          </span>
        </div>
        <span className="email-short-description">
          {email?.short_description}
        </span>
        <div className="email-footer">
          <p>{convertTime(email?.date)}</p>
          <p onClick={addToFavorite}>Favorite</p>
        </div>
      </div>
    </article>
  );
};

export default EmailListItem;
