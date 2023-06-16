"use client";

import EmptySearch from "../../../../Components/EmptySearch";
import Product from "../Product";
import { useGlobalContext } from "../../../../app/Context/searchContext";
import useProducts from "./useProducts";

const Products = () => {
  const { products } = useGlobalContext();
  const { isLoading } = useProducts();

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : products.length > 0 ? (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <EmptySearch description="Nenhum resultado encontrado" />
      )}
    </>
  );
};

export default Products;
