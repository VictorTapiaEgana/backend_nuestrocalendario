import pool from "../../DBConfig/dbConfig.js"

export default async function guardarEvento(datosEvento){

    console.log(datosEvento)

    return datosEvento;

    // let client;    

    // try {

    //     client = await pool.connect()

    //     const { rows } = await client.query(`INSER INTO eventos
    // (titulo, descripcion, fecha, hora_inicio, hora_fin, tipo_evento_id, usuario_id, estado, categpria_evento_id, todoeldia) 
    // VALUES 
    //                                          ;`,[id])

    //     return rows;
        
    // } catch (error) {

    //     return []
        
    // } finally {

    //   if (client)  client.release()

    // }

}