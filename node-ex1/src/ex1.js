const expressoSul = require('express');

const vizu = expressoSul();

vizu.use(expressoSul.json());

vizu.get('/dadosPessoais', (req,res) => {
    res.send( {nome: 'Lucas Matos Moreira', idade: 20, email: 'matosluca7845@gmail.com', profissao: 'Estagiario'} );
});

vizu.get('/formacao', (req,res) => {
    res.send( {faculdade: 'UNIP - Ciencias da Computação', cursoTecnico: 'Técnico de eletronica em ETEC Aristóteles Ferreira', ensino: 'Ensino médio completo'} );
});

vizu.get('/projetos', (req, res) => {
    res.send({projetosAtual: 'Sistema de classificação de ordenação de dados'});
});

vizu.get('/experiencias', (req, res) => {
    res.send({empregoAtual: 'Estágio em Futuro consultoria TI', empregoAnterior: 'Estágio como Jovem Aprendiz ADM em correios'});
});

vizu.get('/lazer', (req,res) => {
    res.send({lazer: 'jogar games e programar'})
});

vizu.post('/cadastrarCliente', (req,res) => {
    const {nome, telefone, idade, profissao, email} = req.body;

    res.send("Seu nome: " + nome + "\nSeu telefone: " + telefone + "\nSua idade: " + idade + "\nSua Profissão: " + profissao + " e seu Email: " + email);
});

vizu.put('/alterarCliente/:cod', (req,res) => {
    const {cod} = req.params;

    const{nome, telefone, idade, profissao, email} = req.body;

    res.send('Seu cadastro foi atualizado!! '+ cod + "\nNome: " + nome + "\nE-mail: " + email);
});

vizu.delete('/deletarCliente/:cod', (req,res) => {
    const {cod} = req.params;

    res.send("Seu cadastro foi excluido com sucesso: " + cod);

    console.log(cod);
});

vizu.listen(5656, () => {
    console.log("RODANDO....")
}); 