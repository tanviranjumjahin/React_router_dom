import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Product from './componentes/Product';


const router = createBrowserRouter(

  createRoutesFromElements(
    <>


      <Route
        path="/" element={<Product />}>
      </Route>
      <Route
        path="/about" element={'404 Not Found'}>
      </Route>

    </>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App