//import tools for testing - import ☑️
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect } from "@jest/globals";
import LoginPage from "./LoginPage";

const user = "";

test("Input field exists", function () {
  render(<LoginPage getUserName={jest.fn} user={user} handleClick={jest.fn} />);
  //screen.logTestingPlaygroundURL();
  const input = screen.getByRole("textbox");
  expect(input).toBeVisible();
});

// test("Button with text Add To List appears on screen", function () {
//   render(<AddItem addToList={jest.fn} buttonText={buttonText} />);
//   const button = screen.getByRole("button", { name: buttonText });
//   expect(button).toBeVisible();
// });

//import the component☑️
//target the input field
//check the input field is visible / exists
//check input field has add item label
// target the button
//check the button contains value of buttontext this.props/
// pass a value to add item component using jest.fn()
