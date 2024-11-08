document.addEventListener("DOMContentLoaded", () => {
    const formEquipamento = document.getElementById("form-equipamento");
    const formCategoria = document.getElementById("form-categoria");
    const formChamado = document.getElementById("form-chamado");

    const listaCategorias = document.getElementById("lista-categorias");

    let equipamentos = JSON.parse(localStorage.getItem("equipamentos")) || [];
    let categorias = JSON.parse(localStorage.getItem("categorias")) || [];
    let chamados = JSON.parse(localStorage.getItem("chamados")) || [];

    // Função para salvar dados no localStorage
    const salvarDados = (chave, dados) => {
        localStorage.setItem(chave, JSON.stringify(dados));
    };

    // Cadastro de Equipamento
    formEquipamento.addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = document.getElementById("nome-equipamento").value;
        const fabricante = document.getElementById("fabricante").value;
        const dataAquisicao = document.getElementById("data-aquisicao").value;

        equipamentos.push({ nome, fabricante, dataAquisicao });
        salvarDados("equipamentos", equipamentos);
        alert("Equipamento cadastrado com sucesso!");
        formEquipamento.reset();
    });

    // Adicionar Categoria
    formCategoria.addEventListener("submit", (e) => {
        e.preventDefault();
        const nomeCategoria = document.getElementById("nome-categoria").value;
        categorias.push(nomeCategoria);
        salvarDados("categorias", categorias);

        const li = document.createElement("li");
        li.textContent = nomeCategoria;
        listaCategorias.appendChild(li);

        formCategoria.reset();
    });

    // Abrir Chamado de Manutenção
    formChamado.addEventListener("submit", (e) => {
        e.preventDefault();
        const equipamento = document.getElementById("equipamento-chamado").value;
        const descricao = document.getElementById("descricao-chamado").value;

        chamados.push({ equipamento, descricao, status: "Aberto" });
        salvarDados("chamados", chamados);
        alert("Chamado aberto com sucesso!");
        formChamado.reset();
    });

    // Renderizar categorias ao carregar a página
    categorias.forEach((categoria) => {
        const li = document.createElement("li");
        li.textContent = categoria;
        listaCategorias.appendChild(li);
    });
});
