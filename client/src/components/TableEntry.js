import React from "react"
import { deleteBooking } from "../BookingsServices"


const TableEntry=({booking,removeBooking}) => {


    const handleDelete=() => {
        deleteBooking(booking._id)
        .then(() => {
            removeBooking(booking._id)
        })
    }

    return(
        <>
        <tr>
            <td>{booking.name}</td>
            <td>{booking.email}</td>
            <td>{booking.checkedIn ? <p>&#9989;</p>: <p>&#10060;</p>}</td>
            <td>
                <button onClick={handleDelete}>&#128465;</button>
            </td>
        </tr>
        
        </>
    )
}

export default TableEntry