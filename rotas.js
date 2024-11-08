const express = require('express');
const Categoria = require('./models/Categoria');
const Equipamento = require('./models/Equipamento');
const Chamado = require('./models/Chamado');
const conectarDB = require('./db');

const app = express();
const port = 3000;

// Conectar ao banco de dados
conectarDB();

// Middleware para análise de JSON
app.use(express.json());

// Rota para listar as categorias
app.get('/categorias', async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar categorias' });
  }
});

// Rota para cadastrar um novo equipamento
app.post('/equipamentos', async (req, res) => {
  const { nome, fabricante, data_aquisicao, categoria_id } = req.body;
  try {
    const equipamento = new Equipamento({
      nome,
      fabricante,
      data_aquisicao,
      categoria_id,
    });
    await equipamento.save();
    res.status(201).json(equipamento);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar equipamento' });
  }
});

// Rota para abrir um chamado de manutenção
app.post('/chamados', async (req, res) => {
  const { equipamento_id, descricao } = req.body;
  try {
    const chamado = new Chamado({
      equipamento_id,
      descricao,
    });
    await chamado.save();
    res.status(201).json(chamado);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao abrir chamado de manutenção' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
