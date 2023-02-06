import React from "react";
import { Email } from "../../utils/types";
import "./EmailBody.css";

const EmailBody = ({ email }: { email: Email }) => {
  return (
    <div className="email-body">
      <div className="avatar">{email?.from?.name[0].toUpperCase()}</div>
      <div className="body-container">
        <h1 className="email-from">{email?.from?.name}</h1>
      </div>
    </div>
  );
};

export default EmailBody;
