const repo = require('../repositories/productRepository');

function listProducts() {
  return repo.getAll();
}

function createProduct({ nombre, descripcion, precio }) {
  const product = {
    id: Date.now(),
    nombre,
    descripcion,
    precio: parseFloat(precio)
  };
  return repo.add(product);
}

function editProduct(id, data) {
  return repo.update(id, data);
}

function deleteProduct(id) {
  return repo.remove(id);
}

module.exports = { listProducts, createProduct, editProduct, deleteProduct };
