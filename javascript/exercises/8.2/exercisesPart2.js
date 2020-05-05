const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// #1 Crie uma função para adicionar o turno da manhã na lesson2.
const firstFunction = (object, key, value) => {
  object[key] = value;
  return console.log(object);

}
firstFunction(lesson2, 'turno', 'manhã')

// #2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const secondFunction = obj => console.log(Object.keys(obj));
secondFunction(lesson1);

// #3 Crie uma função para mostrar o tamanho de um objeto.
const thirdFunction = obj => console.log(Object.keys(obj).length)
thirdFunction(lesson1);

// #4 Crie uma função para listar os valores de um objeto.
const fourthFunction = obj => console.log(Object.values(obj))
fourthFunction(lesson1);

// #5 Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// #6 Crie uma função que retorne o número total de estudantes em todas as aulas.
const fifth = () => {
  let count = 0;
  for (lesson of Object.keys(allLessons)) {
    count += allLessons[lesson].numeroEstudantes;    
  }
  return console.log(`O número total de alunos é ${count}.`);
}
fifth()

// #7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const sixthFunction = (obj, indexKey) => {
  return console.log(Object.values(obj)[indexKey]);
}
sixthFunction(lesson1, 0)

// #8 Crie uma função que verifique se o par (chave / valor) existem na função.
const seventhFunction = (obj, key, value) => {
  if (key in obj) {
    console.log(obj[key] == value);
  } else console.log(key in obj);
}
seventhFunction(lesson1, 'numeroEstudantes', 200)

// #1 BONUS Crie uma função para contar quantos estudantes assistiram às aulas de Matemática
const eightthFunction = (obj, materia) => {
  let count = 0;
  for (lesson of Object.keys(obj)) {
    if (obj[lesson].materia == materia) {
      count += obj[lesson].numeroEstudantes;
    }
  }
  return console.log(`O número de estudantes de ${materia} é ${count}`);
}
eightthFunction(allLessons, 'Matemática');

// #2 BONUS
const ninethFunction = (obj, nomeProfessor) => {
  let raport = {};
  let arr = [];
  let count = 0;
  for (lesson of Object.keys(obj)) {
    if (obj[lesson].professor == nomeProfessor) {
      arr.push(obj[lesson].materia);
      count += obj[lesson].numeroEstudantes;
    }
  }
  raport.professor = nomeProfessor;
  raport.aulas = arr;
  raport.estudantes = count;
  return console.log(raport);
}
ninethFunction(allLessons, 'Maria Clara')

for (lesson of Object.keys(allLessons)) {
  console.log(lesson);
  
}