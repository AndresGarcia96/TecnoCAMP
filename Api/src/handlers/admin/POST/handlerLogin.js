const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const { KEY_SECRET } = process.env;
const getUser = require("../../../controllers/admin/GET/getUser");

const handlerLogin = async (req, res) => {
  const { sub, email, password } = req.body;

  try {
    const user = await getUser(sub);

    if (!user) {
      res.status(404).json({ message: `No existe usuario con email ${email}` });
    }

    const validatePassword = await bcrypt.compare(password, user.password);

    if (sub === user.sub && email === user.email && validatePassword) {
      const rol = user.rol;

      jwt.sign({ sub, email, rol }, KEY_SECRET, (err, token) => {
        res.status(200).json({
          message: "¡Has ingresado correctamente!",
          token,
          rol,
        });
      });
    } else {
      res.status(404).json({ message: "¡Credenciales Incorrectas!" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerLogin;
