import guardarEvento from "../../models/events/guardarEvento.js";

export default async function saveEvento(Datos){    

    return await guardarEvento(Datos)

}