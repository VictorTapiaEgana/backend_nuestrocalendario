import pool from "../../DBConfig/dbConfig.js";

export default async function getCategori(){

    let client;

    try {

        client = await pool.connect();

        const { rows } = await client.query(`SELECT * FROM categorias;`)        

        return rows
        
    } catch (error) {

        console.log(error)

        return []
         
    } finally {
    
        if (client)  client.release()
    }

    
    
}

