import Filter from "@/@types/Filter";

import FilterBadge from "../FiltersComponents/FilterBadge";

interface SearchDetailsProps {
  search: string;
  filters: Filter[] | null;
}

const SearchDetails = ({ search, filters }: SearchDetailsProps) => {
  return (
    <div
      className="mt-4 flex flex-col gap-y-2 px-4 tablet:hidden"
      data-testid="container"
    >
      <h1 className="text-grayTextML">{decodeURIComponent(search)}</h1>

      {filters?.map((filter) => {
        if (filter.id !== "price") return;

        return <FilterBadge key={filter.id} title={filter.values[0]?.name} />;
      })}
    </div>
  );
};

export default SearchDetails;
