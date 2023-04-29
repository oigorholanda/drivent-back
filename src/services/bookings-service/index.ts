import { notFoundError } from "@/errors"
import bookingsRepository from "@/repositories/bookings-repository";

async function getBooking() {
    const booking = await bookingsRepository.findBooking()
    if (!booking || booking.length === 0 ) {
        throw notFoundError();
    }

    return booking;
}


export default { getBooking }