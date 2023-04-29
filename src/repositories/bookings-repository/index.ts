import { prisma } from "@/config";

async function findBooking() {
    return prisma.booking.findMany();
}


export default { findBooking }