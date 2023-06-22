/* eslint-disable @typescript-eslint/naming-convention */
import { NextRequest, NextResponse } from "next/server";

import GetProductData from "../../../@types/GetProducts";
import { fetchWrapper } from "../../../services/fetchWrapper";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const search = searchParams.get("q");
  const sort = searchParams.get("sort");
  const price = searchParams.get("price");

  const {
    query,
    paging,
    results,
    sort: sortApi,
    available_sorts,
    filters,
    available_filters,
  } = await fetchWrapper<GetProductData>(
    `${search}${sort ? `&sort=${sort}` : `${""}`}${
      price ? `&price=${price}` : `${""}`
    }`
  );

  const sortSortersById = [sortApi, ...available_sorts].sort((a, b) => {
    const sorterA = a.id;
    const sorterB = b.id;

    return sorterB < sorterA ? -1 : sorterB > sorterA ? 1 : 0;
  });

  const [avaiablePriceFilters] = available_filters.filter(
    (currentFilter) => currentFilter.id === "price"
  );

  return NextResponse.json({
    query,
    paging,
    results,
    sort: sortApi,
    available_sorts: sortSortersById,
    filters,
    availableFilters: avaiablePriceFilters,
  });
}
