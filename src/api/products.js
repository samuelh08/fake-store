export async function getProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  const json = await response.json();
  console.log(json);
  return json;
}

export async function getProduct({ id }) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const json = await response.json();
  return json;
}
