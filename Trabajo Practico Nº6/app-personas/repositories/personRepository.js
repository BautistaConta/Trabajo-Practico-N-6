let people = [];

function getAll() {
  return people;
}

function add(person) {
  people.push(person);
  return person;
}

function update(id, updated) {
  const index = people.findIndex(p => p.id === id);
  if (index !== -1) people[index] = { ...people[index], ...updated };
  return people[index];
}

function remove(id) {
  const index = people.findIndex(p => p.id === id);
  if (index !== -1) people.splice(index, 1);
}

module.exports = { getAll, add, update, remove };
