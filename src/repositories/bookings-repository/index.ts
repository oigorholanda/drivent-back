import { prisma } from "@/config";

async function findBooking() {
    return prisma.booking.findMany();
}


async function findBookingById(userId: number) {
    return prisma.booking.findUnique({
        where: {
            id: userId
        },
        include: {
            Room: true,
        }
    })
}


export default { findBooking, findBookingById }