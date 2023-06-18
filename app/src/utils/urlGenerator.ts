interface OptionalParams {
  sort?: string | null;
  price?: string | null;
}

export default function urlGenerator(
  config: {
    pathname: string;
    api: boolean;
  },
  options?: OptionalParams
): string {
  let url = config.api ? `?q=${config.pathname}` : `${config.pathname}`;

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
      url += config.api ? `&${queryString}` : `?${queryString}`;
    }
  }

  return url;
}
