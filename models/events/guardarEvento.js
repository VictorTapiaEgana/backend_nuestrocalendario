import pool from "../../DBConfig/dbConfig.js"

export default async function guardarEvento(datosEvento){    

    //  nombre:data.nomEvento,
    //  descripcion:data.descEvento,
    //  fechaEvento:selectDate?.toDate(),
    //  categoria:data.cateEvento,
    //  tipo:data.tipoEvento,
    //  allDay:allday,
    //  hInicio:data.hInicio,
    //  hTermino:data.Htermino                

    let client;    

    try {

        client = await pool.connect()

        const { rows } = await client.query(`INSERT INTO eventos (titulo, descripcion, fecha, hora_inicio, hora_fin, 
                                                                  tipo_evento_id, usuario_id, categoria_evento_id, todoeldia) 
                                           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`
                                           ,[datosEvento.nombre, 
                                             datosEvento.descripcion, 
                                             datosEvento.fechaEvento, 
                                             datosEvento.hInicio, 
                                             datosEvento.hTermino, 
                                             datosEvento.tipo,
                                             datosEvento.user_id,
                                             datosEvento.categoria,
                                             datosEvento.allDay
                                           ])    
        return rows;
        
    } catch (error) {
        console.log(error)

        return []
        
    } finally {

    if (client)  client.release()

    }

}