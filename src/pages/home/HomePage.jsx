import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../component/Header";
import "./HomePage.css";
import { ProductsGrid } from "./ProductGrid";
export function HomePage({ cart , loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect( () => {
    const getHomeData = async()=>{

     const response = await axios.get("/api/products")
     
      setProducts(response.data);
    }
    getHomeData();
  }, []); // [] => dependency array is empty, so this effect will only run once when the component mounts

  return (
    <>
      <title>Ecommerce project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.svg" />
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />{" "}
      </div>
    </>
  );
}
