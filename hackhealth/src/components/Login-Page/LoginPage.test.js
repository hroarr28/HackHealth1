//import tools for testing - import ☑️
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect } from "@jest/globals";
import LoginPage from "./LoginPage";

const user = "";

test("Profile picture exists", function () {
  render(<LoginPage getUserName={jest.fn} user={user} handleClick={jest.fn} />);
  //screen.logTestingPlaygroundURL();
  const image = screen.getByRole("img", {name: "AvatarImg"});
  expect(image).toBeVisible();
});

test("'Username' heading exists", function () {
  render(<LoginPage getUserName={jest.fn} user={user} handleClick={jest.fn} />);
  //screen.logTestingPlaygroundURL();
  const heading = screen.getByRole("heading", {name: "Username"});
  expect(heading).toBeVisible();
});

test("Input field exists", function () {
  render(<LoginPage getUserName={jest.fn} user={user} handleClick={jest.fn} />);
  //screen.logTestingPlaygroundURL();
  const input = screen.getByRole("textbox");
  expect(input).toHaveAttribute("type", "text");
  expect(input).toBeVisible();
});

test("Text in the input field matches user input", function () {
  render(<LoginPage getUserName={jest.fn} user={user} handleClick={jest.fn} />);
  const name = "Ash";
  const input = screen.getByRole("textbox");
  userEvent.type(input, name);
  expect(screen.getByRole("textbox")).toHaveValue(name);
});

test("Button with 'login' text", function () {
  render(<LoginPage getUserName={jest.fn} user={user} handleClick={jest.fn} />);
  const button = screen.getByRole("button", { name: "LOGIN" });
  expect(button).toBeVisible();
});

//import the component☑️
//target the input field
//check the input field is visible / exists
//check input field has add item label
// target the button
//check the button contains value of buttontext this.props/
// pass a value to add item component using jest.fn()
