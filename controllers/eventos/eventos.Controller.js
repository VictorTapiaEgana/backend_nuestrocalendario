import getCategorias from "../../services/events/getCategorias.js";
import getTipoEventos from "../../services/events/getTipoEventos.js";

const eventcontroller = {    

    getCategorias: async ( req, res )=>{                

        try {

            const resp = await getCategorias()

            res.status(200).json({status:200,
                                  data:resp,
                                  message:`${resp.length} registros encontrados`
            })

            
        } catch (error) {

             res.status(500).json({
                                   status:500,
                                   data:[],
                                   message:'Error del servidor'
             })
             
        }
        
    },

    getTipoEventos: async ( req, res )=>{                

        try {

            const resp = await getTipoEventos()

            res.status(200).json({status:200,
                                  data:resp,
                                  message:`${resp.length} registros encontrados`
            })

            
        } catch (error) {

             res.status(500).json({
                                   status:500,
                                   data:[],
                                   message:'Error del servidor'
             })
             
        }
        
    }

}

export default eventcontroller;