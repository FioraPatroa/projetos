const mongoose = require('mongoose');

const conectarDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/inventario_ti', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Banco de dados MongoDB conectado!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    process.exit(1);
  }
};

module.exports = conectarDB;
