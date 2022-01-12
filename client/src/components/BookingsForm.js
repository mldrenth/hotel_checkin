import React, {useState} from "react"
import { postBooking } from "../BookingsServices"

const BookingsForm=({addBooking}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [checkedIn, setCheckedIn] = useState(false)


    const handleNameChange = (event) => setName(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value)
    const handleCheckedInChange = (event) => setCheckedIn(event.target.checked ? event.target.checked : false)

    const handleOnSubmit = (event) => {
        event.preventDefault();
        postBooking({
            name: name,
            email: email,
            checkedIn: checkedIn
        })
        setName("")
        setEmail("")
        setCheckedIn(false)
        

    }

    return(
        <form onSubmit={handleOnSubmit} id="booking-form">
            <h2>Add a booking</h2>
            <div> 
                <label htmlFor="name">Name:</label>
                <input onChange={handleNameChange} type="text" id="name" name="name" value={name}required></input>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input onChange={handleEmailChange} type="email" id="email" name="email" value={email} required></input>
            </div>
            <div>
                <label htmlFor="checkedIn">Checked in?</label>
                <input onChange={handleCheckedInChange} type="checkbox" name="checkedIn" id="checkedIn" value={checkedIn} ></input>
            </div>
            <input type="submit" value="Save" id="save" ></input>

        </form>
    )
}
export default BookingsForm