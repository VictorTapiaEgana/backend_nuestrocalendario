import getUser from "../../models/users/getUser.js";

const validarLogin =  async (user) => {
    
    return  await  getUser(user)        

}

export default validarLogin;