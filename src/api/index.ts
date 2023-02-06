import axios from "axios";

export async function fetchEmails() {
  if (process.env.REACT_APP_BASE_API_URL) {
    const result = await axios.get(process.env.REACT_APP_BASE_API_URL);
    return result.data;
  } else {
    throw new Error("Api base url not provided");
  }
}

export async function fetchEmailBody(id: string) {
  if (process.env.REACT_APP_BASE_API_URL) {
    const result = await axios.get(
      process.env.REACT_APP_BASE_API_URL + "?id=" + id
    );
    return result.data;
  } else {
    throw new Error("Api base url not provided");
  }
}
