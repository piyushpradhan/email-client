import React, { useEffect, useState } from "react";
import { fetchEmails } from "./api";
import "./App.css";
import EmailList from "./components/EmailList/EmailList";

function App() {
  return (
    <div className="App">
      <EmailList />
    </div>
  );
}

export default App;
