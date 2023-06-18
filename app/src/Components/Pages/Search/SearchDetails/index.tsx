import Filter from "../../../../@types/Filter";
import FilterBadge from "../FilterBadge";

interface SearchDetailsProps {
  search: string;
  filters: Filter[] | null;
}

const SearchDetails = ({ search, filters }: SearchDetailsProps) => {
  return (
    <div className="flex flex-col gap-y-2 mt-4 px-4 tablet:hidden">
      <h1 className="text-grayTextML">{search}</h1>

      {filters?.map((filter) => {
        if (filter.id !== "price") return;

        return <FilterBadge key={filter.id} title={filter.values[0].name} />;
      })}
    </div>
  );
};

export default SearchDetails;
