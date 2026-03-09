import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import AuthProvider from "../../context/AuthContext";

test("protected route renders children", () => {
  // fake logged-in token
  localStorage.setItem("token", "fake-jwt-token-12345");

  render(
    <BrowserRouter>
      <AuthProvider>
        <ProtectedRoute>
          <div>Secret Page</div>
        </ProtectedRoute>
      </AuthProvider>
    </BrowserRouter>
  );

  expect(screen.getByText("Secret Page")).toBeInTheDocument();

  /// Clean up after test /// or else it will stay there and have you pulling your hair out hypothetically
  localStorage.removeItem("token");
});








// import { render, screen } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import ProtectedRoute from "../ProtectedRoute";
// import AuthProvider, { AuthContext } from "../../context/AuthContext";

// test("protected route renders children", () => {
//   render(
//     <BrowserRouter>
//       <AuthContext.Provider value={{ user: { username: "user" } }}>
//         <ProtectedRoute>
//           <div>Secret Page</div>
//         </ProtectedRoute>
//       </AuthContext.Provider>
//     </BrowserRouter>
//   );

//   expect(screen.getByText("Secret Page")).toBeInTheDocument();
// });