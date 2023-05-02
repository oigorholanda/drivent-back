import { prisma } from "@/config";

async function findBooking() {
    return prisma.booking.findMany();
}


async function findBookingById(userId: number) {
    return prisma.booking.findMany({
        where: {
            id: userId
        },
        include: {
            Room: true,
        }
    })
}


export default { findBooking, findBookingById }