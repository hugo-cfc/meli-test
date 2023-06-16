interface OptionalParams {
  sort?: string | null;
  price?: string | null;
}

export default function urlGenerator(
  pathname: string,
  options?: OptionalParams
): string {
  let url = `${pathname}`;

  if (options) {
    const queryParams = new URLSearchParams();

    if (options.sort) {
      queryParams.append("sort", options.sort);
    }

    if (options.price) {
      queryParams.append("price", options.price);
    }

    const queryString = queryParams.toString();

    if (queryString) {
      url += `?${queryString}`;
    }
  }

  return url;
}
