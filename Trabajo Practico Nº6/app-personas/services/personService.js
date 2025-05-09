const repo = require('../repositories/personRepository');

function listPeople() {
  return repo.getAll();
}

function createPerson({ nombre, apellido, edad }) {
  const person = { id: Date.now(), nombre, apellido, edad };
  return repo.add(person);
}

function editPerson(id, data) {
  return repo.update(id, data);
}

function deletePerson(id) {
  return repo.remove(id);
}

module.exports = { listPeople, createPerson, editPerson, deletePerson };
