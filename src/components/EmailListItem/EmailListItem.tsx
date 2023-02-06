import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { convertTime } from "../../utils/helper";
import type { Email } from "../../utils/types";
import { emailActionCreators } from "../../redux/actions";
import "./EmailListItem.css";
import { bindActionCreators } from "@reduxjs/toolkit";

type EmailListItemProps = {
  email: Email;
};

const EmailListItem: React.FC<EmailListItemProps> = ({
  email,
}: EmailListItemProps) => {
  const dispatch = useDispatch();
  const { markEmailRead } = bindActionCreators(emailActionCreators, dispatch);

  function openEmail() {
    if (!email.isRead) markEmailRead(email.id);
    // TODO: Add logic to display the slave element
  }

  return (
    <article
      onClick={openEmail}
      className={`email-container ${
        email.isRead ? "email-container-read" : "email-container-unread"
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
          <p>Favourite</p>
        </div>
      </div>
    </article>
  );
};

export default EmailListItem;
