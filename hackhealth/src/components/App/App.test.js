import { render, screen, fireEvent } from "@testing-library/react";
import App from "./index";
import { BrowserRouter as Router } from "react-router-dom";

test("renders learn react link", () => {
  render(
    <Router>
      <App />
    </Router>
  );
});

// describe('Login Button', () => {
//   it('should go to next page on when logging in', () => {
// render(
//       <Router>
//         <App />
//       </Router>
//     );

//     const input = screen.getByRole('textbox');
//     const loginButton = screen.getByRole('button', {name: 'LOGIN'});

//     fireEvent.change(input, { target: { value: 'Ash' } });
//     fireEvent.click(loginButton);

//     // text "Welcome Back" should be on page after successful login
//     expect(screen.getByRole('heading', {name: 'welcome-heading', 'Welcome Back, !'})).toBeInTheDocument();
//   });
// });
