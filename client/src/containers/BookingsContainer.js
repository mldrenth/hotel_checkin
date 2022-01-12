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
    }, [bookings])

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

    const changeBooking = (newBooking) => {
        const temp = [...bookings]
        const idToChange = temp.findIndex(booking => booking._id === newBooking._id)
        temp[idToChange] = newBooking
    }


    return(
        <div>
            <BookingsForm addBooking={addBooking}/>
            <BookingsTable bookings={bookings} removeBooking={removeBooking} changeBooking={changeBooking}/>
        </div>
    )
}

export default BookingsContainer
