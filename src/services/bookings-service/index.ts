import { notFoundError } from "@/errors"
import bookingsRepository from "@/repositories/bookings-repository";

async function getBooking(userId: number) {
    const booking = await bookingsRepository.findBookingById(userId)
    if (!booking ) {
        throw notFoundError();
    }

    return booking;
}


export default { getBooking }