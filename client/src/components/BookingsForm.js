import React, {useState} from "react"
import { postBooking } from "../BookingsServices"

const BookingsForm=({addBooking}) => {

    const [formData, setFormData] = useState({name: "", email:"", checkedIn: false})

    const onChange = (event) => {
        const temp = {...formData}
        if (event.target.id === "name" || event.target.id === "email" ) {
        temp[event.target.id] = event.target.value
        }
        else {
        temp[event.target.id] = event.target.checked
        }
        console.log(formData)
        setFormData(temp)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        postBooking(formData).then((data) => {
            addBooking(data)
        })

    }

    return(
        <form onSubmit={onSubmit} id="booking-form">
            <h2>Add a booking</h2>
            <div> 
                <label htmlFor="name">Name:</label>
                <input onChange={onChange} type="text" id="name" required></input>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input onChange={onChange} type="email" id="email" required></input>
            </div>
            <div>
                <label htmlFor="checkedIn">Checked in?</label>
                <input onChange={onChange} type="checkbox" id="checkedIn" ></input>
            </div>
            <input type="submit" value="Save" id="save"></input>

        </form>
    )
}
export default BookingsForm