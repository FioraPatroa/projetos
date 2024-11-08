const mongoose = require('mongoose');

const chamadoSchema = new mongoose.Schema({
  equipamento_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Equipamento',
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  data_abertura: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Aberto', 'Em andamento', 'Fechado'],
    default: 'Aberto',
  },
});

const Chamado = mongoose.model('Chamado', chamadoSchema);

module.exports = Chamado;
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
