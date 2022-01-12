import React, {useState, useEffect} from "react"
import { deleteBooking, putBooking} from "../BookingsServices"


const TableEntry=({booking,removeBooking, changeBooking}) => {
    

    const handleDelete=() => {
        deleteBooking(booking._id)
        .then(() => {
            removeBooking(booking._id)
        })
    }

    const handleCheckInToggle = () => {
        const newBooking = {
            _id: booking._id,
            name: booking.name,
            email: booking.email,
            checkedIn: !booking.checkedIn
        }
        putBooking(newBooking)
        .then(() => {
            changeBooking(newBooking)
        })
    }

    return(
        <>
        <tr>
            <td>{booking.name}</td>
            <td>{booking.email}</td>
            <td onClick={handleCheckInToggle}>{booking.checkedIn ? <p>&#9989;</p>: <p>&#10060;</p>}</td>
            <td>
                <button onClick={handleDelete}>&#128465;</button>
            </td>
        </tr>
        
        </>
    )
}

export default TableEntry