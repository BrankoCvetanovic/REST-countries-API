import CountriesContextProvider from "./context/CountriesContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Root";
import Main from "./pages/Main";
import CountrieInfo from "./pages/CountrieInfo";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/:countrieId",
          element: <CountrieInfo />,
        },
      ],
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/react-vite-gh-pages/" }
);

function App() {
  return (
    <CountriesContextProvider>
      <RouterProvider router={router} />
    </CountriesContextProvider>
  );
}

export default App;
