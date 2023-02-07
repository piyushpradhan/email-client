import React from "react";
import "./FilterButton.css";

type FilterButtonProps = {
  label: string;
  isSelected: boolean;
};

const FilterButton = ({ label, isSelected }: FilterButtonProps) => {
  return (
    <div className="filter-button-container">
      <button>{label}</button>
    </div>
  );
};

export default FilterButton;
