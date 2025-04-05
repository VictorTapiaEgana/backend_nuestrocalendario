import getEventosMensual from '../../models/events/getEventosMensual.js'

export default async function getEventosPorMes(MesABuscar){

     return await getEventosMensual(MesABuscar)

}