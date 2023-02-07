import { bindActionCreators } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { emailActionCreators } from "../../redux/actions";
import { RootState } from "../../redux/store";
import { EmailActions } from "../../utils/types";
import "./FilterButton.css";

type FilterButtonProps = {
  label: string;
  index: number;
};

const FilterButton = ({ label, index }: FilterButtonProps) => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(
    (state: RootState) => state.emailReducer.selectedFilter
  );
  const { applyFilter } = bindActionCreators(emailActionCreators, dispatch);

  function setFilter() {
    if (label === "Unread") {
      applyFilter(1, EmailActions.SHOW_UNREAD);
    } else if (label === "Read") {
      applyFilter(2, EmailActions.SHOW_READ);
    } else if (label === "Favorite") {
      applyFilter(3, EmailActions.SHOW_FAV);
    }
  }

  return (
    <div
      className={`filter-button-container ${
        selectedFilter === index ? "focused-button" : ""
      }`}
    >
      <button onClick={setFilter}>{label}</button>
    </div>
  );
};

export default FilterButton;
