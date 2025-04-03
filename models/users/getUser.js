import pool from "../../DBConfig/dbConfig.js"

export default async function getUser(user){

    let client;

    try {

        client = await  pool.connect()                

        const  {rows}  = await client.query( 
                                            "SELECT nombre, email, password, avatar, rol FROM usuarios WHERE email = $1;",
                                            [user]
                                           )        
        return rows    

    } catch (error) {        

        return []
        
    } finally {

        if (client) client.release();

    }
    
}