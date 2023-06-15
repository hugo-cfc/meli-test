"use client";

import EmptySearch from "../../../../Components/EmptySearch";
import Product from "../Product";
import { useGlobalContext } from "../../../../app/Context/searchContext";

const Products = () => {
  const { products } = useGlobalContext();

  return (
    <>
      {products.length > 1 ? (
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
