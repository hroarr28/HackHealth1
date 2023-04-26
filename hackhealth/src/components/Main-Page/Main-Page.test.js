import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect } from "@jest/globals";
import MainPage from "./Main-Page";

const user = "";

test("Wednesday button function on main page is present", function () {
  render(<MainPage getUserName={jest.fn} user={user} handleClick={jest.fn} />);
  //screen.logTestingPlaygroundURL();
  const wedButton = screen.getByRole("button", { name: "W" });
  expect(wedButton).toBeVisible();
});

test("Weekly number in input field matches user input", function () {
    render(<MainPage getUserName={jest.fn} user={user} handleClick={jest.fn} />);
    const num = "1000";
    const input = screen.getByRole("textbox");
    userEvent.type(input, num);
    expect(screen.getByRole("textbox")).toHaveValue(num);
  });