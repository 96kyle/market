import React, { useState } from "react";
import styled from "styled-components";

const AreaBox = ({ area0, area1, areaRef1, areaRef2 }) => {
  const [subOption, setSubOption] = useState([]);
  const optionRender = area0.map((area) => {
    return (
      <option id={"area" + area.index} value={area.index} key={area.index}>
        {area.name}
      </option>
    );
  });

  const addOption2 = () => {
    setSubOption(area1[document.getElementById("option").value]);
    // document.getElementById("option2").style.display = "inline-block";
  };

  const subOptionRender = subOption.map((area) => {
    return (
      <option key={area} value={area}>
        {area}
      </option>
    );
  });
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <SelectBox id="option" onClick={addOption2} ref={areaRef1}>
        {optionRender}
      </SelectBox>

      <SelectBox
        id="option2"
        ref={areaRef2}
        style={{
          display: "inline-block",
          marginLeft: "30px",
        }}
      >
        {subOptionRender}
      </SelectBox>
    </div>
  );
};

export default AreaBox;

const SelectBox = styled.select`
  width: 235px;
  height: 50px;
  font-size: 17px;
  margin-top: 10px;
  border: 1px solid #e2e2e2;
  background-color: #f8f9fa;
  cursor: pointer;
`;
