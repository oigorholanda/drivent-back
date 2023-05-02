import { AuthenticatedRequest } from "@/middlewares";
import bookingsService from "@/services/bookings-service";
import { NextFunction, Response } from "express";
import httpStatus from "http-status";

export async function getBooking(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { userId } = req
    
    try {
        const booking = await bookingsService.getBooking(userId)

        return res.status(httpStatus.OK).send(booking)
    } catch (error) {
        return res.status(httpStatus.UNAUTHORIZED).send({})
    }
}

export async function changeBooking(req:AuthenticatedRequest, res:Response, next: NextFunction ) {
    const { userId } = req
    const bookingId = Number(req.params.bookingId)
    const {roomId} = req.body as Record<string, number>
    
    try {
        if (!bookingId) {
            return res.sendStatus(httpStatus.BAD_REQUEST)
        }

        
    } catch (error) {
        
    }
}