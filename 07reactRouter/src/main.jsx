import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import User from './component/User/User.jsx'
import Github, { githubInfoLoader } from './component/Github/Github.jsx'
//import { Route } from 'react-router-dom'

const router = createBrowserRouter(
   [
     {
       path:'/',
      element:<Layout />,
       children:[
        {
          path:"",
           element:< Home />
         },
         {
           path:"about",
           element:<About />
         },
        {
            path:"contact",
           element: <Contact />
         },
          {
            path:"user/:userid",
            element:<User />
          },
          {
            loader:githubInfoLoader,
            path:"github",
            element:<Github />
          }
     ]
     }
   ]
 )

// const router =createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path="" element={<Home/>}/>
//       <Route path="about" element={<About />}/>
//       <Route path="contact" element={<Contact />}/>
//       <Route path="user/:userid" element={<User/>}/>
//       <Route 
//       loader={githubInfoLoader}
//       path="github"  element={<Github/>} />
//     </Route> 
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
