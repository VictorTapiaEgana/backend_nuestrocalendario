import getCategorias from "../../services/events/getCategorias.js";
import getTipoEventos from "../../services/events/getTipoEventos.js";
import saveEvento from "../../services/events/saveEvento.js";

const handleRequest = async (serviceFunction, res, Datos) => {    

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
        
        const DatosEvento = req.body;        
        handleRequest(saveEvento, res, DatosEvento)
    }   

}

export default eventcontroller;