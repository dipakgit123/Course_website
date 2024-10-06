
import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navnbar from './components/Navnbar';
import SignUp from './components/SignUp';
import About from './components/About';

import OurCourses from './components/OurCourses';
import DataScience from './components/DataScience';
import Contact from './components/Contact';
import DataAnalyst from './components/DataAnalyst';
import PowerBI from './components/PowerBI';
import Aws from './components/Aws';
import ReactJS from './components/ReactJS';
import JavaDevelopment from './components/JavaDevelopment';
import Python from './components/Python';
import WebDevelopment from './components/WebDevelopment';
import MicrosoftAzure from './components/MicrosoftAzure';
import SoftwareTesting from './components/SoftwareTesting';
import SAP from './components/SAP';
import Salesforce from './components/Salesforce';
import SAPFICO from './components/SAPFICO';
import BigDataHadoop from './components/BigDatAHadoop';
import OracleSQLPLSQL from './components/OracleSQLPLSQL';
import SAPSD from './components/SAPSD';
import Robotic from './components/Robotic';
import DotNet from './components/DotNet';
import SAPFieldglass from './components/SAPFieldglass';
import BusinessAnalyst from './components/BusinessAnalyst';

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

      // ourcourses start
      {
        path:"/ourcourses",
        element:<OurCourses/>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path:"/datascience",
        element:<DataScience/>
      },
      {
        path: "/dataanalyst",
        element: <DataAnalyst />
      },
      {
        path: "/powerbi",
        element: <PowerBI />
      },
       {
         path: "/aws",
         element: <Aws />
       },
       {
        path: "/reactjs",
         element: <ReactJS />
       },
       {
        path: "/javadevelopment",
         element: <JavaDevelopment />
       },
       {
        path: "/python",
         element: <Python />
       },
       {
        path: "/web",
         element: <WebDevelopment />
       },
       {
        path: "/microsoftazure",
         element: <MicrosoftAzure />
       },
       {
        path: "/softwaretesting",
         element: <SoftwareTesting />
       },
       {
        path: "/sap",
         element: <SAP />
       },
       {
        path: "/salesforce",
         element: <Salesforce />
       },
       {
        path: "/sapfico",
         element: <SAPFICO />
       },
       {
        path: "/bigdatahadoop",
         element: <BigDataHadoop />
       },
       {
        path: "/oraclesqlplsql",
         element: <OracleSQLPLSQL />
       },
       {
        path: "/sapsd",
         element: <SAPSD />
       },
       {
        path: "/robotic",
         element: <Robotic />
       },
       {
        path: "/dotnet",
         element: <DotNet />
       },
       {
        path: "/sapfieldglass",
         element: <SAPFieldglass />
       },
       {
        path: "/businessanalyst",
         element: <BusinessAnalyst />
       }

     // ourcourses end
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
