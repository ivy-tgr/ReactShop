// fetches products from the API
export async function getProducts() {
  const res = await fetch("/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

// fetches reviews from the API
export async function getReviews() {
  const res = await fetch("/api/reviews");
  if (!res.ok) {
    throw new Error("Failed to fetch reviews");
  }
  return res.json();
}

// creates a new product on the database
export async function createProduct(product) {
  const res = await fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (!res.ok) {
    throw new Error("Failed to create product");
  }
  return res.json();
}

// updates a product on the database
export async function updateProduct(id, product) {
  const res = await fetch(`/api/products/${id}/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (!res.ok) {
    throw new Error("Failed to update product");
  }
  return res.json();
}

// deletes a product from the database
export async function deleteProduct(id) {
  const res = await fetch(`/api/products/${id}/delete`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Failed to delete product");
  }
  return res.ok;
}
