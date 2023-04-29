import { AuthenticatedRequest } from "@/middlewares";
import bookingsService from "@/services/bookings-service";
import { NextFunction, Response } from "express";
import httpStatus from "http-status";

export async function getBooking(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
        const booking = await bookingsService.getBooking()
        return res.status(httpStatus.OK).send(booking)
    } catch (error) {
        return res.status(httpStatus.UNAUTHORIZED).send({})
    }
}