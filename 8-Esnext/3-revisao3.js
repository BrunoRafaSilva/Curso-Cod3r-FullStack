// ES8: Object.values/Object.entries

const obj = {
  name: 'John',
  age: 25,
  hobbies: ['coding', 'coding', 'coding'],
};
console.log(Object.values(obj));
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oit gente!'
    }
}

// Class
class Animal {}
class Cachorro extends Animal {
    falar(){
        return 'Au Au!'
    }
}

console.log(new Cachorro().falar())