import CountriesContextProvider from "./context/CountriesContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Root";
import Main from "./pages/Main";
import CountrieInfo from "./pages/CountrieInfo";

const router = createBrowserRouter([
  {
    path: "/REST-countries-API/",
    element: <RootPage />,
    children: [
      {
        path: "/REST-countries-API/",
        element: <Main />,
      },
      {
        path: "/REST-countries-API/:countrieId",
        element: <CountrieInfo />,
      },
    ],
  },
]);

function App() {
  return (
    <CountriesContextProvider>
      <RouterProvider router={router} />
    </CountriesContextProvider>
  );
}

export default App;
