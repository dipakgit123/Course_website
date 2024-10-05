
import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navnbar from './components/Navnbar';
import SignUp from './components/SignUp';
import About from './components/About';

//Layout Component that include navbar and outlet for routes

const Layout = () =>(
  <>
  <Navnbar />
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
        path :"/login",
        element:<Login/>
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
