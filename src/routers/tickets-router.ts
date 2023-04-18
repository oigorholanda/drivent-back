import { Router} from "express";
import { createTicketByType, getAllTicketTypes } from "@/controllers";

const ticketsRouter = Router();

ticketsRouter.get('/types', getAllTicketTypes)
ticketsRouter.get('/', )
ticketsRouter.post('/', createTicketByType)


export { ticketsRouter };