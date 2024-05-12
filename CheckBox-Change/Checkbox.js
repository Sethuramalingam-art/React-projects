import React from "react";

function Checkbox({ label, checked, onChange }) {
  return (
    <>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </>
  );
}

export default Checkbox;
