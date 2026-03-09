import { render, screen } from "@testing-library/react";
import Login from "../Login";
import AuthProvider from "../../context/AuthContext";
import { BrowserRouter } from "react-router-dom";

test("renders login form", () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </BrowserRouter>
  );

  expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
});