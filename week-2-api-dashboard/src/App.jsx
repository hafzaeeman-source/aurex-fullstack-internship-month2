
import { useState, useEffect } from "react";
import { getProducts } from "./services/productApi";
import ProductList from "./components/ProductList";
import SearchFilter from "./components/SearchFilter";
import ProductDetails from "./components/ProductDetails";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category]);

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const safeCurrentPage = Math.min(
    currentPage,
    Math.max(totalPages, 1)
  );

  const startIndex = (safeCurrentPage - 1) * productsPerPage;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="dashboard-page">
      <header className="site-header">
        <div className="nav-container">
          <a className="brand" href="#home">
            <span className="brand-icon">◈</span>
            <span>
              <strong>
                API <em>Dashboard</em>
              </strong>
              <small>Product Management System</small>
            </span>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="hero-eyebrow">
              DISCOVER AMAZING PRODUCTS
            </span>

            <h1>
              Shop Smarter with
              <span> API Dashboard</span>
            </h1>

            <p>
              Explore products from Fake Store API and DummyJSON.
              Search, filter by category and view product details
              with ease.
            </p>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-icon">▣</span>
              <div>
                <strong>{products.length}</strong>
                <small>Total Products</small>
              </div>
            </div>

            <div className="stat-card">
              <span className="stat-icon">◇</span>
              <div>
                <strong>2</strong>
                <small>APIs Integrated</small>
              </div>
            </div>

            <div className="stat-card">
              <span className="stat-icon">▦</span>
              <div>
                <strong>{categories.length}</strong>
                <small>Categories</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="dashboard" id="products">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">
              OUR COLLECTION
            </span>
            <h2>Explore Products</h2>
          </div>

          <span className="result-count">
            {filteredProducts.length} products found
          </span>
        </div>

        {loading ? (
          <div className="status-message">
            Loading products...
          </div>
        ) : error ? (
          <div className="status-message error">
            Error: {error}
          </div>
        ) : (
          <>
            <SearchFilter
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              categories={categories}
            />

            <ProductList
              products={currentProducts}
              onViewDetails={setSelectedProduct}
            />

            {totalPages > 1 && (
              <div className="pagination">
                <button
                  disabled={safeCurrentPage === 1}
                  onClick={() =>
                    handlePageChange(safeCurrentPage - 1)
                  }
                >
                  Previous
                </button>

                {Array.from(
                  { length: totalPages },
                  (_, index) => (
                    <button
                      key={index + 1}
                      className={
                        safeCurrentPage === index + 1
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        handlePageChange(index + 1)
                      }
                    >
                      {index + 1}
                    </button>
                  )
                )}

                <button
                  disabled={safeCurrentPage === totalPages}
                  onClick={() =>
                    handlePageChange(safeCurrentPage + 1)
                  }
                >
                  Next
                </button>
              </div>
            )}

            {filteredProducts.length > 0 && (
              <p className="pagination-info">
                Showing {startIndex + 1}–
                {Math.min(
                  startIndex + productsPerPage,
                  filteredProducts.length
                )}{" "}
                of {filteredProducts.length} products
              </p>
            )}
          </>
        )}
      </main>

      <footer className="site-footer" id="about">
        <strong>API Dashboard</strong>
        <p>
          A React product management dashboard powered by
          Fake Store API and DummyJSON.
        </p>
        <small>AUREX Internship • Week 2</small>
      </footer>

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;
