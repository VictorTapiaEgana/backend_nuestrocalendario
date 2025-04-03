import getCategorias from "../../services/events/getCategorias.js";
import getTipoEventos from "../../services/events/getTipoEventos.js";
import saveEvento from "../../services/events/saveEvento.js";

const handleRequest = async (serviceFunction, res, Datos) => {

    console.log("fucnion : ",Datos)

    try {

        const resp = await serviceFunction(Datos);

        res.status(200).json({
                              status: 200,
                              data: resp,
                              message: `${resp.length} Registro encontrados`
        });

    } catch (error) {

        res.status(500).json({
                              status: 500,
                              data: [],
                              message: "Error del servidor"
        });

    }
};

const eventcontroller = {    

    getCategorias: (req, res) => handleRequest(getCategorias, res ),
    getTipoEventos: (req, res) => handleRequest(getTipoEventos, res ), 
    

    saveEvento:(req,res)=>{
        
        const resp = req.body;
        console.log(resp)


        
         handleRequest(saveEvento, res, resp)
    }

    // getCategorias: async ( req, res )=>{                

    //     try {

    //         const resp = await getCategorias()

    //         res.status(200).json({status:200,
    //                               data:resp,
    //                               message:`${resp.length} registros encontrados`
    //         })

            
    //     } catch (error) {

    //          res.status(500).json({
    //                                status:500,
    //                                data:[],
    //                                message:'Error del servidor'
    //          })
             
    //     }
        
    // },

    // getTipoEventos: async ( req, res )=>{                

    //     try {

    //         const resp = await getTipoEventos()

    //         res.status(200).json({status:200,
    //                               data:resp,
    //                               message:`${resp.length} registros encontrados`
    //         })

            
    //     } catch (error) {

    //          res.status(500).json({
    //                                status:500,
    //                                data:[],
    //                                message:'Error del servidor'
    //          })
             
    //     }
        
    // }

}

export default eventcontroller;