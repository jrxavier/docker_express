const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {

  usuarios = ["Jose", "Maria"]

  console.log("Passando aqui")
  res.send(usuarios);
});

module.exports = router;
