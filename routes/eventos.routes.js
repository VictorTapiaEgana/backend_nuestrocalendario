import { Router } from 'express'
import eventcontroller from '../controllers/eventos/eventos.Controller.js';

const eventosRoter = Router()

    // GET
    eventosRoter.get('/getcategorias',eventcontroller.getCategorias)
    eventosRoter.get('/gettipos',eventcontroller.getTipoEventos)

    // POST
    eventosRoter.post('/guadarevento',eventcontroller.saveEvento,)



export default eventosRoter;