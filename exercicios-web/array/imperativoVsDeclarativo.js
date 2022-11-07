const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
// Criando variável que vai receber a soma das notas
let total1 = 0
// Fazendo for que percorre o array com uma variável de controle, de 0 até o tamanho do array de forma crescente
for (let i = 0; i < alunos.length; i++) {
    // Somando os valores das notas dos alunos na variável total1
    total1 += alunos[i].nota
}
// Printando a média (soma das notas de todos os alunos no array dividido pela quantidade de alunos no array)
console.log(total1 / alunos.length)

// Declarativo
// Criando função responsável por acessar a nota dos alunos no array
const getNota = aluno => aluno.nota
// Criando a função responsável por somar o valor total das notas com a nota do aluno na posição do array
const soma = (total, atual) => total + atual

// Craindo a variável total2 que é igual ao map que pega todas as notas dos alunos sendo somadas pelo método reduce
const total2 = alunos.map(getNota).reduce(soma)
// Printando o valor do total2 e dividindo pela quantidade de alunos no array
console.log(total2 / alunos.length)