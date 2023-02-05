import React from "react";
import { useFetchAllEmails } from "../../hooks/useEmailQuery";
import "./EmailList.css";

const EmailList = () => {
  const { isLoading, isSuccess, isError, data } = useFetchAllEmails();
  console.log(data);
  return (
    <div>
      <ul>something</ul>
    </div>
  );
};

export default EmailList;
