import Product from "@/Components/Pages/Search/ProductsComponents/Product";
import { render, screen } from "@testing-library/react";

import {
  product,
  noFreeShipingProduct,
  noInstallmentsProduct,
} from "../../../../../../mocks/product";

describe("<Product />", () => {
  it("should render Product, free shipping and installments", () => {
    render(<Product product={product} />);

    const image = screen.getByAltText(product.title);
    const price = screen.getByTestId("h1-price");
    const freeShipingBadge = screen.getByTestId("free-shipping");
    const stateName = screen.getAllByText(product.address.state_name);
    const title = screen.getByText(product.title);
    const installments = screen.getByTestId("span-installments");

    expect(image).toBeInTheDocument();
    expect(freeShipingBadge).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(stateName[0]).toBeInTheDocument();
    expect(installments).toBeInTheDocument();
  });

  it("should render Product, installments, but don't free shipping", () => {
    render(<Product product={noFreeShipingProduct} />);

    const freeShipingBadge = screen.queryByTestId("free-shipping");

    expect(freeShipingBadge).not.toBeInTheDocument();
  });

  it("should render Product, free shipping, but don't installments", () => {
    render(<Product product={noInstallmentsProduct} />);

    const installments = screen.queryByTestId("span-installments");

    expect(installments).not.toBeInTheDocument();
  });
});
