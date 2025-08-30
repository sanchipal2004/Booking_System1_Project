import React, { useState } from 'react'

const Payment = () => {
    const [open,setopen]=useState('')
    const [openpayment,setopenpayment]=useState('')


    const handleClick=()=>{
        
    }
  return (
    <div>
      <div className="pcontainer">
        <h1>Payment</h1>
        <p>Complete Your Booking</p>
        <div className="poptions flex flex-col">
            <button>Credit card</button>
            <button>Online Payment</button>
        </div>
      </div>
    </div>
  )
}

export default Payment
