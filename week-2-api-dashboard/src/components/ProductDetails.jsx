
import { useEffect } from "react";

function ProductDetails({ product, onClose }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!product) return null;

  const stock =
    product.stock === "N/A" ||
    product.stock === undefined ||
    product.stock === null
      ? "Not Available"
      : product.stock;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <aside
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label="Product Details"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close product details"
        >
          ×
        </button>

        <div className="details-image-box">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="details-image"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
        </div>

        <div className="details-content">
          <span className="product-category">
            {product.category}
          </span>

          <h2>{product.title}</h2>

          <p className="details-price">
            ${Number(product.price).toFixed(2)}
          </p>

          <p className="details-rating">
            ★ {product.rating}
          </p>

          <h3>Product Description</h3>
          <p className="details-description">
            {product.description || "No description available."}
          </p>

          <div className="details-specifications">
            <div>
              <span>Brand</span>
              <strong>{product.brand || "N/A"}</strong>
            </div>

            <div>
              <span>Category</span>
              <strong>{product.category}</strong>
            </div>

            <div>
              <span>Stock</span>
              <strong>{stock}</strong>
            </div>

            <div>
              <span>Source</span>
              <strong>
                {String(product.id).startsWith("fake-")
                  ? "Fake Store API"
                  : "DummyJSON"}
              </strong>
            </div>
          </div>

          <button className="drawer-close-button" onClick={onClose}>
            Continue Browsing
          </button>
        </div>
      </aside>
    </div>
  );
}

export default ProductDetails;
