import {
  setTotalResults,
  setProducts,
  setIsSorterDropdownOpen,
  setSearch,
  setAvailableSorts,
  setSort,
  setAvailableFilters,
  setFilters,
} from "../src/app/redux/Features/productsSlice";
import { useAppDispatch } from "../src/hooks/reduxHooks/reduxHooks";
import { availableFilters } from "./availableFilters";
import { availableSorts } from "./availableSorts";
import { filters } from "./filters";
import { product } from "./product";
import { sortMock } from "./sort";

const ReduxTesterComponent = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setTotalResults(2))}>totalResults</button>
      <button onClick={() => dispatch(setProducts([product]))}>products</button>
      <button onClick={() => dispatch(setIsSorterDropdownOpen(true))}>
        isSorterDropdownOpen
      </button>
      <button onClick={() => dispatch(setSearch("test"))}>search</button>
      <button onClick={() => dispatch(setAvailableSorts(availableSorts))}>
        availableSorts
      </button>
      <button onClick={() => dispatch(setSort(sortMock[0]))}>sort</button>
      <button onClick={() => dispatch(setAvailableFilters(availableFilters))}>
        availableFilters
      </button>
      <button onClick={() => dispatch(setFilters(filters))}>filters</button>
    </div>
  );
};

export default ReduxTesterComponent;
