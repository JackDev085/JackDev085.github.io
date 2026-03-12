import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Componentes
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import Workouts from "./pages/Workouts.jsx";
import Exercises from "./pages/Exercises.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import Games from "./pages/Games.jsx";
import GameDetail from "./pages/GamesDetail.jsx";
import Me from "./pages/Me.jsx";
import Donate from "./pages/Donate.jsx";
import About from "./pages/About.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then(() => {
      console.log("Service Worker registrado!");
    });
  });
}

// Configure as rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "/", // Rota padrão para Home
        element: <Home />,
        index: true,
      },
      {
        path: "workouts",
        element: <Workouts />,
      },
      {
        path: "exercises",
        element: <Exercises />,
      },
      {
        path: "games",
        element: <Games />,
      },
      {
        path: "game/:id",
        element: <GameDetail />,
      },
      {
        path: "me",
        element: <Me />,
      },
      {
        path: "support",
        element: <Donate />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
