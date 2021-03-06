import React from "react"
import TableEntry from "./TableEntry"

const BookingsTable=({bookings,removeBooking, changeBooking}) => {


    const bookingsItems = bookings.map((booking) => {
        return <TableEntry booking={booking} removeBooking={removeBooking} changeBooking={changeBooking} key={booking._id}/>
    })

    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Checked In?</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {bookingsItems}
            </tbody>
        </table>
        </>
    )
}

export default BookingsTable