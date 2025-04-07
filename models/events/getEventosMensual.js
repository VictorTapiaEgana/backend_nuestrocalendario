 import pool from '../../DBConfig/dbConfig.js';

 function obtenerRangoDesdeFecha(fechaString) {
    // fechaString: "12/04/2025"
    const [dia, mesStr, anio] = fechaString.trim().split("/");
  
    const mes = Number(mesStr) - 1; // JS usa meses de 0 a 11
  
    if (isNaN(mes) || mes < 0 || mes > 11) {
      throw new Error(`Mes no válido: ${mesStr}`);
    }
  
    const inicio = new Date(Number(anio), mes, 1);
    const fin = new Date(Number(anio), mes + 1, 1); // primer día del mes siguiente
  
    const inicioStr = inicio.toISOString().slice(0, 10);
    const finStr = fin.toISOString().slice(0, 10);
  
    return { inicio: inicioStr, fin: finStr };
  }
  

  

export default async function getEventosMensual (MesABuscar){   

    let client;

    const { inicio, fin } = obtenerRangoDesdeFecha("06/04/2025");   

    try {

         client = await pool.connect()

         const { rows } = await client.query(`SELECT * FROM eventos
                                              WHERE fecha >= $1 AND fecha < $2;`
                                              ,[inicio, fin])   
         return rows
        
    } catch (error) {

         console.log(error)
    
         return[]
        
    } finally {
        console.log('Finally')
         if (client) client.release()

    }

}