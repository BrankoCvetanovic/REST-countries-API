import CountriesContextProvider from "./context/CountriesContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Root";
import Main from "./pages/Main";
import CountrieInfo from "./pages/CountrieInfo";

const router = createBrowserRouter([
  {
    path: "/vite-react-router/",
    element: <RootPage />,
    children: [
      {
        path: "/vite-react-router/",
        element: <Main />,
      },
      {
        path: "/vite-react-router/:countrieId",
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
