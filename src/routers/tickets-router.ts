import { Router } from "express";
import { createTicketByType, getAllTicketTypes, getTickets } from "@/controllers";
import { authenticateToken } from "@/middlewares";

const ticketsRouter = Router();

ticketsRouter.all('/*', authenticateToken)
ticketsRouter.get('/types', getAllTicketTypes)
ticketsRouter.get('/', getTickets)
ticketsRouter.post('/', createTicketByType)


export { ticketsRouter };