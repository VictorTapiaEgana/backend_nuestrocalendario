import validarLogin from "../../services/users/validarLogin.js";

const userController = {
  
    validarLogin : async(req,res) => {
        
        const { user, pass } = req.body;   
        
        if( !user ) {
            res.status(404).json({
                                 status:404,
                                 data:[],
                                 message:'Faltan datos de usuario'
            })

        }


        
        try {            
            
            const data = await validarLogin(user)

            console.log(data)
          
            if (data.length < 1 ){

                res.status(404).json({
                                      status:404,
                                      data:[],
                                      message:'Usuario no encontrado'
                })

                return
            }            
            
            if ( String(data[0].password) === String(pass)){
                res.status(200).json({
                                      status:200,
                                      data:[{
                                            nombre: data[0].nombre,
                                            enmail:data[0].email,
                                            avatar:data[0].avatar,
                                            rol:data[0].rol
                                      }],
                                      message:'Usuario validado'

                })

            } else{

                res.status(200).json({
                                      status:404,
                                      data:[],
                                      message:'Clave invalida'  
                })
            }

            
        } catch (error) {             
console.log(error)
            res.status(500).json({
                                  status:500,
                                  data:error,
                                  message:'Error del servidor'
            })
            
        }

    }

}

export default userController;