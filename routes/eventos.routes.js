import { Router } from 'express'
import eventcontroller from '../controllers/eventos/eventos.Controller.js';

const eventosRoter = Router()


eventosRoter.get('/getcategorias',eventcontroller.getCategorias)
eventosRoter.get('/gettipos',eventcontroller.getTipoEventos)




export default eventosRoter;