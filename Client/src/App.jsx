import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BooksCard from "./BooksCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
function App() {

  const baseUrl = "http://localhost:5000/books";
  const [products, setProducts] = useState([]);

  async function getData() {
    try {
      const response = await axios.get(baseUrl);
      setProducts(response.data);
    } catch (error) {
      console.error("Error", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="mb-5">Products</h1>
        <div className="row">
          {products &&
            products.map((product) => (
              <BooksCard key={product.id} {...product} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
