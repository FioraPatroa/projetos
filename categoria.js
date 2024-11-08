const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
  },
});

const Categoria = mongoose.model('Categoria', categoriaSchema);

module.exports = Categoria;
