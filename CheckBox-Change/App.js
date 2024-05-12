import "./styles.css";
import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";

export default function App() {
  const [checkBoxList, setCheckBoxList] = useState([
    { id: 1, label: "Checkbox 1", checked: false },
    { id: 2, label: "Checkbox 3", checked: false },
    { id: 3, label: "Checkbox 4", checked: false },
    { id: 4, label: "Checkbox 4", checked: false },
    { id: 5, label: "Checkbox 5", checked: false },
  ]);
  const [selectAllDisabled, setSelectAllDisabled] = useState(false);
  const handleCheckBoxChange = (id) => {
    const updatedCheckboxs = checkBoxList.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setCheckBoxList(updatedCheckboxs);
    const allChecked = updatedCheckboxs.every((item) => item.checked);
    console.log(allChecked);
    setSelectAllDisabled(allChecked);
  };
  const handleSelectAll = () => {
    console.log("click");
    const updatedCheckboxs = checkBoxList.map((item) => {
      return { ...item, checked: !item.checked };
    });
    setCheckBoxList(updatedCheckboxs);
    setSelectAllDisabled(!selectAllDisabled);
  };
  return (
    <div className="App">
      {checkBoxList.map((item, index) => {
        return (
          <>
            <Checkbox
              label={item.label}
              checked={item.checked}
              onChange={() => handleCheckBoxChange(item.id)}
            />
          </>
        );
      })}
      <button onClick={handleSelectAll}>
        {selectAllDisabled ? "DeselectALL" : "SelectAll"}
      </button>
    </div>
  );
}
