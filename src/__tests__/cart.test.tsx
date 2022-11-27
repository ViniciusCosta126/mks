import { render, screen, fireEvent, } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { NavBar } from "../components/NavBar";
import { Provider } from "react-redux";
import store from "../store/store";
import { Cart } from "../components/Cart";
import { CardItem } from "../components/CardItem";

const product = {
  id: 1,
  name: "Iphone 11 128 GB",
  brand: "Apple",
  description:
    "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
  photo:
    "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
  price: "5000.00",
};

describe("Testes do Carrinho de compras", () => {
  test("Checking if the nav bar is being rendered", () => {
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );
    const nav = screen.getByTestId("navBar");
    expect(nav).toBeInTheDocument;
  });
  test("Checking if the cart is open onClick", () => {
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );
    const btnCart = screen.getByTestId("btnCart");
    fireEvent.click(btnCart);
    expect(screen.getByText("Carrinho de compras")).toBeTruthy;
  });
  test("Checking if the cart is false onClick", () => {
    render(
      <Provider store={store}>
        <Cart cartVisible={true} handleCart={() => {}} />
      </Provider>
    );
    const btnClose = screen.getByTestId("btnClose");
    fireEvent.click(btnClose);
    expect(screen.getByText("Carrinho de compras")).toBeFalsy;
  });
  test("Check if the item is being added to the cart", () => {
    render(
      <Provider store={store}>
        <CardItem product={product} />
        <Cart cartVisible={true} handleCart={() => {}} />
      </Provider>
    );

    const addItem = screen.getByTestId("btnComprar");
    fireEvent.click(addItem);
      expect(screen.getByTestId("itemCart")).toBeTruthy;
  });
  test("Check if you are adding and decreasing the number of items", () => {
    render(
      <Provider store={store}>
        <CardItem product={product} />
        <Cart cartVisible={true} handleCart={() => {}} />
      </Provider>
    );

    const addItem = screen.getByTestId("btnComprar");
    fireEvent.click(addItem);
    const addQtd = screen.getByTestId("addQtd")
    fireEvent.click(addQtd)
    expect(screen.getByTestId("qtd")).toHaveTextContent("3")
    const removeQtd = screen.getByTestId("removeQtd")
    fireEvent.click(removeQtd)
    expect(screen.getByTestId("qtd")).toHaveTextContent("2")
  });
});
