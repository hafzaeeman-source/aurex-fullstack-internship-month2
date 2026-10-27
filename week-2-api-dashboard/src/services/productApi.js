const FAKESTORE_URL = "/api/products";
const DUMMYJSON_URL = "/dummy-api/products?limit=20";

export const getProducts = async () => {
  const [fakeResponse, dummyResponse] = await Promise.all([
    fetch(FAKESTORE_URL),
    fetch(DUMMYJSON_URL),
  ]);

  if (!fakeResponse.ok || !dummyResponse.ok) {
    throw new Error("Failed to fetch products");
  }

  const fakeProducts = await fakeResponse.json();
  const dummyData = await dummyResponse.json();

  const formattedFakeProducts = fakeProducts.map((product) => ({
    ...product,
    id: `fake-${product.id}`,
    thumbnail: `/images/product-${product.id}.png`,
    image: `/images/product-${product.id}.png`,
    rating: product.rating?.rate ?? 0,
    brand: "N/A",
    stock: "N/A",
  }));

  const formattedDummyProducts = dummyData.products.map((product) => ({
    ...product,
    id: `dummy-${product.id}`,
    thumbnail: `/images/dummy-${product.id}.webp`,
    image: `/images/dummy-${product.id}.webp`,
    rating: product.rating ?? 0,
  }));

  return [...formattedFakeProducts, ...formattedDummyProducts];
};