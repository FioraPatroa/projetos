const mongoose = require('mongoose');

const equipamentoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  fabricante: {
    type: String,
  },
  data_aquisicao: {
    type: Date,
  },
  categoria_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
  },
});

const Equipamento = mongoose.model('Equipamento', equipamentoSchema);

module.exports = Equipamento;
