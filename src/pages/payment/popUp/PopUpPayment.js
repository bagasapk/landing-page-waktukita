import React from 'react'

function PopUpMetodePembayaran(props) {
    return (props.trigger)?(
        <div style={{zIndex:"2"}} className="popup">
          <div className="px-4 px-md-5 py-5 col-12 col-md-6 col-lg-5 col-xl-4 popUpPayment">
            {props.children}
          </div>
        </div>
    ):"";
}

export default PopUpMetodePembayaran
