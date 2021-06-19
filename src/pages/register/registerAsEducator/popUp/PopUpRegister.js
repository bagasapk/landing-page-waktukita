import React from "react";
import './PopUpRegister.css'

function PopUpRegister(props) {
  return (props.trigger)?(
    <div className="popup">
      <div className="h-50 col-md-5 popupInner">
        {props.children}
      </div>
    </div>
  ):"";
}

export default PopUpRegister;
