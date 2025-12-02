// app/page.tsx
import { products, Product } from "../data/products";

const SHOP_PHONE = "+918866007575";      // real phone with +91
const WHATSAPP_NUMBER = "918866007575";  // same number, without +, with 91

function getWhatsAppLink(product: Product) {
  const text = `Hello, I saw your website. I am interested in "${product.name}" (ID: ${product.id}). Please tell price and availability.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function Home() {
  return (
    <main className="page">
      {/* HEADER */}
      <header className="header">
        <div>
          <h1 className="shopName">shara infinite laptech</h1>
          <p className="tagline">
            RAM • Monitors • SSD • PC Parts – Call for best price
          </p>
        </div>

        <div className="headerButtons">
          <a href={`tel:${SHOP_PHONE}`} className="btn btn-call">
            Call Now
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            className="btn btn-wa"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* CONTENT */}
      <section className="content">
        <div className="listHeader">
          <h2>Available Products</h2>
          <span className="totalText">Total items: {products.length}</span>
        </div>

        {/* GRID */}
        <div className="grid">
          {products.map((product: Product) => (
            <article key={product.id} className="card">
              {/* IMAGE */}
              <img
                src={product.imageUrl}
                alt={product.name}
                className="productImage"
              />

              {/* TEXT INFO */}
              <div>
                <h3 className="productName">{product.name}</h3>
                <p className="productMeta">
                  {product.brand} • {product.category}
                </p>
                <p className="productSpecs">{product.specs}</p>
                <p className="productStock">
                  {product.stock > 0
                    ? `${product.stock} left`
                    : "Currently unavailable"}
                </p>
              </div>

              {/* FOOTER */}
              <div className="cardFooter">
                <span
                  className={
                    product.inStock ? "badge badge-in" : "badge badge-out"
                  }
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>

                <div className="cardButtons">
                  <a
                    href={getWhatsAppLink(product)}
                    target="_blank"
                    className="btn btn-small btn-wa"
                  >
                    Enquiry
                  </a>
                  <a
                    href={`tel:${SHOP_PHONE}`}
                    className="btn btn-small btn-call"
                  >
                    Call
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="note">
          Call or WhatsApp to confirm latest price and availability.
        </p>
      </section>
    </main>
  );
}
