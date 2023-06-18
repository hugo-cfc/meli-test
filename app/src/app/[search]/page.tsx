import { Metadata } from "next";
import Products from "../../Components/Pages/Search/ProductsComponents/Products";
import SearchToolbar from "../../Components/Pages/Search/SearchToolbar";
import Sorter from "../../Components/Pages/Search/SorterComponents/Sorter";
import Filters from "../../Components/Pages/Search/FiltersComponents/Filters";

interface Props {
  params: { search: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const search = params.search;

  return {
    title: `${decodeURIComponent(search)} | Mercado Livre 📦`,
    description:
      "Compre produtos com Frete Grátis no mesmo dia no Mercado Livre Brasil. Encontre milhares de marcas e produtos a preços incríveis.",
  };
}

export default function Search() {
  return (
    <>
      <SearchToolbar />

      <Sorter />

      <div className="pb-32 text-grayTextML tablet:grid tablet:grid-cols-8 tablet:gap-x-4">
        <Filters />
        <Products />
      </div>
    </>
  );
}
