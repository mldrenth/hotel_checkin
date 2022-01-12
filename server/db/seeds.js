use hotelBookings;

db.dropDatabase();

db.bookings.insertMany(
    [
        {
            name: "Yugi",
            email: "yugi@gigolo.com",
            checkedIn: true
        },
        {
            name: "Sacha",
            email: "sacha@cohen.baren",
            checkedIn: true
        },
        {
            name: "Peter",
            email: "peter@aquamarine.com",
            checkedIn: false

        }
    ]
)