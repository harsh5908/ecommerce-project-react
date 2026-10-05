
import { Product } from "./Product";
export function ProductsGrid({ products  , loadCart}) {
  
  return (
    <div className="products-grid">
      {products.map((product) => {
        // map through the products array and return a JSX element for each product
        return (
       <Product key={product.id} product={product} loadCart={loadCart} />
        );
      })}
    </div>
  );
}
