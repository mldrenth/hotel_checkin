import React,{useState,useEffect} from "react"

import { getBookings } from "../BookingsServices"
import BookingsForm from "../components/BookingsForm"
import BookingsTable from "../components/BookingsTable"

const BookingsContainer=() => {
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        getBookings().then((allBookings) => {
            setBookings(allBookings)
        })
    }, [])

    const addBooking = (booking) => {
        const temp = bookings.map(b => b)
        temp.push(booking)
        setBookings(temp)
    }

    const removeBooking=(id) => {
        const temp= bookings.map(b=>b)
        const indexToDelete=temp.map(b=>b._id).indexOf(id)
        temp.splice(indexToDelete,1)
        setBookings(temp)
    }


    return(
        <div>
            <BookingsForm addBooking={addBooking}/>
            <BookingsTable bookings={bookings} removeBooking={removeBooking}/>
        </div>
    )
}

export default BookingsContainer
