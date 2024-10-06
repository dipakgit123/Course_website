
import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import AllUser from './components/AllUser';
import EditUser from './components/EditUser';
import Navnbar from './components/Navnbar';
import Ttp from './components/Ttp';
import Management from  './components/Management';
import Microsoft from './components/Microsoft';
import FixedIcons from './components/FixedIcons';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

//Layout Component that include navbar and outlet for routes

const Layout = () =>(
  <>
  <Navnbar />
  <FixedIcons/>
  <main>
    <Outlet />
  </main>
  </>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
         index:true,  // elements when path is '/
         element: <Home />
      },
      {
        path :"/about",
        element :<About/>
      },
      {
        path :"/alluser",
        element:<AllUser/>
      },
      {
        path:"/ttp",
        element:<Ttp/>
      },
      {
        path:"/manage",
        element:<Management/>
      },
      {
        path:"/micro",
        element:<Microsoft/>
      },
      {
        path :"/login",
        element:<Login/>
      },
      {
        path:"/edituser/:id",
        element:<EditUser/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      },
    ]
  }

])

function App() {
  return (
   
    <>

    <RouterProvider router={router} />

    {/* <BrowserRouter>
       <Navnbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element = {<About/>} />
      <Route path="/alluser" element = {<AllUser/>} />
      <Route path="/edituser" element ={<EditUser/>}/>
      <Route path="/signup" element = {<SignUp/>}/>
    </Routes>
    </BrowserRouter> */}  
    </>
  );
}

export default App;
