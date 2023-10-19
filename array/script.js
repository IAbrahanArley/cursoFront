const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

const pessoasComMaisIdade = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMaisIdade);

const pessoasComUltimaA = pessoas.filter(obj => {
    return obj.name.toLowerCase().endsWith('a');
});
console.log(pessoasComUltimaA);