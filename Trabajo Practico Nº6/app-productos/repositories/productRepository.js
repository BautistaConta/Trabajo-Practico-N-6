let products = [];

function getAll() {
  return products;
}

function add(product) {
  products.push(product);
  return product;
}

function update(id, updated) {
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) products[index] = { ...products[index], ...updated };
  return products[index];
}

function remove(id) {
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) products.splice(index, 1);
}

module.exports = { getAll, add, update, remove };
