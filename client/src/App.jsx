import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";

// El componente App es el encargado de renderizar el navbar y el outlet,
// que es donde se renderizan los componentes de las rutas

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
