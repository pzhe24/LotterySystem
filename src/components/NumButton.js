import React from "react";

const NumButton = (props) => {
  const isSelected = () => {
    return props.NumsSelected.includes(props.number);
  };

  const selected = () => {
    props.selectNum(props.number);
  };

  return (
    <div>
      <button
        className={
          isSelected() ? "selectedButtonStyle" : "unselectedButtonStyle"
        }
        onClick={selected}
      >
        {props.number}
      </button>
    </div>
  );
};

export default NumButton;
