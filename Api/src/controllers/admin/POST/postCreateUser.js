const { User }= require('../../../db');
require("dotenv").config();
const { EMAIL_ADMIN, NAME_ADMIN, PASS_ADMIN } = process.env;

const postCreateUser= async(sub, email, hashPassword)=>{


        const user = await User.findOne({ where: { sub: sub } });

        if (user) {
          console.log("Usuario ya existe");
          //return user
        }
      
        const newObjUser = {
          sub,
          email,
        };
      
        if (hashPassword !== undefined || hashPassword !== null) {
          newObjUser.password = hashPassword;
        }
      
         if (
          newObjUser.email === EMAIL_ADMIN &&
          newObjUser.name === NAME_ADMIN &&
          newObjUser.password === PASS_ADMIN
        ) {
          newObjUser.rol = "admin";
        } 
      
        const newUser = await User.create(newObjUser);
      
       /*  const findProfile = await Profile.findOne({ where: { userSub: sub } });
      
        if (!findProfile) {
          await Profile.create({ userSub: sub });
        }
        await sendRegisterEmail(newUser); */

        return newUser;

    
}

module.exports = postCreateUser;