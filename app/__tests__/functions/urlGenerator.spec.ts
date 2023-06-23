import urlGenerator from "@/functions/urlGenerator";

describe("urlGenerator", () => {
  it("should generate the correct URL without options", () => {
    const config = {
      pathname: "/example",
      api: true,
    };

    const url = urlGenerator(config);

    expect(url).toBe("?q=/example");
  });

  it("should generate the correct URL with options", () => {
    const config = {
      pathname: "/example",
      api: true,
    };

    const options = {
      sort: "name",
      price: "asc",
    };

    const url = urlGenerator(config, options);

    expect(url).toBe("?q=/example&sort=name&price=asc");
  });

  it("should generate the correct URL with null options", () => {
    const config = {
      pathname: "/example",
      api: false,
    };

    const options = {
      sort: null,
      price: null,
    };

    const url = urlGenerator(config, options);

    expect(url).toBe("/example");
  });
});
