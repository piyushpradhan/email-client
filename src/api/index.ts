import axios from "axios";

export async function fetchEmails() {
  if (process.env.REACT_APP_BASE_API_URL) {
    const result = await axios.get(process.env.REACT_APP_BASE_API_URL);
    return result.data;
  } else {
    throw new Error("REACT_APP_BASE_API_URL is not defined");
  }
}
