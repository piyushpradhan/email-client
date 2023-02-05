import React from "react";
import { convertTime } from "../../utils/helper";
import type { Email } from "../../utils/types";
import "./EmailListItem.css";

type EmailListItemProps = {
  email: Email;
};

const EmailListItem: React.FC<EmailListItemProps> = ({
  email,
}: EmailListItemProps) => {
  return (
    <article className="email-container">
      <div className="avatar">{email?.from?.name[0].toUpperCase()}</div>
      <div className="email-body-container">
        <div className="email-details-container">
          <p className="email-from">
            <p>From:</p>
            <strong>
              {email?.from?.name}&lt;{email?.from?.email}&gt;
            </strong>
          </p>
          <p className="email-subject">
            <p>Subject:</p>
            <strong>{email?.subject}</strong>
          </p>
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
