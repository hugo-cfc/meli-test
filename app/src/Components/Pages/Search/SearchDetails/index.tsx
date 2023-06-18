import Filter from "../../../../@types/Filter";

interface SearchDetailsProps {
  search: string;
  filters: Filter[] | null;
}

const SearchDetails = ({ search, filters }: SearchDetailsProps) => {
  return (
    <>
      <div className="mt-4 px-4 text-grayTextML">{search}</div>
      {filters?.map((filter) => {
        if (filter.id !== "price") return;

        return <h1 key={filter.id}>{filter.values[0].name}</h1>;
      })}
    </>
  );
};

export default SearchDetails;
