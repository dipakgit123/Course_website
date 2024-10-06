
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import AllUser from './components/AllUser';
import EditUser from './components/EditUser';
import Navnbar from './components/Navnbar';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Login from './components/Login';
import Placement from './components/Placement';
import Hybrid from './components/Hybrid';
import Online from './components/Online';
import Offline from './components/Offline';
import Demo from './components/Demo';


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
        path :"/about",
        element :<About/>
      },
      {
        path :"/alluser",
        element:<AllUser/>
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
      {
        path:"/place",
        element:<Placement/>
      },
      {
        path:"/batch",
        element:<Hybrid/>
      },
      {
        path:'/online',
        element:<Online/>
      },
      {
        path:'/offline',
        element:<Offline/>
      },
      {
        path:'/demo',
        element:<Demo/>
      }
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
