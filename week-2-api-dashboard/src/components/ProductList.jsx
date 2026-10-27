
import ProductCard from "./ProductCard";

function ProductList({ products, onViewDetails }) {
  if (products.length === 0) {
    return <p className="empty-state">No products found.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}

export default ProductList;
