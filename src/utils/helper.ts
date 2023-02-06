import { useDispatch } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ActionType } from "./types";

export const convertTime = (time: number) => {
  // convert timestamp to date and time DD/MM/YYYY HH:MM AM/PM
  const date = new Date(time);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12;
  const hours12Display = hours12 ? hours12 : 12;
  const minutesDisplay = minutes < 10 ? `0${minutes}` : minutes;
  return `${day}/${month}/${year} ${hours12Display}:${minutesDisplay} ${ampm}`;
};

export const dispatchAction = (action: ActionType) => {
  return (dispatch: Dispatch) => {
    dispatch(action);
  };
};
