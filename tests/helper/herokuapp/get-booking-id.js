import herokuappAPI from "$root/pages/herokuapp.api";
import * as data from "$root/data/auth.data";

async function getBookingId() {
    const response = await herokuappAPI.booking_post(data.VALID_BOOKING);

    let bookingId = response.data.id;
    return bookingId;
}

export default getBookingId;