
function ProductCard({ product, onViewDetails }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/placeholder.svg";
          }}
        />
      </div>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.title}</h3>

        <p className="product-price">
          ${Number(product.price).toFixed(2)}
        </p>

        <p className="product-rating">
          <span>★</span> {product.rating}
        </p>

        <button
          className="details-btn"
          onClick={() => onViewDetails(product)}
        >
          View Details <span>→</span>
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
