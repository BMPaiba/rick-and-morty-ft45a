const { User } = require("../DB_connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    console.log(email,password)
    if (email && password) {
      const actualUser = await User.findOne({ where: { email, password } });
      if (actualUser) {
        if (actualUser.password === password) return res.json({ access: true });
        else return res.status(403).send("Contraseña incorrecta");
      } else return res.status(404).send("Usuario no encontrado");
    } else return res.status(400).send("Faltan datos");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = login;
