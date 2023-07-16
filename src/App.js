import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root';
import Home from "./Pages/Home/Home";
import Create from "./Pages/Create/Create";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
