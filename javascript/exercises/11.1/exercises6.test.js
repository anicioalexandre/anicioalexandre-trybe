const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByName = (name) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      if (animal) {
        return resolve(animal);
      }

      return reject('nenhum animal com esse nome!');
    }, 100);
  });

const findAnimalsByAge = (age) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.filter((animal) => animal.age === age);
      if (animal.length !== 0) {
        return resolve(animal);
      }

      return reject('nenhum animal com essa idade!');
    }, 100);
  });

const getAnimal = (name) => findAnimalsByName(name).then((list) => list);

// ---------------------

describe('testando promise - findAnimalByName', () => {
  describe('quando existe o animal com o nome procurado', () => {
    it('retorne o objeto do animal', async () => {
      expect.assertions(1);
      const animal = await getAnimal('Dorminhoco');
      expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
    });
    it('retorna um erro', async () => {
      expect.assertions(1);
      try {
        await getAnimal('Rex');
      } catch (error) {
        expect(error).toMatch('nenhum animal com esse nome!');
      }
    });
  });

  describe('quando não existe o animal com a idade procurada', () => {
    it('retorne o objeto do animal', async () => {
      expect.assertions(1);
      const animal = await findAnimalsByAge(1);
      expect(animal).toStrictEqual([
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
      ]);
    });
  });
  it('retorna um erro', async () => {
    expect.assertions(1);
    try {
      await findAnimalsByAge(7);
    } catch (error) {
      expect(error).toMatch('nenhum animal com essa idade!');
    }
  });
});
