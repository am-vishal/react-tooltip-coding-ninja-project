import { useState } from 'react';
import Tooltip from "@mui/material/Tooltip";

const App = () => {
  // state to keep track of tooltip placement
  const [placement, setPlacement] = useState("top");

  // function to update placement state when button is clicked
  const onBtnClick = (_, position) => {
    setPlacement(position);
  };

  return (
    <div className="main container position-relative w-100 p-4">
      <div className="d-flex h-100 justify-content-center align-items-start">
        {/* 4 diffrent btn for setting tooltip in diffrent diffrent position, if button is selected then outline classs will be remove */}
        <button type="button" onClick={(e) => onBtnClick(e, "top")} className={`btn btn-${placement === "top" ? "" : "outline-"}primary m-2`}>Top</button>
        <button type="button" onClick={(e) => onBtnClick(e, "bottom")} className={`btn btn-${placement === "bottom" ? "" : "outline-"}primary m-2`}>Bottom</button>
        <button type="button" onClick={(e) => onBtnClick(e, "left")} className={`btn btn-${placement === "left" ? "" : "outline-"}primary m-2`}>Left</button>
        <button type="button" onClick={(e) => onBtnClick(e, "right")} className={`btn btn-${placement === "right" ? "" : "outline-"}primary m-2`}>Right</button>
        {/* main class to center button and tooltip */}
        <div className="position-absolute top-50 start-50 translate-middle-x">
          <span className="position-relative">
            {/* mui tooltip */}
            <Tooltip title={placement} placement={placement} arrow>
              {/* Hover button */}
              <button type="button" className="btn btn-info btn-lg">Hover</button>
            </Tooltip>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
