import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

// Helper function to fetch products
async function fetchProducts() {
  const res = await fetch('/api/products');
  const data = await res.json();
  return data;
}

// Helper function to create a product
async function createProduct(product) {
  const res = await fetch('/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  return res.json();
}

// Helper function to update a product
async function updateProduct(id, product) {
  const res = await fetch(`/api/products/${id}/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  return res.json();
}

// Helper function to delete a product
async function deleteProduct(id) {
  const res = await fetch(`/api/products/${id}/delete`, {
    method: 'DELETE',
  });
  return res.ok;
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    code: '',
    name: '',
    description: '',
    image: '',
    price: '',
    category: '',
    quantity: '',
    inventoryStatus: '',
    rating: '',
  });
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const newProduct = await createProduct(form);
    setProducts([...products, newProduct]);
    setForm({
      code: '',
      name: '',
      description: '',
      image: '',
      price: '',
      category: '',
      quantity: '',
      inventoryStatus: '',
      rating: '',
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (editProduct) {
      const updatedProduct = await updateProduct(editProduct.id, form);
      setProducts(products.map(p => p.id === editProduct.id ? updatedProduct : p));
      setEditProduct(null);
      setForm({
        code: '',
        name: '',
        description: '',
        image: '',
        price: '',
        category: '',
        quantity: '',
        inventoryStatus: '',
        rating: '',
      });
    }
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter(p => p.id !== id));
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setForm({
      code: product.code,
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
      category: product.category,
      quantity: product.quantity,
      inventoryStatus: product.inventoryStatus,
      rating: product.rating,
    });
  };

  return (
    <div>
      <Navbar/>
      <h1>Products</h1>

      <form onSubmit={editProduct ? handleUpdate : handleCreate}>
        <input
          type="text"
          placeholder="Code"
          value={form.code}
          onChange={(e) => setForm({ ...form, code: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) })}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: parseInt(e.target.value, 10) })}
          required
        />
        <input
          type="text"
          placeholder="Inventory Status"
          value={form.inventoryStatus}
          onChange={(e) => setForm({ ...form, inventoryStatus: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Rating"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: parseInt(e.target.value, 10) })}
          required
        />
        <button type="submit">{editProduct ? 'Update Product' : 'Create Product'}</button>
      </form>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
