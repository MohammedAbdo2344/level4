import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root';
import Home from "./Pages/Home/Home";
import Create from "./Pages/Create/Create";
import Profile from "./Pages/Profile/profile";
import Settingg from "./Pages/Setting/setting";
import Notfound from "./Pages/Notfound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
      <Route path="setting" element={<Settingg />} />
      <Route path="*" element={<Notfound/>} />
    </Route>
  )
);
function App() {

  return (<RouterProvider router={router} />);
}

export default App;