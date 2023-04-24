import CreateTicketType from "@/services/tickets-service"
import Joi from "joi";

export const createTicketSchema = Joi.object({
    ticketTypeId: Joi.number().required(),
})